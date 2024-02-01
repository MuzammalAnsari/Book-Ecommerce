import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from 'Contexts/AuthContext';

export default function PrivateRoute({ Component, allowedRoles = [] }) {
    const { user } = useAuthContext();

    const accessedRole = allowedRoles.some((role) => user.roles.includes(role));
    const isSuperAdmin = true;
    console.log('isSuperAdmin', isSuperAdmin)

    if (!allowedRoles.length || accessedRole) {
        return <Component />;
    }

    return <Navigate to="/unauthorized" />;
}
