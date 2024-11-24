import React from 'react';
import Avatar from '@mui/material/Avatar';
import { useUser } from "../../contexts/UserContext";

export default function LetterAvatar() {
    const { user } = useUser();

    const getInitial = (name) => {
        return name ? name.charAt(0).toUpperCase() : '?';
    };

    return (
        <Avatar sx={{ bgcolor: '#4caf50' }}>
            {getInitial(user?.username)} {/* Access username from user */}
        </Avatar>
    );
}
