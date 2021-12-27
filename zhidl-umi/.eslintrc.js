module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    env: {
        browser: true,
        node: true,
        es6: true
    },
    plugins: ['@typescript-eslint', 'react'],
    rules: {
        // 禁止使用var
        'no-var': 'error',
        'jsx-quotes': ['error', 'prefer-double'],
        'import/no-commonjs': 0,
        'prettier/prettier': 0,
        'react/jsx-indent-props': 0,
        'react-hooks/exhaustive-deps': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-explicit-any': 0
    }
};
