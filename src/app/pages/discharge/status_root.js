import React from 'react';
import { useParams } from "react-router-dom";

import Status from './status';
import { useTranslation } from "react-i18next";

function Status_Root() {
    const { urlParams } = useParams();
    const { t } = useTranslation();
    return (
        <div>
            <Status urlParams={urlParams}
                translation={t("title", { returnObjects: true })}
                swaMsg={t("swa_messages", { returnObjects: true })}
                breadCrums={t("breadCrums", { returnObjects: true })} />
        </div>
    );
}

export default Status_Root;