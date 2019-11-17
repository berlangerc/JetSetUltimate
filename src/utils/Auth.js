export function allowedRolesIncludeUserRoles(allowedRoles, userRoles) {
    let allowed = false;

    if (allowedRoles && allowedRoles.length === 0) {
        return true;
    }

    userRoles.forEach(function (userRole) {
        allowed = allowed || userRole.Name === "admin" || allowedRoles.includes(userRole.Name);

    });

    return allowed;
}