
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const { default: app } = await import("./app.js");

app.listen(process.env.PORT || 4000, () => {
  console.log(`server running on port ${process.env.PORT || 4000}`);
});
