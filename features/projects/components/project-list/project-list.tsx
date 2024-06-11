import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import { Loading, AlertMessage } from "@features/ui";
import styles from "./project-list.module.scss";

export function ProjectList() {
  const { data, isLoading, isError, error, refetch } = useGetProjects();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <AlertMessage message={error.message} onTryAgain={refetch} />;
  }

  return (
    <ul className={styles.list} data-cy="project-list">
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
