/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import { Thing, WithContext } from "schema-dts";

/**
 * Component that inline-includes a JSON-LD script where specified.
 *
 * @example
 * ```tsx
 * <JsonLd<Person>
 *   item={{
 *     "@context": "https://schema.org",
 *     "@type": "Person",
 *     name: "Grace Hopper",
 *     alternateName: "DescriptionGrace Brewster Murray Hopper",
 *     alumniOf: {
 *       "@type": "CollegeOrUniversity",
 *       name: ["Yale University", "Vassar College"]
 *     },
 *     knowsAbout: ["Compilers", "Computer Science"]
 *   }}
 * />
 * ```
 */
export class JsonLd<T extends Thing> extends React.Component<{
  item: WithContext<T>;
}> {
  render() {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(this.props.item) }}
      />
    );
  }
}
