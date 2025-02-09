import { Box } from '@mui/material';
import { FC, ReactElement } from 'react';
import { TaskHeader } from './_taskHeader';
import { TaskDescription } from './_taskDescription';
import { TaskFooter } from './_taskFooter';
import { ITask } from './interfaces/ITask';
import { Priority } from '../createTaskForm/enums/Priority';
import PropTypes from 'prop-types';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';

export const Task: FC<ITask> = (props): ReactElement => {
  // Destructure props
  const {
    title = 'Test title',
    date = new Date(),
    description = 'Lorem ipsum dolor sit amet',
    priority = Priority.normal,
    // status = Status.completed,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      justifyContent="flex-start"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter onClick={onClick} onStatusChange={onStatusChange} />
    </Box>
  );
};

Task.prototype = {
  tittle: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  priority: PropTypes.string,
  status: PropTypes.string,
  onClick: PropTypes.func,
  onStatuChange: PropTypes.func,
};
