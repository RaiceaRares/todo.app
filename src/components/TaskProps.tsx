interface Task {
    id: string;
    text: string;
    isFinished: boolean;
  }
  
  export interface TaskProps {
    task: Task;
    onFinish: (taskId: string) => void;
    onRemove: (taskId: string) => void;
  }
