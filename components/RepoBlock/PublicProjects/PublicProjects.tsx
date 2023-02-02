import Repos from "@/components/RepoBlock/Repos/Repos"
import styles from "./PublicProjects.module.scss"

function PublicProjects(){
	return (
		<div className={styles.PublicProjects}>
			<h2>Public Projects</h2>
			<Repos />
		</div>
	)
}

export default PublicProjects
