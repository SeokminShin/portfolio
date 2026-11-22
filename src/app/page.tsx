import Image from 'next/image';
import Link from 'next/link';
import { posts } from '@/data/posts';
import { SITE_BASE_PATH } from '@/lib/site';
import styles from './portfolio.module.css';

export default function Home() {
  const introductoryPost = posts.find(
    (post) => post.slug === 'chemical-capacitance',
  );
  const featuredPosts = introductoryPost
    ? [introductoryPost, ...posts.filter((post) => post !== introductoryPost).slice(0, 1)]
    : posts.slice(0, 2);

  return (
    <div className={`${styles.page} ${styles.sections}`}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.identity}>
          <h1 id="home-title" className={styles.name}>Seokmin Shin</h1>
          <p className={styles.affiliation}>
            SD Kang Lab · Seoul National University
          </p>
        </div>
        <Image
          src={`${SITE_BASE_PATH}/seokmin.jpg`}
          alt="Seokmin Shin"
          width={176}
          height={176}
          sizes="(max-width: 650px) 76px, 176px"
          preload
          className={styles.portrait}
        />
        <div className={styles.heroCopy}>
          <p className={styles.field}>
            Electrochemical kinetics<br />&amp; thermodynamics
          </p>
          <p className={styles.intro}>
            I study what electrochemical measurements can tell us about reaction
            kinetics, with a focus on how the changing state of intercalation
            materials shapes the signals we observe.
          </p>
          <div className={styles.actions}>
            <Link href="/research" className={styles.primaryLink}>
              Explore Research
            </Link>
            <a
              href={`${SITE_BASE_PATH}/CV_Seokmin_Shin.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.textLink}
            >
              Curriculum vitae
            </a>
          </div>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section aria-labelledby="writing-title">
          <div className={styles.sectionHead}>
            <h2 id="writing-title" className={styles.sectionTitle}>Writing</h2>
            <Link href="/posts" className={styles.textLink}>All essays</Link>
          </div>
          <div className={styles.writingGrid}>
            {featuredPosts.map((post, index) => (
              <Link key={post.slug} href={`/posts/${post.slug}`} className={styles.essay}>
                <span className={styles.essayType}>
                  {post === introductoryPost ? 'Start here' : index === 0 || introductoryPost ? 'Recent essay' : 'More writing'}
                </span>
                <h3 className={styles.essayTitle}>{post.shortTitle ?? post.title}</h3>
                <p className={styles.essaySummary}>{post.shortExcerpt ?? post.excerpt}</p>
                <p className={styles.essayDate}>{post.date}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className={styles.personal} aria-labelledby="personal-title">
        <Image
          src={`${SITE_BASE_PATH}/coco/main.jpg`}
          alt="Coco"
          width={80}
          height={80}
          sizes="(max-width: 650px) 60px, 80px"
          className={styles.coco}
        />
        <div>
          <h2 id="personal-title">Beyond the lab</h2>
          <p>Meet Coco, my Principal Paw-vestigator and much-loved companion outside the lab.</p>
        </div>
        <Link href="/coco" className={styles.textLink}>View gallery</Link>
      </section>
    </div>
  );
}
