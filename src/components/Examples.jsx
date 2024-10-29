import { useState } from "react";

import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function HandleSelect(selectedButton) {
    // selectedButton => 'Components', 'JSX', 'Props', 'State'
    // console.log(selectedButton);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => HandleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => HandleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => HandleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => HandleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {!selectedTopic ? (
        <p>Please select a topic.</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
