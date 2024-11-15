import React from 'react';
import {Pagination, PaginationItem} from "@material-ui/lab";

import styles from "./styles";

const Paginate = () => {
    const classes = useStyles();

    return (
        <Pagination 
        classes = {{ ul: classes.ul }}
        count = {5}
        page={1}
        variant = "outlined"
        color = "primary"
        
        />
    );
};