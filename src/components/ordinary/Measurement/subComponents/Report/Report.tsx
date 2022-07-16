import ResponseError from '../../../../../core/elementaryEntities/ResponseError';
import { Experimet } from '../../../../../core/interface/User';
import ExperimentServices from '../../../../../core/serverServices/Experiment';
import { download } from '../../../../../core/utils/dom';
import CardInfo from '../../../CardInfo';
import { useMeasurementContext } from '../../hooks';
import './report.scss';

interface ReportProps {
    experiment: Experimet;
} 
const Report = ({ experiment }: ReportProps) => {
    const { isMobile } = useMeasurementContext();
    const experimentService = new ExperimentServices();

    const downloadHandler = async () => {
        // download();
        const response: any = await experimentService.getExcelBuffer(experiment._id);
        const blob = await response.blob();
        

        if (response instanceof ResponseError) {
            alert('Не удалось скачать отчет. Попробуйте позже');
            return;
        }

        download(blob, `${experiment.title}.xlsx`);
    }

    return (
        <div className='report'>
            <CardInfo isMobile={isMobile}>
                <CardInfo.Title>Отчет</CardInfo.Title>

                <CardInfo.Body>
                    <CardInfo.Group>
                        <CardInfo.Row>
                            <button onClick={downloadHandler}>
                                Скачать
                            </button>
                        </CardInfo.Row>
                    </CardInfo.Group>
                </CardInfo.Body>
            </CardInfo>
        </div>
    );
};

export default Report;
