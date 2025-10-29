import { create } from "zustand";
import type { TAssignment } from "./interfaces";

type TaskState = {
  assignments: TAssignment[];
  isLoading: boolean;
};

type TaskAction = {
  setTasks: (tasks: TaskState["assignments"]) => void;
  setLoadingStatus: (isLoading: TaskState["isLoading"]) => void;
};

export const useStore = create<TaskState & TaskAction>((set) => ({
  assignments: [],
  isLoading: false,
  setTasks: (tasks) => set(() => ({ assignments: tasks })),
  setLoadingStatus: (loading) => set(() => ({ isLoading: loading })),
}));
