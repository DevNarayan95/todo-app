import { Priority } from '../../createTaskForm/enums/Priority';

export const renderPriorityBorderColor = (priority: string): string => {
  switch (priority) {
    case Priority.low:
      return 'gray.900';

    case Priority.normal:
      return 'ínfo.light';

    case Priority.high:
      return 'error.light';

    default:
      return 'gray.900';
  }
};
