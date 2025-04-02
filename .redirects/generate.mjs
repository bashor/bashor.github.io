import fs from "fs";
import path from "path";

const configFile = path.resolve("./config.txt");
const templateFile = path.resolve("redirect_template/index.html");
const outputDir = path.resolve("..");

// Parse the configuration file
const parseConfig = (filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
    const rules = [];

    for (let i = 0; i < content.length; i++) {
        const line = content[i].trim();

        // Skip empty lines or comments
        if (!line || line.startsWith("#")) {
            continue;
        }

        const targetUrl = line; // The current line is the target
        const nextLine = content[++i]?.trim(); // The next line should be the redirect URL

        if (!nextLine) {
            throw new Error(`Redirect URL is missing for target: ${targetUrl}`);
        }
        
        const optionalText = content[i + 1]?.trim();

        // Determine if the next line is a comment, empty, or optional metadata
        if (!optionalText || optionalText.startsWith("#")) {
            rules.push({target: targetUrl, redirect: nextLine});
        } else {
            rules.push({target: targetUrl, redirect: nextLine, text: optionalText});
            i++; // Skip the extra line because it contains optional text
        }

        // Ensure the next line is empty (enforce rule about empty lines between rules)
        const nextNextLine = content[i + 1]?.trim();
        if (nextNextLine && !nextNextLine.startsWith("#")) {
            throw new Error(`Expected an empty line after: ${nextLine}`);
        }
    }

    return rules;
};

// Generate a redirect folder structure
const generateRedirects = (rules, templatePath, outputDir) => {
    // Load the template
    const templateContent = fs.readFileSync(templatePath, 'utf-8');

    for (const {target, redirect, text} of rules) {
        // Use target URL to create a directory structure
        const targetPath = path.join(outputDir, target.replace(/^\//, "").replace(/\/$/, ""));

        // Full directory path for the target
        const directoryPath = path.resolve(targetPath);
        const filePath = path.join(directoryPath, "index.html");

        // Ensure the directory exists
        fs.mkdirSync(directoryPath, {recursive: true});
        
        // Replace template placeholder with actual redirect URL
        const redirectContent = 
            templateContent
                .replaceAll("__TARGET__", target)
                .replaceAll("__URL__", redirect)
                .replaceAll("__TEXT__", text ?? "Redirect");

        // Write the index.html file inside the target directory
        fs.writeFileSync(filePath, redirectContent, "utf-8");

        console.log(`Created: ${directoryPath} -> ${redirect}`);
    }
};

// Find existing redirects
const findExistingRedirects = (outputDir) => {
    const existingRedirects = [];

    const traverse = (dir, base = "") => {
        const entries = fs.readdirSync(dir, {withFileTypes: true});

        for (const entry of entries) {
            if (entry.name.startsWith(".")) continue;

            const fullPath = path.join(dir, entry.name);
            const relativePath = path.join(base, entry.name);

            if (entry.isDirectory()) {
                traverse(fullPath, relativePath);
            } else if (entry.name === "index.html" || entry.name === "index.htm") {
                // Extract the redirect from the index.html content
                const fileContent = fs.readFileSync(fullPath, "utf-8");
                const redirectMatch = fileContent.match(/<meta http-equiv="Refresh" content=".*;\s*url=([^"]*)/);
                const redirect = redirectMatch ? redirectMatch[1] : null;

                if (fileContent.indexOf("<meta http-equiv=\"Refresh\"") >= 0) {
                    existingRedirects.push({target: path.dirname(relativePath), redirect});
                }
            }
        }
    };

    traverse(outputDir);

    // Return an array of objects with target and redirect
    return existingRedirects;
};

// Transform rules to valid config text format
const transformRulesToConfigText = (rules) => {
    return rules
        .map(({target, redirect}) => `${target}\n${redirect}`)
        .join("\n\n");
};


// Find redirects that are missing or different between two configs
const findRedirectDifferences = (actual, expected) => {
    const diff = [];
    const expectedMap = new Map(expected.map(({target, redirect}) => [target, redirect]));

    for (const {target, redirect} of actual) {
        if (!expectedMap.has(target)) {
            diff.push({target, redirect, reason: "Missing in expected"});
        } else if (expectedMap.get(target) !== redirect) {
            diff.push({target, redirect, expected: expectedMap.get(target), reason: "Redirect differs"});
        }
    }

    return diff;
};

// Main function to coordinate parsing and file generation
const main = () => {
    try {
        console.log(`Parsing ${configFile}...`);
        const rules = parseConfig(configFile);
        console.log(`Parsed ${rules.length} redirect rules.`);

        console.log("Update redirects...");
        generateRedirects(rules, templateFile, outputDir);

        console.log("✅ Redirects Updated.");

        const existingRedirects = findExistingRedirects(outputDir);
        let diff = findRedirectDifferences(existingRedirects, rules)
        
        if (diff.length > 0) {
            console.log("\n⚠️⚠️⚠️ Following redirects are missed or different in the config");
            const transformedConfigText = transformRulesToConfigText(diff);
            console.log(transformedConfigText);
        }
    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
};

// Run the script
main();
