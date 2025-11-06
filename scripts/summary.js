function rsSummary() {
  const config = rs.config();
  const status = rs.status();

  const summary = status.members.map((m, i) => ({
    name: m.name,
    stateStr: m.stateStr,
    health: m.health,
    priority: config.members[i].priority
  }));

  // Find the primary node
  const primary = status.members.find(m => m.stateStr === "PRIMARY");

  printjson(summary);

  if (primary) {
    const hostname = primary.name.split(":")[0]; // remove port (e.g., :27017)
    print(`\nYour current primary is: ${hostname}`);
  } else {
    print("\nNo primary detected in the current replica set status.");
  }
}

rsSummary();