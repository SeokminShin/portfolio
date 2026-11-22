import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '@/data/posts';
import { selectedResearch } from '@/data/research';
import { social } from '@/lib/site';
import styles from '../portfolio.module.css';

const TITLE = 'Research';
const DESCRIPTION =
  'Research in electrochemical measurement, intercalation kinetics, and electrocatalysis: selected contributions, current questions, and their physical interpretation.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...social({ title: TITLE, description: DESCRIPTION, path: '/research/' }),
};

export default function Research() {
  const relatedPosts = ['chemical-capacitance', 'measurement-challenge'].flatMap(
    (slug) => {
      const post = posts.find((entry) => entry.slug === slug);
      return post ? [post] : [];
    },
  );

  return (
    <div className={`${styles.page} ${styles.sections}`}>
      <header>
        <h1 className={styles.pageTitle}>Research</h1>
        <p className={styles.pageIntro}>
          From electrocatalysis to intercalation kinetics, my work asks how
          electrochemical measurements can support a physical interpretation.
        </p>
      </header>

      <section className={styles.question} aria-labelledby="current-question-title">
        <p className={styles.eyebrow}>Current question</p>
        <h2 id="current-question-title">
          How can we measure kinetics while the electrode itself is changing?
        </h2>
        <p className={styles.questionIntro}>
          Intercalation changes the state of the host material as charge is
          transferred. I am interested in measurement conditions that help
          distinguish reaction kinetics from the accompanying shift in equilibrium
          voltage.
        </p>
        <div className={styles.evidenceGrid}>
          <div>
            <h3>Published work</h3>
            <p>
              Our 2026 Viewpoint examines how three electroanalytical protocols
              can distort the kinetics they aim to recover.
            </p>
            <a
              className={styles.textLink}
              href={selectedResearch[0].paperUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the Viewpoint
            </a>
          </div>
          <div>
            <h3>Ongoing direction</h3>
            <p>
              Developing and evaluating measurement environments that limit local
              state evolution and make the remaining assumptions explicit.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="contributions-title">
        <h2 id="contributions-title" className={styles.sectionTitle}>
          Selected Contributions
        </h2>
        <p className={styles.sectionNote}>
          Three studies connecting experimental observations, measurement methods,
          and physical interpretation.
        </p>
        {selectedResearch.map((work) => {
          const relatedEssay = posts.find((post) => post.slug === work.essaySlug);

          return (
            <article key={work.id} id={work.id} className={styles.contribution}>
              <div className={styles.contributionHead}>
                <div>
                  <h3>{work.title}</h3>
                  <p className={styles.role}>
                    {work.journal}{work.publicationType && ` · ${work.publicationType}`}
                  </p>
                </div>
                <time className={styles.year} dateTime={work.year}>{work.year}</time>
              </div>
              <dl>
                <dt>Question</dt><dd>{work.question}</dd>
                <dt>Approach</dt><dd>{work.approach}</dd>
                <dt>My contribution</dt><dd>{work.contribution}</dd>
                <dt>Outcome &amp; scope</dt><dd>{work.outcome}</dd>
              </dl>
              <div className={styles.contributionLinks}>
                <a className={styles.textLink} href={work.paperUrl} target="_blank" rel="noopener noreferrer">
                  Paper
                </a>
                {relatedEssay && (
                  <Link className={styles.textLink} href={`/posts/${relatedEssay.slug}`}>
                    Related essay
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </section>

      <section aria-labelledby="background-title">
        <h2 id="background-title" className={styles.sectionTitle}>Background</h2>
        <div className={styles.backgroundCopy}>
          <p>
            My earlier work at UNIST centered on electrocatalyst design, reaction
            selectivity, and multi-reactant systems. That experience continues to
            shape the questions I ask about electrochemical signals.
          </p>
          <p>
            In the SD Kang Lab at Seoul National University, I am pursuing those
            questions through electrochemical thermodynamics and measurement
            methodology.
          </p>
        </div>
        <ul className={styles.milestones}>
          <li>
            <time dateTime="2024">2024</time>
            <span>Gordon Research Seminar / Conference on Electrochemistry · Poster presentation</span>
          </li>
          <li>
            <time dateTime="2024">2024</time>
            <span>Samsung Human-Tech Paper Award</span>
          </li>
        </ul>
        <p className={styles.acknowledgment}>
          I am grateful to{' '}
          <a className={styles.inlineLink} href="https://sdkang.org" target="_blank" rel="noopener noreferrer">
            Prof. Stephen Dongmin Kang
          </a>{' '}
          for the rigorous framework that continues to shape how I connect
          measurement with interpretation.
        </p>
      </section>

      {relatedPosts.length > 0 && (
        <section aria-labelledby="related-reading-title">
          <div className={styles.sectionHead}>
            <h2 id="related-reading-title" className={styles.sectionTitle}>Related Reading</h2>
            <Link href="/posts" className={styles.textLink}>All essays</Link>
          </div>
          <div className={styles.readingList}>
            {relatedPosts.map((post) => (
              <Link className={styles.readingItem} href={`/posts/${post.slug}`} key={post.slug}>
                <span>{post.shortTitle ?? post.title}</span>
                <small>{post.slug === 'chemical-capacitance' ? 'Chemical capacitance' : 'Intercalation kinetics'}</small>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
