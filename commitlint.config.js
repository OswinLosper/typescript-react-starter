const Configuration = {
    /*
     * Resolve and load @commitlint/config-conventional from node_modules.
     * Referenced packages must be installed
     */
    extends: ['@commitlint/config-conventional'],
    /*
     * Resolve and load conventional-changelog-atom from node_modules.
     * Referenced packages must be installed
     */
    parserPreset: 'conventional-changelog-atom',
    /*
     * Any rules defined here will override rules from @commitlint/config-conventional
     */
    rules: {
        'type-enum': [2, 'always', ['chore', 'feat', 'fix', 'none']],
        'subject-case': [2, 'always', ['lower-case']]
    }
};

module.exports = Configuration;