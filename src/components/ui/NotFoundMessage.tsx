import React from "react";
import { Link } from "react-router-dom";
import { buttonStyles } from "../../utils/styles";
import { WovenBand } from "./WovenBand";

interface NotFoundMessageProps {
  title: string;
  body: string;
  to: string;
  cta: string;
}

export function NotFoundMessage({ title, body, to, cta }: NotFoundMessageProps) {
  return (
    <section className="bg-cream px-5 pb-28 pt-40 lg:pt-48">
      <div className="mx-auto max-w-2xl text-center">
        <WovenBand className="mx-auto h-1.5 w-24" />
        <h1 className="display mt-8 text-[clamp(2.2rem,5vw,3.75rem)] font-medium text-forest">{title}</h1>
        <p className="mt-5 text-lg text-muted">{body}</p>
        <Link to={to} className={`${buttonStyles.primary} mt-10`}>
          {cta}
        </Link>
      </div>
    </section>);

}