import React  from 'react'
import { useParams } from "react-router-dom";
import  Search  from './search';
import { useTranslation } from "react-i18next";


function Search_root(props) {
    const { urlParams } = useParams();
    const { t } = useTranslation();
    return <>

        <Search {...props} urlParams={urlParams}
            translation={t("title", { returnObjects: true })}
            swaMsg={t("swa_messages", { returnObjects: true })}
            breadCrums={t("breadCrums", { returnObjects: true })}
        />
    </>
}
 export default Search_root;