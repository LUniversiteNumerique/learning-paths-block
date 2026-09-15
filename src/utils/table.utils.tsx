import * as React from 'react';
import type { ResourceProps } from '../frontend/components/DataView';
import MoodleIcon from '../utils/moodle.png';

const ResourceInfo = ({
    id,
    info,
    openInfo,
    setOpenInfo
}: {
    id: string;
    info: string;
    openInfo: string | null;
    setOpenInfo: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
    const visible = openInfo === id;

    return (
        <span className={`resource-info-container ${visible ? 'is-open' : ''}`}>
            <button
                type="button"
                className="resource-info"
                onClick={() =>
                    setOpenInfo(current => current === id ? null : id)
                }
                aria-label="Afficher les informations"
                aria-expanded={visible}
            >
                i
            </button>

            <span className="resource-info-tooltip">
                {info}
            </span>
        </span>
    );
};


export const createHeader = (obj: Object): JSX.Element[] => {
    return Object.entries(obj).map(([_, v]) => (
        <div className="cell th" key={v}>
            {v}
        </div>
    ));
};


export const createRow = (
    object: ResourceProps,
    name: string,
    openInfo: string | null,
    setOpenInfo: React.Dispatch<React.SetStateAction<string | null>>
): JSX.Element => {

    const keys = Object.keys(object)
        .filter(key =>
            key !== 'url' &&
            key !== 'moodle' &&
            key !== 'creationdate' &&
            key !== 'info'
        );

    const licenceIndex = keys.indexOf('licence');

    if (licenceIndex !== -1) {
        keys.splice(licenceIndex, 0, 'creationdate');
    } else {
        keys.push('creationdate');
    }

    const rows = keys.map(key => {

        return (
            <div
                className={`cell lpb-${name}-${key}`}
                key={key}
            >
                {
                    key === 'name'
                        ? (
                            <>
                                {object.moodle && (
                                    <span className="moodle-badge">
                                        <img
                                            src={MoodleIcon}
                                            alt="Moodle"
                                            className="moodle-icon"
                                            height="18"
                                        />
                                    </span>
                                )}

                                <a
                                    href={object.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {object.name}
                                </a>

                                {typeof object.info === 'string' &&
                                    object.info.trim() !== '' && (
                                        <ResourceInfo
                                            id={`${name}-${object.name}`}
                                            info={object.info}
                                            openInfo={openInfo}
                                            setOpenInfo={setOpenInfo}
                                        />
                                    )}
                            </>
                        )
                        : key === 'licence'
                            ? object[key] != null
                                ? Object.values(object[key]).map(
                                    (licence: any) =>
                                        licence.image
                                            ? (
                                                <img
                                                    key={licence.name}
                                                    src={licence.image}
                                                    width="80"
                                                    title={licence.name}
                                                    alt={licence.name}
                                                />
                                            )
                                            : (
                                                <span
                                                    key={licence.name}
                                                    className="text-small"
                                                >
                                                    {licence.name}
                                                </span>
                                            )
                                )
                                : ""
                            : key === 'creationdate'
                                ? object[key] ?? ''
                                : object[key]
                }
            </div>
        );
    });

    return (
        <div className="column">
            {rows}
        </div>
    );
};