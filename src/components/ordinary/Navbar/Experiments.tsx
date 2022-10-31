import { Experimet } from '../../../core/interface/User';
import ActiveElement from '../../ui/ActiveElement';
import Details from '../Details';
import { useNavbarContext } from './hooks';

interface ExperimetsProps {
    experimentList: Experimet[];
    onSelectExperimentHandler(id: string): void
}
const Experimets = ({ experimentList, onSelectExperimentHandler }: ExperimetsProps) => {
    const { isMobile } = useNavbarContext();

    return (
        <Details isMobile={isMobile}>
            <Details.Summary>эксперименты</Details.Summary>

            <Details.Body>
                {
                    experimentList.map(experiment => {
                        return (
                            <Details.Item key={experiment._id}>
                                <ActiveElement
                                    isMobile={isMobile}
                                    key={experiment._id}
                                    onClickHandler={
                                        () => onSelectExperimentHandler(experiment._id)
                                    }
                                >
                                    {experiment.title}
                                </ActiveElement>
                            </Details.Item>
                        );
                    })
                }
            </Details.Body>
        </Details>
    );
};

export default Experimets;