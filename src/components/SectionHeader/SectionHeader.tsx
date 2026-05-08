import styles from './SectionHeader.module.css';

interface Props {
  label: string;
  title: string;
  em: string;
}

export default function SectionHeader({ label, title, em }: Props) {
  return (
    <div className={styles.wrap}>
      <p className={styles.label}>{label}</p>
      <h2 className={styles.title}>
        {title} <em>{em}</em>
      </h2>
    </div>
  );
}
