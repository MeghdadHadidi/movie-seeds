import { Company } from "../store/types"

import css from './MovieCompanies.module.css'

interface Props {
    companies: Company[]
}

const IMG_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const MovieCompanies = ({ companies }: Props) => {
    if(!companies?.length) return null;

    return (
        <div className={css.companiesWrapper}>
            <h3>Companies</h3>
            <ul>
                {companies.map(company => (
                    <li>
                        <img src={`${IMG_BASE_URL}/w92${company.logo_path}`} alt={company.name} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MovieCompanies