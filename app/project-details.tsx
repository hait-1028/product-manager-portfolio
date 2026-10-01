"use client";

import { useId, useRef } from "react";

type Props = {
  title: string;
  period: string;
  summary: string;
  details: string[];
  demoUrl?: string;
};

export default function ProjectDetails({ title, period, summary, details, demoUrl }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const headingId = useId();

  return <>
    <button className="detailsButton" onClick={() => dialog.current?.showModal()} aria-haspopup="dialog" aria-label={`${title}：View Details`}>View Details</button>
    <dialog className="projectDialog" ref={dialog} aria-labelledby={headingId} onClick={event => {
      if (event.target === event.currentTarget) {
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.current?.close();
      }
    }}>
      <div className="dialogHeading"><span>项目详情</span><button type="button" className="dialogClose" onClick={() => dialog.current?.close()} aria-label="关闭项目详情">×</button></div>
      <h2 id={headingId}>{title}</h2><time>{period}</time>
      <p>{summary}</p>
      <ul>{details.map(detail => <li key={detail}>{detail}</li>)}</ul>
      {demoUrl && <a className="demoLink" href={demoUrl} target="_blank" rel="noopener noreferrer">Open Demo <span aria-hidden="true">↗</span></a>}
    </dialog>
  </>;
}
