import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/action";
import styles from "./styles/Profile.module.css";
import { useParams } from "react-router-dom";
import {Typography, Container, Paper, List, ListItem, ListItemText,CircularProgress, Card, CardContent, CardHeader, Grid, Divider, Box } from "@mui/material";



export const Profile = ()=>{
    const { id } = useParams();
    console.log(id);
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)
    console.log(user);
    useEffect(()=>{
        dispatch(getUser(id));
    },[dispatch, id])

    return(
      <Container>
        <Card>
            <CardHeader
            title={user.username}
            />
        </Card>

      </Container>
    )
}