import PropTypes from "prop-types";
import { GetHeroesByPublisher } from "../helpers"
import { HeroCard } from "./";
import { useMemo } from "react";

export const HeroesList = ({ publisher }) => {
    const heroes = useMemo(() => GetHeroesByPublisher(publisher), [publisher]);
    return (
        <div className="row rows-cols-1 row-cols-md-3 g3">
            {
                heroes.map((hero) => {
                    return <HeroCard
                        key={hero.id}
                        {...hero} />
                })
            }
        </div >
    )
}

HeroesList.propTypes = {
    publisher: PropTypes.string.isRequired
}