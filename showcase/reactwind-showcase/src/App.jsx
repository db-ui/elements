import '@db-ui/core/dist/css/enterprise/db-ui-core.vars.css';

import React from 'react';
import {
  DbBrand,
  DbHeader,
  DbPage,
  DbFooter,
  DbHeadline,
  DbCard
} from '@db-ui/react-elements';

export default function App() {
  const cards = Array.from(Array(9).keys());
  return (
    <div className="flex flex-col h-full w-full">
      <DbPage className="h-full">
        <DbHeader slot="header">
          <DbBrand src="/images/db_logo.svg">DB-UI Elements</DbBrand>
        </DbHeader>

        <div className="flex w-full flex-col p-0.5 md:p-0">
          <DbHeadline variant="1">Tailwind is awesome!</DbHeadline>
          <div className="flex flex-col mb-0.5">
            <DbHeadline variant="2">Use colors as classNames:</DbHeadline>
            <DbHeadline className="text-cyan-600">text-cyan-600</DbHeadline>
            <DbHeadline className="text-red-600">text-red-600</DbHeadline>
            <DbHeadline className="text-green-600">text-green-600</DbHeadline>
            <p className="text-orange-600">text-orange-600</p>
          </div>
          <DbHeadline variant="2">
            Test tailwind breakpoints with inspect in your browser
          </DbHeadline>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-0.5 p-0.5">
            {cards.map((number) => (
              <DbCard
                key={`card-${number}`}
                header={`Title ${number}`}
                content={`Content ${number}`}
                illustration="christmas"
              />
            ))}
          </div>
        </div>

        <DbFooter slot="footer" copyright border />
      </DbPage>
    </div>
  );
}
