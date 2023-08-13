import s from './catch.module.scss';

import Button from '@shared/Button/Button';

import {Upload} from '@c_types/T_generics';

type Props = {
    strings: { heading_1: string, servicesAnimHeading: string[] };
    imgData: Upload;
};

const Catch = (props: Props) => {
    const {strings, imgData} = props;
    const {heading_1, servicesAnimHeading} = strings;

    console.log(strings)

    return (
        <div className={s['catch']}>
            <div className={s['left']}>
                <h1 className={s['left_heading']}>
                    {heading_1}
                    <div className={s['animation']}>
                        <div className={s['animation_moving']}>
                            {servicesAnimHeading.map((e, i) => (<>{e}<br/></>))}
                        </div>
                    </div>
                </h1>


                <Button size='big' label='Parlons-en' type='link' href='/contact'/>
            </div>
            <div className={s['right']}>
                {imgData && <img src={imgData.url} alt={imgData.alternativeText}/>}
            </div>
        </div>
    );
};

export default Catch;
