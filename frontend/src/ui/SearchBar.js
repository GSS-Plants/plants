import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {httpConfig} from "../utils/httpConfig";
import {fetchPlantsByCommonName} from "../store/plant";
import * as Yup from "yup";
import {Formik} from "formik";
import {SearchBarContent} from "./SearchBarContent";
import React from "react";

export const SearchBar = () => {
    const history = useHistory()
    const search = {
        searchText: ""
    }
    const dispatch = useDispatch()

    const doSearch = (values, {resetForm, setStatus}) => {
        const searchText = values.searchText
        httpConfig.get(`/apis/plant/search-common-name/${searchText}`)
            .then(reply => {
                    console.log(reply)
                    let {message, type} = reply;
                    if (reply.status === 200) {
                        resetForm();
                        dispatch(fetchPlantsByCommonName(searchText))
                        history.push('/search')
                    }
                    if (reply.status === 404) {
                        //cry
                    }
                    setStatus({message, type});
                }
            );
    };

    const validator = Yup.object().shape({
        searchText: Yup.string()
            .required("search text is required"),
    });

    return(

        <Formik
            initialValues={search}
            onSubmit={doSearch}
            validationSchema={validator}
        >
            {SearchBarContent}

        </Formik>
    )
};