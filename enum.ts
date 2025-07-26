// enum data-type : numeric, string, heterogenous

enum userRole {
    ADMIN = 1,
    USER = 2,
    GUEST = 3
}

enum userStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    BANNED = "banned"
}
enum userAccess {
    READ = "read",
    WRITE = "write",
    DELETE = "delete"
}


console.log(userRole.ADMIN); // 1
console.log(userStatus.ACTIVE); // "active"