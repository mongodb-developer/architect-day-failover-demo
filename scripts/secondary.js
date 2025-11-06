function findSecondary(members) {
  return members.find(m => m.stateStr === "SECONDARY");
}

function rsSecondary() {
  const status = rs.status();
  const secondary = findSecondary(status.members);

  if (secondary) {
    const hostname = secondary.name.split(":")[0];
    print(hostname);
  } else {
    print("🚨_No_secondary_found");
  }
}

rsSecondary();
