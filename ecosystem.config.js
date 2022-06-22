module.exports = {
  apps: [{
    name: "school-app",
    port: "63001",
    script: "npx",
    args: "nuxt start",
    interpreter: "none",
    watch: true,
    merge_logs: true,
    env: {
      "NODE_ENV": "production",
    }
  }]
}
