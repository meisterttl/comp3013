import { BASE_URL } from "./constants";
import { TAssignment } from "./interfaces";

export async function fetchAssignments(): Promise<TAssignment[]> {
  const res = await fetch(`${BASE_URL}/assignments`);
  if (!res.ok) throw new Error("Failed to fetch assignments");
  return res.json();
}

export function createAssignment(task: string) {
  return fetch(`${BASE_URL}/assignments`, {
    method: "post",
    body: JSON.stringify({ task }),
    headers: { "Content-Type": "application/json" },
  });
}

export function toggleAssignment(id: string) {
  return fetch(`${BASE_URL}/assignments/${id}/toggle`, {
    method: "post",
  });
}

export function deleteAssignment(id: string) {
  return fetch(`${BASE_URL}/assignments/${id}/delete`, {
    method: "post",
  });
}
