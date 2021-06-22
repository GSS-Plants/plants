import React from "react";
import {useDispatch} from "react-redux";
import * as Yup from "yup";
import {httpConfig} from "../utils/httpConfig";
import {Formik} from "formik";
import {AddReminderFormContent} from "./AddReminderFormContent";
import {fetchRemindersByProfileId} from "../store/reminders";


export const AddReminderForm = () => {

    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        reminderProfilePlantId: Yup.string()
            .uuid("Please choose a plant")
            .required("Please choose a plant"),
        reminderStartDate: Yup.date()
            .required("Start date is required"),
        reminderRecurrence: Yup.number()
            .required("Interval is required")
            .min(1, "Don't be silly.")
            .max(365, "You need to water plants more often than that."),
        reminderDescription: Yup.string()
            .max(255, "That note is too long.")
    })

    const newReminder = {
        reminderProfilePlantId: "",
        reminderStartDate: "",
        reminderRecurrence: "",
        reminderDescription: ""
    }

    const submitReminder = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/reminder/", values)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type});
                if (reply.status === 200) {
                    resetForm();
                    dispatch(fetchRemindersByProfileId())
                }
            })
    }

    return (

        <Formik
            initialValues={newReminder}
            onSubmit={submitReminder}
            validationSchema={validator}
        >
            {AddReminderFormContent}
        </Formik>
    )
}