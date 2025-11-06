function findPrimary() {
  const status = rs.status();

  const primary = status.members.find(m => m.stateStr === "PRIMARY");

  if (primary) {
    const hostname = primary.name.split(":")[0]; // remove port (e.g., :27017)
    print(hostname);
  } else {
    print("🚨_No_primary_found");
  }
}

findPrimary();
