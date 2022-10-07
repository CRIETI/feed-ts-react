import styles from "./index.module.css"

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/camisbrussi.png"/>

                <div className={styles.description}>
                    <strong>Camila Sbrussi</strong>
                    <span>Front-end Software Engineer | Caf.io | React | Typescript</span>
                </div>
            </div>
        </aside>
    )  
}