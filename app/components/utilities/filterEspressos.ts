import dayjs from 'dayjs';
import { Espresso, FilterCriterion } from '../List'; 

export function filterEspressos(espressos: Espresso[], filterBy: FilterCriterion[]) {
    return espressos.filter(espresso => {
        return filterBy.every(filter => {
            if (!filter.value || filter.value.length === 0) {
                return true;
            }
            const espressoValue = espresso[filter.key]; 

            switch (filter.type) {
                case 'range':
                    const [minValue, maxValue] = filter.value as number[];
                    return espressoValue >= minValue && espressoValue <= maxValue;
                case 'match':
                    return (filter.value as string[]).includes(espressoValue as string);
                case 'dates':
                    const [startDate, endDate] = filter.value as Date[];
                    const espressoDate = dayjs(espressoValue as Date);
                    return espressoDate.isAfter(dayjs(startDate).subtract(1, 'day')) && 
                           espressoDate.isBefore(dayjs(endDate).add(1, 'day'));
                default:
                    return true;
            }
        });
    });
}
