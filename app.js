const app = document.getElementById("app");

const CHEMISTRY_DIGITAL_BOOK = {
  "History of Chemistry": {
    "Student Learning Outcomes (SLOs)": "\n      <h2>Student Learning Outcomes (SLOs)</h2>\n      <ul>\n        <li>Justify, with examples, to do science is to be involved in a community of inquiry. For context in chemistry: a. The community adheres to certain common principles, methodologies, and processes, such as the use of empirical evidence and logical reasoning to develop scientific theories. For example, chemist based their research on the assumption on conservation of mass and energy and use this to verify whether their calculations and findings are sensible, b. Scientists in different fields often share similar methodologies, such as the use of controlled experiments and the peer review process. The scientific community also values objectivity and skepticism, which are essential for ensuring accuracy and validity of scientific findings.</li>\n        <li>Explain with examples, that a scientific paradigm is a theoretical model of how nature works. Some examples include: a. The belief that materials that burn do so because a material called “phlogiston” was the paradigm in chemistry in the 18th century, b. Historical models of the atom are paradigms, such as plum-pudding and the Rutherford model of atom, c. The periodic table of elements, and belief in the “periodicity” of atoms based on the arrangements of their electrons is a paradigm.</li>\n        <li>Scientific paradigms in chemistry provide a framework for understanding the properties of materials and developing new materials with specific properties. Overall, scientific paradigms in chemistry guide research and development in the field, and help scientists to better understand the behaviour of chemicals and their interactions.</li>\n        <li>Explain with examples, how scientists speak of “levels of confidence” or uncertainty when discussing experimental outcomes.</li>\n        <li>Explain the difference between repeatability and reproducibility in chemistry. For context: a. Repeatability as the idea that scientific results from experiments should be possible to verify by conducting the experiment again under the same physical conditions, b. Reproducibility as the idea that the same or similar result is obtained when the measurement is made under either different conditions or by a different method or in a different experiment.</li>\n      </ul>\n    ",
    "1.1 Principles and Methods in Chemistry": "\n      <h2>1.1 Principles and Methods in Chemistry</h2>\n      <p>To do science, you need to work within a scientific community where people share ideas, methods, and practices to build knowledge. This is especially true for chemistry, where scientists follow set principles and techniques. Below are some key principles and methods in chemistry explained in simple terms:</p>\n\n      <h3>(a) Conservation of Mass and Energy</h3>\n      <p>In chemistry, we follow a rule called the conservation of mass and energy. This means that mass and energy cannot be created or destroyed in a closed system. For example, in a chemical reaction, the total mass of the reactants is always equal to the total mass of the products. This principle, first shown by Antoine Lavoisier in the 18th century, changed the way chemists do experiments by making them more accurate and reliable. If an experiment doesn't follow this rule, chemists check their procedures and calculations to find what went wrong.</p>\n\n      <h3>(b) Using Observations and Logical Thinking</h3>\n      <p>Chemists create theories and models based on what they observe in experiments. They use logical thinking to make sense of their findings. For example, Dmitri Mendeleev created the periodic table by observing patterns in the properties of elements. He even predicted elements that hadn't been discovered yet based on these patterns. This way of using evidence and reasoning is an important part of how science works.</p>\n\n      <h3>(c) Controlled Experiments</h3>\n      <p>Chemists, like other scientists, use controlled experiments to test their ideas. They change one variable at a time while keeping others constant to see what happens. For example, in pharmaceutical chemistry, controlled experiments are used to test if new medicines work and are safe. This method is also used in other sciences, like biology and physics, to find cause-and-effect relationships.</p>\n\n      <h3>(d) Peer Review</h3>\n      <p>Before scientific work is published, it is reviewed by other scientists to make sure it is correct and reliable. Chemists share their results in journals, where experts check the experiments, data, and conclusions for mistakes or unclear parts. For example, if a chemist discovers a new catalyst, it must be reviewed and tested by other scientists to confirm the findings. This process ensures the quality of scientific research.</p>\n\n      <h3>(e) Being Objective</h3>\n      <p>In science, results must come from facts, not opinions or biases. Chemists aim to be objective when performing experiments and analyzing data. For example, when identifying the structure of a molecule using spectrometry, they rely on precise measurements and standard methods instead of guesses or personal beliefs.</p>\n\n      <h3>(f) Skepticism and Proof</h3>\n      <p>Scientists are naturally skeptical and always double-check new discoveries. They repeat experiments and have others test their work before accepting it. For example, if someone claims to discover a new element or reaction, other scientists will conduct many tests to verify it. This skepticism helps ensure that only trustworthy information becomes part of science.</p>\n    ",
    "1.2 Evolution of Scientific Ideas (Paradigms)": "\n      <h2>1.2 Evolution of Scientific Ideas (Paradigms)</h2>\n\n      <h3>What is a Scientific Paradigm?</h3>\n      <p>A scientific paradigm is a set of ideas, methods, and rules that guide scientists in their research. It helps scientists understand the natural world and explain their discoveries. Paradigms give scientists a consistent way to study and share knowledge. However, when new evidence challenges an existing paradigm, it may be replaced with a better one. Here are some examples of scientific paradigms and how they changed over time:</p>\n\n      <h3>1. The Phlogiston Theory</h3>\n      <p>In the 1700s, scientists believed in the phlogiston theory to explain burning or combustion and rusting. According to this idea, materials that could burn contained a substance called “phlogiston,” which was released during burning. For example, when metals rusted, people thought they absorbed “dephlogisticated air.”</p>\n      <p>Later, Antoine Lavoisier proved that combustion happens because of oxygen combining with substances, not because of phlogiston. His work introduced a new way of thinking about chemical reactions, replacing the phlogiston theory with the modern concepts of oxidation and reduction.</p>\n\n      <h3>2. Historical Models of the Atom</h3>\n      <p>Scientists have changed their ideas about what atoms look like as they learned more through experiments:</p>\n      <ul>\n        <li><strong>The Plum Pudding Model (1904):</strong> J.J. Thomson suggested that atoms are like a “pudding” with negatively charged electrons, the “plums,” scattered in a positively charged “soup.”</li>\n        <li><strong>Rutherford's Model (1911):</strong> Ernest Rutherford's gold foil experiment showed that atoms have a small, dense, positively charged central nucleus, with electrons orbiting around it.</li>\n        <li><strong>Bohr's Model and Quantum Model:</strong> Later, scientists improved Rutherford's model by adding ideas about energy levels, Bohr's model, and quantum mechanics, which is the current way we understand atoms.</li>\n        <li>These changes happened because new experiments provided better evidence.</li>\n      </ul>\n\n      <h3>3. The Periodic Table</h3>\n      <p>Dmitri Mendeleev created the periodic table in 1869 to organize elements based on their atomic masses and properties. His table was powerful because it predicted the existence of elements that had not been discovered yet.</p>\n\n      <h3>Modern Periodic Table</h3>\n      <p>As scientists learned about atomic structure and quantum mechanics, they updated the periodic table. Today, elements are arranged based on their atomic numbers and electron configurations. This modern version explains why elements show similar chemical properties at regular intervals, periodicity, and helps us understand their behaviour in reactions.</p>\n    ",
    "1.3 Scientific Paradigms in Chemistry": "\n      <h2>1.3 Scientific Paradigms in Chemistry</h2>\n      <p>Scientific paradigms in chemistry are ideas and rules that help us understand how substances behave and interact. These paradigms guide scientists in creating experiments, testing ideas, and interpreting results. They help us learn more about the materials we already know, and they also inspire the creation of new materials and technologies. This is important for progress in fields like medicine, materials science, and environmental protection.</p>\n    ",
    "1.4 Confidence and Uncertainty in Chemistry": "\n      <h2>1.4 Confidence and Uncertainty in Chemistry</h2>\n      <p>Chemistry, like other sciences, involves both confidence and uncertainty when analyzing experimental results. Scientists use tools to measure how precise or reliable their data is:</p>\n\n      <h3>1. Confidence Intervals</h3>\n      <p>Confidence intervals show how precise a measurement is. For example, if a pharmacist measures the concentration of a solution to be 0.50 molar with a 95% confidence interval, 0.48-0.52 molar, it means they are 95% sure that the true value is within this range.</p>\n\n      <h3>2. P-Values</h3>\n      <p>P-values help scientists check if experimental results are meaningful. For example, if a chemist tests whether a new catalyst works faster than an old one and finds a p-value of 0.01, it means there's only a 1% chance that the result is random. This shows the new catalyst is almost certainly better.</p>\n\n      <h3>3. Standard Error and Standard Deviation</h3>\n      <p>These tools measure how much data varies. For example, if a chemist measures the melting point of a substance and finds the average is 120°C with a standard deviation of 0.5°C, it means the results are consistent. A small standard error, e.g., 0.1°C, shows that the average value is accurate.</p>\n\n      <h3>4. Bayesian Probability</h3>\n      <p>This method updates our confidence in an idea based on new evidence. For example, if a chemist first believes there's a 60% chance a reaction happens in a certain way, but new data raises their confidence to 80%, they've used Bayesian probability to update their understanding.</p>\n\n      <h3>5. Quantifying Uncertainty</h3>\n      <p>Uncertainty tells us how reliable a measurement is. For example, if a chemist measures the concentration of a solution as 0.250 molar ± 0.005 molar, the uncertainty is ±0.005 molar, meaning the true value is close to 0.250 molar.</p>\n    ",
    "1.5 Repeatability and Reproducibility": "\n      <h2>1.5 Repeatability and Reproducibility</h2>\n      <p>In chemistry, repeatability and reproducibility are important for proving that experimental results are reliable.</p>\n\n      <h3>Repeatability</h3>\n      <p>This means getting the same result when repeating an experiment under the same conditions, using the same tools and procedures. For example, if a chemist measures the melting point of a substance several times in the same lab and gets the same result each time, the experiment is repeatable.</p>\n\n      <h3>Reproducibility</h3>\n      <p>This means getting the same result even when the experiment is done in different labs, with different tools, methods, and scientists. For example, if different chemists in different labs measure the same substance's melting point and get similar results, the experiment is reproducible.</p>\n\n      <h3>Why Are These Important?</h3>\n      <ul>\n        <li>Repeatability shows that the experiment is well-controlled and consistent in one setting.</li>\n        <li>Reproducibility shows that the findings are reliable and not limited to one lab or method.</li>\n      </ul>\n      <p>Both help scientists ensure their discoveries are accurate and accepted by others.</p>\n\n      <h3>KEY POINTS</h3>\n      <ul>\n        <li>Chemists generally follow the principle of conservation of mass and energy.</li>\n        <li>Skepticism drives scientists to consistently challenge and validate new discoveries.</li>\n        <li>According to this theory, all combustible materials contained a substance called “phlogiston” that was released, when burned.</li>\n        <li>Chemical paradigms are frameworks that explain chemical properties.</li>\n        <li>In chemistry, Bayesian methods involve updating the likelihood of a hypothesis by combining previous data with new evidence.</li>\n        <li>Uncertainty is a measure used by chemists to indicate how reliable their measurements and predictions are.</li>\n        <li>Repeatability is the ability to repeat an experiment under the same conditions, such as using the same equipment, processes, location, time frame, and if applicable, operator.</li>\n        <li>The reproducibility of a measurement is the ability to produce same or similar results when the measurements are made in different environments, with different equipment, with different methods, and at different times.</li>\n      </ul>\n    ",
    "Exercise": "\n      <h2>EXERCISE</h2>\n\n      <h3>1. Multiple Choice Questions (MCQs)</h3>\n      <ol type=\"i\">\n        <li>\n          <p>What is the principle of conservation of mass?</p>\n          <p>a) Mass is created during a chemical reaction<br>b) Mass is destroyed during a chemical reaction<br>c) Mass remains constant during a chemical reaction<br>d) Mass can be converted into energy</p>\n        </li>\n        <li>\n          <p>What does the peer review process ensure in scientific research?</p>\n          <p>a) Faster publication<br>b) Accuracy and validity of findings<br>c) Higher funding<br>d) Reduced experimentation</p>\n        </li>\n        <li>\n          <p>Which of the following was an 18th-century chemical paradigm?</p>\n          <p>a) Atomic theory<br>b) Phlogiston theory<br>c) Quantum mechanics<br>d) Periodic table</p>\n        </li>\n        <li>\n          <p>What does the periodic table of elements organize?</p>\n          <p>a) Elements by alphabetical order<br>b) Elements by their properties and atomic number<br>c) Elements by colour<br>d) Elements by discovery date</p>\n        </li>\n        <li>\n          <p>What does a 95% confidence level mean in scientific reporting?</p>\n          <p>a) Results are 95% accurate<br>b) There is a 5% chance the results are incorrect<br>c) 95% of scientists agree<br>d) The experiment is repeated 95 times</p>\n        </li>\n        <li>\n          <p>Which model of the atom includes a central nucleus?</p>\n          <p>a) Plum-pudding model<br>b) Rutherford model<br>c) Bohr model<br>d) Quantum mechanical model</p>\n        </li>\n        <li>\n          <p>What does repeatability in scientific experiments refer to?</p>\n          <p>a) Different results under the same conditions<br>b) Same results under the same conditions<br>c) Different methods<br>d) Multiple publications</p>\n        </li>\n        <li>\n          <p>What is reproducibility in scientific experiments?</p>\n          <p>a) Different results under the same conditions<br>b) Same results using different methods<br>c) Results not verified<br>d) Repetition by the same scientist</p>\n        </li>\n        <li>\n          <p>What paradigm replaced the phlogiston theory?</p>\n          <p>a) Atomic theory<br>b) Theory of combustion<br>c) Quantum mechanics<br>d) Periodic table</p>\n        </li>\n        <li>\n          <p>Which property does the periodic table help to predict?</p>\n          <p>a) Colour of elements<br>b) Properties of elements<br>c) Weight of elements<br>d) Discovery date of elements</p>\n        </li>\n      </ol>\n\n      <h3>2. Short Answer Questions</h3>\n      <ol type=\"i\">\n        <li>Explain the principle of conservation of mass in chemical reactions.</li>\n        <li>What is the role of empirical evidence in scientific research?</li>\n        <li>Describe the peer review process and its importance in science.</li>\n        <li>How did the phlogiston theory explain combustion?</li>\n        <li>What is the significance of Rutherford's model of the atom?</li>\n        <li>How does the periodic table organize elements?</li>\n        <li>Define scientific paradigm with an example.</li>\n        <li>What does a confidence level in scientific research indicate?</li>\n        <li>Differentiate between repeatability and reproducibility in experiments.</li>\n        <li>Why is skepticism important in the scientific community?</li>\n      </ol>\n\n      <h3>3. Long Answer Questions</h3>\n      <ol type=\"i\">\n        <li>Discuss the transition from the phlogiston theory to the oxygen theory of combustion and its impact on chemistry.</li>\n        <li>Explain the development of atomic models from the plum-pudding model to the quantum mechanical model.</li>\n        <li>Analyze how the periodic table serves as a paradigm in chemistry, guiding research and discovery of new elements.</li>\n        <li>Evaluate the importance of repeatability and reproducibility in maintaining scientific integrity and progress.</li>\n        <li>Describe how levels of confidence and uncertainty are expressed and interpreted in scientific research, providing examples from chemistry experiments.</li>\n      </ol>\n    "
  }
};

CHEMISTRY_DIGITAL_BOOK["Matter"] = {
  "Student Learning Outcomes (SLOs)": "\n    <h2>Student Learning Outcomes (SLOs)</h2>\n    <ul>\n      <li>Explain changes of state and internal energy without change in temperature (melting, boiling, freezing, condensation, sublimation and deposition) in terms of kinetic particle theory.</li>\n      <li>Distinguish between evaporation and boiling.</li>\n      <li>Interpret heating and cooling curves in terms of kinetic theory.</li>\n      <li>Interpret heating in terms of kinetic particle theory the effects of changing pressure, temperature and volume of a gas on the other two with regards to Boyle's law, Charles' law, and Avogadro's law.</li>\n      <li>Explain qualitatively the effect of external pressure on the rate of boiling and evaporation.</li>\n      <li>Explain diffusion of gases in terms of kinetic particle theory.</li>\n      <li>Examine qualitatively the effect of molecular mass and temperature on the rate of diffusion.</li>\n      <li>Discuss applications of sublimation around us. Examples may include solid air fresheners and 3D printing.</li>\n      <li>Explain, with the help of kinetic particle theory, the importance of rates of diffusion of medicines in the body.</li>\n    </ul>\n  ",
  "2.1 Changes of states of matter": "\n    <h2>2.1 Changes of states of matter</h2>\n    <p>A state change, or phase transition, is the transition of matter from one state to another, such as a solid state to a liquid state, a liquid state to a gas state, or a state of matter directly between a solid state and a gas state. These transitions occur without a temperature change and can be understood through kinetic particle theory and the internal energy. Internal energy is composed of kinetic energy, temperature-related, potential energy, particle positions and interactions during phase transitions. During phase transitions, the temperature remains constant and hence the kinetic energy, however, the potential energy significantly changes. This shift in potential energy causes the overcoming or generation of inter-particle forces during phase transitions.</p>\n\n    <h3>1. Melting (Solid to Liquid)</h3>\n    <p>When a solid melts, it becomes a liquid.</p>\n    <p>In a solid, the particles are tightly packed in a stable, well-ordered state and vibrate in fixed positions. When energy, usually heat, is added to the solid, it causes the particles to vibrate more strongly. When energy is added to a solid at the melting point, it increases its potential energy. This weakens the forces that hold the particles in place without increasing their kinetic energy, so the temperature stays the same. When the energy is strong enough to overcome the forces holding the particles in place, the solid melts into a liquid where the particles are in a stable state but can move freely around one another.</p>\n\n    <h3>2. Boiling (Liquid to Gas)</h3>\n    <p>When a liquid boils, it turns into a gas.</p>\n    <p>According to the Kinetic Particle Theory in a liquid, particles are closely packed but can move past each other. As energy is added, particles move faster and eventually have enough energy to break free from the liquid's surface into the gas phase. The added energy increases the potential energy of the particles, allowing them to overcome the attractive forces holding them in the liquid. This occurs at the boiling point, where the temperature remains constant as the liquid turns into gas.</p>\n\n    <h3>3. Freezing (Liquid to Solid)</h3>\n    <p>When a liquid freezes, it turns into a solid.</p>\n    <p>According to the Kinetic Particle Theory in a liquid, particles have enough energy to move around each other. As the liquid loses energy, particle motion slows down, and the forces of attraction pull the particles into a fixed, orderly arrangement characteristic of a solid. Energy is released during freezing, decreasing the potential energy of the particles. The temperature remains constant during this process as the energy released is used to form the solid structure.</p>\n\n    <h3>4. Condensation (Gas to Liquid)</h3>\n    <p>When a gas condenses, it turns into a liquid.</p>\n    <p>According to the Kinetic Particle Theory in a gas, particles move away rapidly and are far apart. As the gas loses energy, particle motion slows down, and attractive forces pull the particles closer together, forming a liquid. Energy is released during condensation, reducing the potential energy of the particles. The temperature remains constant as the gas turns into a liquid.</p>\n\n    <h3>5. Sublimation (Solid to Gas)</h3>\n    <p>When a solid sublimates, it turns directly into a gas without passing through the liquid phase.</p>\n    <p>According to the Kinetic Particle Theory in a solid, particles are tightly packed in fixed positions. When the solid gains enough energy, the particles gain sufficient energy to break free directly into the gas phase. Energy is added, significantly increasing the potential energy of the particles to overcome the forces holding them in the solid structure. This occurs without a change in temperature during the sublimation process.</p>\n\n    <h3>6. Deposition (Gas to Solid)</h3>\n    <p>When a gas undergoes deposition, it turns directly into a solid without passing through the liquid phase.</p>\n    <p>According to the Kinetic Particle Theory in a gas, particles are far apart and move freely. When the gas loses energy, the particle motion slows significantly, and attractive forces pull the particles directly into a solid arrangement. Energy is released, greatly reducing the potential energy of the particles. This happens without a change in temperature during the deposition process.</p>\n  ",
  "2.2 Heating and cooling curves": "\n    <h2>2.2 Heating and cooling curves</h2>\n    <p>Heating and cooling curves are shown in figure. These curves show how the energy of particles changes during phase transition.</p>\n  ",
  "2.2.1 Heating Curve": "\n    <h2>2.2.1 Heating Curve</h2>\n    <p>A heating curve typically shows temperature change over time as a substance is heated. It consists of several distinct regions.</p>\n\n    <h3>Solid Phase (A to B)</h3>\n    <p>Segment A to B: The temperature of the solid increases as it absorbs heat. According to kinetic theory, the kinetic energy of the particles, atoms or molecules, increases, causing the particles to vibrate more vigorously.</p>\n\n    <h3>Melting (B to C)</h3>\n    <p>Segment B to C: The temperature remains constant as the solid melts into a liquid. Here, the absorbed heat energy is used to overcome the intermolecular forces holding the solid together, rather than increasing kinetic energy. This is known as the latent heat of fusion.</p>\n\n    <h3>Liquid Phase (C to D)</h3>\n    <p>Segment C to D: The temperature of the liquid increases as it continues to absorb heat. The kinetic energy of the particles increases, causing them to move more rapidly.</p>\n\n    <h3>Boiling (D to E)</h3>\n    <p>Segment D to E: The temperature remains constant as the liquid changes into a gas. The absorbed heat energy is used to overcome the intermolecular forces in the liquid, a process that requires latent heat of vaporization.</p>\n\n    <h3>Gas Phase (E onward)</h3>\n    <p>Segment E onward: The temperature of the gas increases as it absorbs more heat. The kinetic energy of the gas particles increases, causing them to move even more rapidly.</p>\n  ",
  "2.2.2 Cooling Curve": "\n    <h2>2.2.2 Cooling Curve</h2>\n    <p>A cooling curve shows the reverse process as a substance is cooled. It consists of similar distinct regions, but in reverse order.</p>\n\n    <h3>Gas Phase (Higher Temperature to E)</h3>\n    <p>Segment higher temperature to E: The temperature of the gas decreases as it loses heat. The kinetic energy of the gas particles decreases, causing them to move less rapidly.</p>\n\n    <h3>Condensation (E to D)</h3>\n    <p>Segment E to D: The temperature remains constant as the gas condenses into a liquid. The lost heat energy is released as the intermolecular forces bring the particles closer together, resulting in the latent heat of vaporization being released.</p>\n\n    <h3>Liquid Phase (D to C)</h3>\n    <p>Segment D to C: The temperature of the liquid decreases as it loses more heat. The kinetic energy of the particles decreases, causing them to move more slowly.</p>\n\n    <h3>Freezing (C to B)</h3>\n    <p>Segment C to B: The temperature remains constant as the liquid freezes into a solid. The lost heat energy is released as the intermolecular forces arrange the particles into a solid structure, resulting in the latent heat of fusion being released.</p>\n\n    <h3>Solid Phase (B to A and below)</h3>\n    <p>Segment B to A and below: The temperature of the solid decreases as it continues to lose heat. The kinetic energy of the particles decreases, causing them to vibrate less.</p>\n  ",
  "2.2.3 Kinetic Theory Interpretation": "\n    <h2>2.2.3 Kinetic Theory Interpretation</h2>\n\n    <h3>Kinetic Energy and Temperature</h3>\n    <p>In the regions where the temperature is changing, A to B, C to D, and E onward for heating, the kinetic energy and potential energy increase. E to D, C to B for cooling, kinetic energy of the particle is constant but PE is decreasing.</p>\n\n    <h3>Potential Energy and Phase Changes</h3>\n    <p>In the regions where the temperature remains constant, B to C and D to E for heating; D to C and B to A for cooling, the energy absorbed or released is used to change the phase of the substance. This involves changing the potential energy associated with intermolecular forces, rather than changing the kinetic energy of the particles.</p>\n  ",
  "2.3 Evaporation and Boiling": "\n    <h2>2.3 Evaporation and Boiling</h2>\n    <p>Evaporation is the process by which molecules at the surface of a liquid gain enough kinetic energy to escape into the gaseous phase. Only molecules at the liquid's surface participate in evaporation. These molecules must have sufficient kinetic energy to overcome intermolecular forces. Energy for evaporation comes from the surrounding environment. This absorption makes surroundings cooler than before. Evaporation can occur at any temperature below the liquid's boiling point. Higher temperatures increase the rate of evaporation since more molecules have sufficient energy to escape.</p>\n\n    <p>As high-energy molecules leave the liquid, the average kinetic energy of the remaining molecules decreases, leading to a cooling effect. This is why sweating helps cool the body.</p>\n\n    <h3>Examples:</h3>\n    <ul>\n      <li>Drying of clothes on a line.</li>\n      <li>Evaporation of water from lakes and oceans contributing to the water cycle.</li>\n      <li>Sweat evaporating from the skin, providing a cooling effect.</li>\n    </ul>\n\n    <p>Boiling is the process in which a liquid turns into vapor when it is heated to its boiling point, resulting in the formation of vapour bubbles within the liquid. Boiling occurs throughout the entire liquid, not just at the surface. Vapour bubbles form within the liquid, rise to the surface, and burst, releasing gas.</p>\n\n    <p>Boiling occurs at a specific temperature known as the boiling point. This temperature varies depending on the liquid and the external pressure. For water at sea level, the boiling point is 100°C, 212°F.</p>\n\n    <p>Continuous heat input is required to maintain the liquid at its boiling point. The temperature of the liquid remains constant during boiling, as the added energy is used to convert the liquid into gas. Boiling is characterized by the vigorous formation of bubbles and steam, making it a highly visible process.</p>\n\n    <p>The boiling point changes with external pressure. Higher pressure increases the boiling point, while lower pressure decreases it. This is why water boils at lower temperatures at high altitudes.</p>\n  ",
  "2.3.1 Effect of pressure on evaporation and boiling": "\n    <h2>2.3.1 Effect of pressure on evaporation and boiling</h2>\n    <p>The effect of pressure on evaporation and boiling is primarily related to how it influences the rate at which molecules escape from the liquid's surface into the gas phase. Here are the key points regarding the effect of pressure on evaporation:</p>\n\n    <h3>Effect of Lower Pressure</h3>\n    <p>At lower atmospheric pressures, the rate of evaporation increases. This is because there is less external pressure exerted on the liquid surface, making it easier for molecules to escape into the vapour phase.</p>\n    <p>For example, water will evaporate more quickly at high altitudes where the atmospheric pressure is lower than at sea level.</p>\n    <p>Lower pressure reduces the boiling point of a liquid, which means the liquid can transition to the gas phase at a lower temperature. This indirectly affects evaporation by facilitating the conditions under which it can occur more readily.</p>\n\n    <h3>Effect of Higher Pressure</h3>\n    <p>At higher atmospheric pressures, the rate of evaporation decreases. The increased external pressure on the liquid surface makes it more difficult for molecules to escape into the vapour phase.</p>\n    <p>For example, in a pressure cooker, the high pressure suppresses evaporation until a higher temperature is reached, allowing food to cook faster.</p>\n    <p>Higher pressure increases the boiling point of a liquid, which means the liquid requires a higher temperature to transition into the gas phase. This indirectly affects evaporation by making the conditions less favorable for it to occur.</p>\n    <p>For example, in a pressure cooker, the high pressure suppresses boiling until a higher temperature is reached allowing water to boil at a higher temperature. This allows food to cook faster.</p>\n\n    <p>Evaporation is a gradual process occurring at any temperature below the boiling point and at the surface of a liquid, while boiling is a rapid, vigorous process that occurs throughout the liquid at a specific boiling point.</p>\n  ",
  "2.4 Kinetic Particle Theory and Gas Laws": "\n    <h2>2.4 Kinetic Particle Theory and Gas Laws</h2>\n    <p>A sample of a gas can be characterized by four variables:</p>\n    <ol>\n      <li>The number of moles of a gas (n)</li>\n      <li>Volume (V)</li>\n      <li>Pressure (P)</li>\n      <li>Temperature (T)</li>\n    </ol>\n    <p>The relationships that express the influence of one variable on another with two variables constant are called gas laws.</p>\n  ",
  "2.4.1 Boyle's Law": "\n    <h2>2.4.1 Boyle's Law</h2>\n    <p>It states that for a fixed amount of gas at a constant temperature, the volume of a gas is inversely proportional to its pressure. Mathematically,</p>\n    <p><strong>V ∝ 1/P</strong></p>\n    <p><strong>V = k × 1/P</strong></p>\n    <p><strong>PV = constant</strong></p>\n\n    <h3>Kinetic Particle Theory Interpretation</h3>\n    <h4>Effect of Volume on Pressure:</h4>\n    <p>When the volume of a gas decreases, the gas particles have less space to move around. This results in more frequent collisions with the walls of the container, thereby increasing the pressure. Conversely, if the volume increases, the particles collide with the walls less often, decreasing the pressure.</p>\n\n    <h4>Constant Temperature:</h4>\n    <p>The average kinetic energy of the particles remains constant since the temperature does not change. The speed of the particles does not change, but the frequency of collisions with the container walls changes due to the volume change.</p>\n  ",
  "2.4.2 Charles's Law": "\n    <h2>2.4.2 Charles's Law</h2>\n    <p>It states that for a fixed amount of gas at constant pressure, the volume of a gas is directly proportional to its absolute temperature. Mathematically,</p>\n    <p><strong>V ∝ T</strong></p>\n    <p><strong>V = kT</strong></p>\n    <p><strong>V/T = k</strong></p>\n    <p><strong>V/T = constant</strong></p>\n\n    <h3>Kinetic Particle Theory Interpretation</h3>\n    <h4>Effect of Temperature on Volume:</h4>\n    <p>When the temperature of a gas increases, the kinetic energy of the gas particles increases. This means the particles move faster. To maintain constant pressure, the volume of the container must increase to allow the particles to travel further between collisions with the container walls, thus keeping the pressure constant. Conversely, if the temperature decreases, the kinetic energy of the particles decreases, the particles move slower, and the volume must decrease to maintain constant pressure.</p>\n\n    <h4>Constant Pressure:</h4>\n    <p>The volume changes to balance the increased or decreased frequency and force of collisions due to temperature changes, maintaining constant pressure.</p>\n  ",
  "2.4.3 Avogadro's Law": "\n    <h2>2.4.3 Avogadro's Law</h2>\n    <p>It states that for a gas at constant temperature and pressure, the volume of the gas is directly proportional to the number of moles of gas. Mathematically,</p>\n    <p><strong>V ∝ n</strong></p>\n    <p><strong>V = kn</strong> where k and n are constant</p>\n    <p><strong>V/n = constant</strong></p>\n    <p><strong>n = no. of moles</strong></p>\n\n    <h3>Kinetic Particle Theory Interpretation</h3>\n    <h4>Effect of Number of Particles (Moles) on Volume:</h4>\n    <p>When the number of gas particles, moles, increases, there are more particles colliding with the walls of the container. To keep the pressure constant, the volume of the container must increase to accommodate the additional particles and maintain the same number of collisions per unit area. Conversely, if the number of particles decreases, the volume must decrease to maintain constant pressure.</p>\n\n    <h4>Constant Temperature and Pressure:</h4>\n    <p>The temperature ensures the kinetic energy of each particle remains the same, and the pressure remains constant by adjusting the volume according to the number of particles.</p>\n  ",
  "2.5 Diffusion of gases": "\n    <h2>2.5 Diffusion of gases</h2>\n    <p>One of the simplest examples of diffusion in everyday use is when perfume is sprayed and dispersed across a room. At first, perfume molecules are concentrated in the spray and dispersed across the room. However, as the perfume particles travel and collide, they disperse across the room, allowing the perfume to be detected even at a distance from the source.</p>\n  ",
  "2.5.1 Diffusion Process Explained by Kinetic Particle Theory": "\n    <h2>2.5.1 Diffusion Process Explained by Kinetic Particle Theory</h2>\n    <p>When two different gases come into contact, their particles begin to move together. Because of their kinetic energy, each type of gas particle moves randomly in all directions. The random motion of these particles ensures that the particles from each of the two gases move into the other gas's space. This random and constant motion causes the gases to spread and mix up. The gas particles change direction as they move and collide with each other. As they change direction, they spread out and move through the space available to them. As time goes on, this random motion causes the particles to spread out evenly across the space. Eventually, the concentration of both types of gas particles is uniform across the entire space, and equilibrium is achieved.</p>\n  ",
  "2.5.2 Factors affecting diffusion": "\n    <h2>2.5.2 Factors affecting diffusion</h2>\n    <p>The rate of diffusion, the process by which molecules spread from areas of high concentration, is affected by several factors, including molecular weight and temperature.</p>\n\n    <h3>Molecular weight</h3>\n    <p>According to Graham's law of diffusion, the rate of diffusion is inversely proportional to the square root of the molar mass of the gas particles.</p>\n    <p><strong>Rate of diffusion ∝ 1/√m at constant T and P</strong></p>\n    <p>This means that lighter molecules diffuse faster than heavier ones.</p>\n    <p>According to kinetic particle theory, all molecules at the same temperature have the same average kinetic energy.</p>\n    <p>Since kinetic energy, K.E = 1/2mv², where m is the molecular mass and v is the velocity, lighter molecules, smaller m, have a greater velocity v than heavier molecules with the same kinetics.</p>\n    <p>Because lighter molecules move faster, they can travel greater distances in a given time than heavier molecules, resulting in a higher rate of diffusion.</p>\n\n    <h3>Temperature</h3>\n    <p>Diffusion rate increases with temperature. Higher temperatures give molecules more energy, which increases their kinetic energy. As the temperature increases, the average kinetic energy of the molecules increases. Since kinetic energy is proportional to the square of the velocity, this results in a higher molecular velocity. Higher molecular velocities at higher temperatures cause more frequent and energetic collisions between molecules, facilitating faster diffusion.</p>\n\n    <h3>CONCEPT ASSESSMENT EXERCISE 2.1: Explain why?</h3>\n    <p>(a) When you apply perfume to your palm, it makes you feel cold.</p>\n    <p>(b) We all sweat. As our sweat evaporates, it cools us.</p>\n  ",
  "2.6 Sublimation": "\n    <h2>2.6 Sublimation</h2>\n    <p>Sublimation is the process in which molecules of a substance in the solid state go to the vapor state directly, without going through the liquid state. According to the kinetic molecular theory, we know that molecules are in constant random motion, even when the substance is below the melting point. We also know that the average speed of the molecules, kinetic energy, is directly proportional to the absolute temperature. If the molecules are below the melting point and are kept in the solid state by relatively weak intermolecular forces, compared to the strength of the covalent bonds within the molecule, then sometimes a molecule will have enough energy to break those intermolecular bonds and go into the vapour state. There are many substances that undergo sublimation. Carbon dioxide, camphor, and naphthalene are material that easily undergoes sublimation.</p>\n\n    <h3>Application of Sublimation in our life</h3>\n    <ul>\n      <li>The solid air fresheners we often use in our cars and homes rely solely on the magic of sublimation. The solid fragrance within slowly transforms into a delightful vapour, filling the entire space with an enticing aroma that lingers in the air.</li>\n      <li>In the textile industry, 3D printing uses a sublimation process. Dye sublimation printers are now widely used for the printing process for a reduced cost. Dye sublimation is used to print a variety of objects such as T-shirts, pens, coffee mugs, and bags.</li>\n      <li>In the food industry, freeze-drying food items for preservation for a longer duration is due to the process of sublimation.</li>\n    </ul>\n\n    <h3>Simple examples of deposition in daily life. Did you get it.!!</h3>\n    <ul>\n      <li>The formation process of snow from water vapour.</li>\n      <li>Black soot inside a vehicle exhaust.</li>\n      <li>The making process of dry ice using carbon dioxide.</li>\n    </ul>\n  ",
  "2.6.1 Importance of Diffusion Rates in Medicine": "\n    <h2>2.6.1 Importance of Diffusion Rates in Medicine</h2>\n    <p>Kinetic particle theory is one of the most important theories for understanding drug distribution rates in the human body. When you take a drug, whether it is taken by mouth or injected, it needs to diffuse from the injection site into your bloodstream. The diffusion rate determines how quickly a drug reaches its target area in your body. Drug molecules need to spread through different tissues and organs to reach your body's cells where they do their work. Higher levels of diffusion usually mean your drug will work faster. For example, a fast-acting drug like a pain reliever needs to dissolve quickly to provide immediate pain relief. Kinetic particles theory explains that drug diffusion rates are affected by a concentration gradient between your drug and your surrounding tissues. If your drug is at a high concentration at the time of administration, and your surrounding tissues are at a low concentration, then your drug diffusion rate will be faster.</p>\n\n    <p>The rate of diffusion also depends on the composition of the drug, e.g. liquid, gel, tablet. Generally, liquid drugs move more quickly than solid drugs, as their particles have already dispersed. Controlled-release formulations are used to control the rate of drug diffusion so that the therapeutic effect remains consistent over time.</p>\n  ",
  "Key Points": "\n    <h2>KEY POINTS</h2>\n    <ul>\n      <li>Solids, liquids and gases change state when they are heated or cooled.</li>\n      <li>A state change, or phase transition, is the transition of matter from one state of matter to another.</li>\n      <li>A heating curve typically shows temperature change over time as a substance is heated.</li>\n      <li>The temperature remains constant as the solid melts into a liquid.</li>\n      <li>The temperature remains constant as the liquid changes into a gas.</li>\n      <li>The temperature remains constant as the gas condenses into a liquid.</li>\n      <li>Evaporation is the process by which molecules at the surface of a liquid gain enough kinetic energy to escape into the gaseous phase.</li>\n      <li>Boiling is the process in which a liquid turns into vapor when it is heated to its boiling point.</li>\n      <li>Boyle's Law: It states that for a fixed amount of gas at a constant temperature, the volume of a gas is inversely proportional to its pressure.</li>\n      <li>Charles's Law: It states that for a fixed amount of gas at constant pressure, the volume of a gas is directly proportional to its absolute temperature.</li>\n      <li>Avogadro's Law: It states that for a gas at constant temperature and pressure, the volume of the gas is directly proportional to the number of moles of gas.</li>\n      <li>Graham's law of diffusion: The rate of diffusion is inversely proportional to the square root of the molar mass of the gas particles.</li>\n      <li>Sublimation is the process in which molecules of a substance in the solid state go to the vapor state directly, without going through the liquid state.</li>\n    </ul>\n\n    <h3>References</h3>\n    <ul>\n      <li>Collins, Advanced Molecular Sciences Chemistry, AS</li>\n      <li>Bob Berry, IGCSE, study guide for chemistry.</li>\n      <li>Lian Brand and Richard Grime Chemistry.</li>\n      <li>Text book of chemistry Grade 9 National Book foundation</li>\n      <li>Text book of chemistry Grade 11 National Book foundation</li>\n    </ul>\n  ",
  "Exercise": "\n    <h2>EXERCISE</h2>\n\n    <h3>1. Multiple Choice Questions (MCQs)</h3>\n    <ol type=\"i\">\n      <li><p>What happens to the internal energy of a substance during melting?</p><p>a) It decreases<br>b) It stays the same<br>c) It increases<br>d) It fluctuates</p></li>\n      <li><p>Which process involves a solid turning directly into a gas?</p><p>a) Melting<br>b) Freezing<br>c) Sublimation<br>d) Condensation</p></li>\n      <li><p>Boiling occurs at:</p><p>a) Any temperature<br>b) A fixed temperature<br>c) Only at room temperature<br>d) Any pressure</p></li>\n      <li><p>During condensation, the particles in a gas:</p><p>a) Gain energy and move faster<br>b) Lose energy and move slower<br>c) Gain energy and move slower<br>d) Lose energy and move faster</p></li>\n      <li><p>Which law states that the volume of a gas is directly proportional to its temperature at constant pressure?</p><p>a) Boyle's Law<br>b) Charles's Law<br>c) Avogadro's Law<br>d) Dalton's Law</p></li>\n      <li><p>Evaporation differs from boiling because:</p><p>a) Evaporation occurs at the surface of a liquid at any temperature<br>b) Boiling occurs only at the surface<br>c) Evaporation requires a fixed temperature<br>d) Boiling occurs at any temperature</p></li>\n      <li><p>According to kinetic particle theory, the pressure of a gas increases when:</p><p>a) The volume increases<br>b) The temperature decreases<br>c) The number of particles decreases<br>d) The temperature increases</p></li>\n      <li><p>Which factor affects the rate of diffusion of gases?</p><p>a) Molecular mass<br>b) Temperature<br>c) Both a and b<br>d) Neither a nor b</p></li>\n      <li><p>Solid air fresheners use the process of:</p><p>a) Condensation<br>b) Deposition<br>c) Sublimation<br>d) Freezing</p></li>\n      <li><p>The diffusion of medicine in the body is important because:</p><p>a) It controls the temperature of the medicine<br>b) It ensures the medicine reaches all parts of the body<br>c) It keeps the medicine in one place<br>d) It increases the molecular mass of the medicine</p></li>\n    </ol>\n\n    <h3>2. Short Answer Questions</h3>\n    <ol type=\"i\">\n      <li>Explain why the temperature remains constant during the phase change from ice to water.</li>\n      <li>What is the name given to the phase change when a solid is converted directly to a gas?</li>\n      <li>What is the difference between evaporation and boiling?</li>\n      <li>Interpret a heating curve for water, identifying key phase changes.</li>\n      <li>Explain the effect of increasing temperature on the pressure of a gas in a sealed container.</li>\n      <li>How does increasing the external pressure affect the boiling point of a liquid?</li>\n      <li>Describe how molecular mass influences the rate of diffusion.</li>\n      <li>Give an example of sublimation and explain its practical application.</li>\n      <li>Why is the diffusion of gases faster at higher temperatures?</li>\n      <li>How does Avogadro's law relate to the volume and number of moles of gas?</li>\n    </ol>\n\n    <h3>3. Long Answer Questions</h3>\n    <ol type=\"i\">\n      <li>Describe in detail the kinetic particle theory and how it explains the phase changes of melting, freezing, boiling, and condensation.</li>\n      <li>Interpret a cooling curve, identifying and explaining the significance of the flat regions on the curve.</li>\n      <li>Explain how diffusion works in gases and discuss the factors affecting the rate of diffusion, including molecular mass and temperature.</li>\n    </ol>\n  ",
  "Think Tank": "\n    <h2>THINK TANK</h2>\n    <ol>\n      <li>Analyze the impact of altitude on the boiling point of water and how it affects cooking times. Provide a detailed explanation based on kinetic particle theory and external pressure.</li>\n      <li>Discuss the importance of understanding diffusion rates in the development of pharmaceuticals.</li>\n      <li>Evaluate the environmental and practical implications of using sublimation in various industries, such as air fresheners and 3D printing, considering both benefits and potential drawbacks.</li>\n    </ol>\n  "
};

CHEMISTRY_DIGITAL_BOOK["Stoichiometry"] = {
  "Student Learning Outcomes (SLOs)": "\n    <h2>Student Learning Outcomes (SLOs)</h2>\n    <ul>\n      <li>Use the molar gas volume, 24 dm³ at room temperature and pressure, in calculations involving gases.</li>\n      <li>Define concentration, use both g/dm³ mol/dm³, and convert between them.</li>\n      <li>Calculate stoichiometric relationships between substances specially: reacting masses, limiting reactants, volume of gases at RTP, volumes of solutions and concentrations of solutions in g/dm³ or mol/dm³, including conversion between cm³ and dm³.</li>\n      <li>Calculate concentration of a solution in titration using empirical data.</li>\n      <li>Calculate empirical formula and molecular formula from appropriate data.</li>\n      <li>Calculate percentage yield, percentage composition by mass and percentage purity from appropriate data.</li>\n    </ul>\n  ",
  "Introduction to Stoichiometry": "\n    <h2>Introduction to Stoichiometry</h2>\n    <p>Stoichiometry is an integral part of the chemical industry and has a wide range of practical applications. For example, the chemical composition of everyday products such as soap, detergent, toothpaste, shampoos, cosmetics, medicines, and fertilizers is determined by stoichiometry.</p>\n    <p>Stoichiometry comes from the Greek word “Stoichen” meaning element and the word “Metron” which means measure. The study of relative amounts of the substances involved in the chemical reaction is known as stoichiometry. It helps in the application of balanced chemical equations for the calculation of the quantities of the reactants and the products. It is based on a balanced chemical equation that shows the mole-to-mole quantity of the reactant and products.</p>\n  ",
  "3.1 Mole": "\n    <h2>3.1 Mole</h2>\n    <p>Recall that the atomic mass, formula mass, and molecular mass of a substance expressed in grams is called Mole.</p>\n    <h3>For Example</h3>\n    <ul>\n      <li>One mole of O atom = 16g</li>\n      <li>One mole of O₂ molecule = 32g</li>\n      <li>One mole of H₂O molecule = 18g</li>\n      <li>One mole of Na⁺ ion = 23g</li>\n      <li>One mole of NaCl formula unit = 58.5g</li>\n    </ul>\n  ",
  "Mole ratios in Stoichiometric Calculations": "\n    <h2>Mole ratios in Stoichiometric Calculations</h2>\n    <p>Lets look at the following chemical reaction.</p>\n    <p><strong>2H₂ + O₂ → 2H₂O</strong></p>\n    <p>What does this chemical equation tell us? It tells us that 2 moles of hydrogen + 1 mole of oxygen will form 2 moles of water. Any chemical reaction can be interpreted in terms of a mole. Moles can easily be converted into the mass of reactants/products. A balanced chemical equation will tell you the ratio of the reactants/products to the mole. The mole is the unit of measurement used to express the amount of a substance.</p>\n    <p>The mole is the SI unit to express the amount of a substance. It is symbolized as mol.</p>\n\n    <h3>Example 3.1</h3>\n    <p>Methanol burns according to the following equation.</p>\n    <p><strong>2CH₃OH + 3O₂ → 2CO₂ + 4H₂O</strong></p>\n    <p>If 3.50 moles of methanol are burnt in oxygen, calculate:</p>\n    <ol type=\"a\">\n      <li>How many moles of oxygen are used?</li>\n      <li>How many moles of water are produced?</li>\n    </ol>\n\n    <h3>Solution</h3>\n    <p><strong>(a)</strong> Moles of methanol = 3.50 moles</p>\n    <p>Moles of oxygen = ?</p>\n    <p>According to the balanced chemical equation:</p>\n    <p>2 moles of CH₃OH = 3 moles of O₂</p>\n    <p>1 mole of CH₃OH = 3/2 moles of O₂</p>\n    <p>3.5 moles of CH₃OH = 3.5 × 3/2 moles of O₂</p>\n    <p>= 5.25 moles of O₂</p>\n    <p>So the number of moles of O₂ consumed = 5.25 moles.</p>\n\n    <p><strong>(b)</strong> No. of moles of CH₃OH = 3.5 moles</p>\n    <p>No. of moles of H₂O = ?</p>\n    <p>According to the balanced chemical equation:</p>\n    <p>2 moles of CH₃OH = 4 moles of H₂O</p>\n    <p>1 mole of CH₃OH = 4/2 moles of H₂O</p>\n    <p>3.5 moles of CH₃OH = 3.5 × 4/2 moles of H₂O</p>\n    <p>= 7.00 moles of H₂O</p>\n    <p>So the number of moles of H₂O produced = 7.00 moles.</p>\n\n    <h3>Concept Assessment Exercise 3.1</h3>\n    <p>NH₃ is an important raw material in the manufacture of fertilisers. It is obtained by the combination of N₂ and H₂ as shown by the following balanced equation.</p>\n    <p><strong>N₂ + 3H₂ → 2NH₃</strong></p>\n    <p>How many moles of the following are required to manufacture 8.0 moles of NH₃?</p>\n    <ol type=\"a\">\n      <li>Nitrogen</li>\n      <li>Hydrogen</li>\n    </ol>\n\n    <h3>Example 3.2</h3>\n    <p>Iron can be produced from iron ore Fe₂O₃ by reacting the ore with carbon monoxide CO. What mass of iron can be formed from 425 g of iron ore?</p>\n\n    <h3>Solution</h3>\n    <p>The balanced equation can be written as:</p>\n    <p><strong>Fe₂O₃ + 3CO → 2Fe + 3CO₂</strong></p>\n    <p>Mass of iron ore = 425 g</p>\n    <p>No. of moles of iron ore = mass / molecular mass</p>\n    <p>= 425 / 159.6</p>\n    <p>= 2.66 moles of Fe₂O₃</p>\n    <p>According to the balanced chemical equation:</p>\n    <p>1 mole of Fe₂O₃ = 2 moles of Fe</p>\n    <p>2.66 moles of Fe₂O₃ = 2.66 × 2 moles of Fe = 5.32 moles of Fe</p>\n    <p>Mass of Fe produced = no. of moles of Fe × molar mass of iron</p>\n    <p>= 5.32 × 55.9g</p>\n    <p>Mass of iron produced = 297.38g</p>\n\n    <h3>Concept Assessment Exercise 3.2</h3>\n    <ol>\n      <li>Hydrogen burns with oxygen according to the following equation. <strong>2H₂ + O₂ → 2H₂O</strong>. How many grams of oxygen are needed to burn 100 g of hydrogen completely?</li>\n      <li>Calculate the mass of O₂ produced by thermal decomposition of 49 grams of KClO₃. <strong>2KClO₃ → 2KCl + 3O₂</strong></li>\n    </ol>\n  ",
  "Molar Volume": "\n    <h2>Molar Volume</h2>\n    <p>One mole of any gas at RTP, room temperature and pressure, occupies a volume of 24 dm³. This volume is called molar volume. RTP stands for 25°C and 1 atm. With the help of this relationship, we can convert the mass of a gas at RTP into its volume and vice versa.</p>\n    <ul>\n      <li>24 dm³ of any gas at RTP = 1 mole</li>\n      <li>24 dm³ of H₂ gas at RTP = 2g = 1 mole</li>\n      <li>24 dm³ of NH₃ gas at RTP = 17g = 1 mole</li>\n    </ul>\n\n    <h3>Example 3.3</h3>\n    <p>Determine the volume that 2.5 moles of chlorine molecules occupy at RTP.</p>\n\n    <h3>Solution</h3>\n    <p>We know that 24 dm³ of Cl₂ at RTP = 1 mole.</p>\n    <p>Or 1 mole of Cl₂ occupies a volume of 24 dm³ at RTP.</p>\n    <p>2.5 mole of Cl₂ occupy a volume of 24 dm³ × 2.5 = 60 dm³.</p>\n\n    <h3>Concept Assessment Exercise 3.3</h3>\n    <ol type=\"a\">\n      <li>How many moles of oxygen molecule are there in 50.0 dm³ of oxygen gas at RTP?</li>\n      <li>What volume does 0.80 mole of N₂ gas occupy at RTP?</li>\n    </ol>\n    <p>Ans: a. 2.08 moles, b. 19.2 dm³</p>\n  ",
  "3.2 Percentage Composition": "\n    <h2>3.2 Percentage Composition</h2>\n    <p>The relative amounts of each element in a compound are expressed as the percentage composition. For example, the percentage composition by mass in MgO is as follows.</p>\n    <p>To determine the percentage composition of a known compound:</p>\n    <ol type=\"a\">\n      <li>Calculate the molar mass of the compound.</li>\n      <li>Calculate the percentage of each element in one mole of the compound. This is done by dividing the mass of each element in one mole of the compound by the molar mass multiplied by 100.</li>\n    </ol>\n    <p><strong>% of an element = mass of element in 1 mole of compound / molar mass of compound × 100</strong></p>\n    <p>Molar mass of MgO = 24 + 16 = 40 g/mol</p>\n    <p>% of Mg = 24/40 × 100 = 60.3</p>\n    <p>% of O = 16/40 × 100 = 39.7</p>\n    <p>The sum of percentages of all the elements in a compound must be equal to 100.</p>\n\n    <h3>Concept Assessment Exercise 3.4</h3>\n    <ol>\n      <li>Water H₂O</li>\n      <li>Sulphuric acid H₂SO₄</li>\n      <li>Glucose C₆H₁₂O₆</li>\n      <li>Ammonium nitrate NH₄NO₃</li>\n    </ol>\n  ",
  "3.3 Limiting and Non-Limiting Reactants": "\n    <h2>3.3 Limiting and Non-Limiting Reactants</h2>\n    <p>A limiting reactant is the reactant that is completely consumed in a reaction. A limiting reactant can also be defined as the reactant that produces the lowest moles of products in a reaction. The reactant in excess is the reactant left unutilised or unreacted after the reaction is complete. It is also referred to as a non-limiting reactant.</p>\n  ",
  "3.3.1 Identification of a Limiting Reactant in a Reaction": "\n    <h2>3.3.1 Identification of a Limiting Reactant in a Reaction</h2>\n    <p>A limiting reactant can be recognised by calculating the number of moles of products formed from data of the given amounts of the reactants, using a balanced chemical equation. The reactant that produces the least number of moles of products is the limiting reactant.</p>\n    <p>For example, 10 moles of H₂ and 10 moles of O₂ were reacted to produce H₂O. Which one of the reactants is the limiting reactant?</p>\n    <p>The reaction is:</p>\n    <p><strong>2H₂ + O₂ → 2H₂O</strong></p>\n    <p>According to the balanced chemical equation:</p>\n    <p>2 moles of H₂ give = 2 moles of H₂O</p>\n    <p>10 moles of H₂ will give = 10 moles of H₂O</p>\n    <p>1 mole of O₂ gives = 2 moles of H₂O</p>\n    <p>7 moles of O₂ = 2 × 7 = 14 moles of H₂O</p>\n    <p>Since H₂ gives the least number of moles of H₂O, i.e. 10 moles, so H₂ is the limiting reactant.</p>\n\n    <h3>Example 3.4</h3>\n    <p>200 g of Zn were reacted with 200g dil. H₂SO₄. Determine:</p>\n    <ol type=\"a\">\n      <li>Limiting reactant</li>\n      <li>Mass of hydrogen produced</li>\n    </ol>\n    <p><strong>Zn + H₂SO₄ → ZnSO₄ + H₂</strong></p>\n\n    <h3>Solution</h3>\n    <p>Mass of Zn = 200g</p>\n    <p>Molar mass of Zn = 63.5 g mol⁻¹</p>\n    <p>No. of moles of Zn = 200/63.5 = 3.15 mol</p>\n    <p>Mass of H₂SO₄ = 200g</p>\n    <p>Molar mass of H₂SO₄ = 2 + 32 + 16 × 4 = 98 g/mol</p>\n    <p>No. of moles of H₂SO₄ = 200/98 = 2.04 mol</p>\n    <p>According to the balanced chemical equation:</p>\n    <p>1 mole of Zn produces = 1 mol of H₂</p>\n    <p>3.15 mol of Zn = 3.15 mol of H₂</p>\n    <p>1 mol of H₂SO₄ = 1 mol of H₂</p>\n    <p>2.04 moles of H₂SO₄ = 2.04 mol of H₂</p>\n    <p>As H₂SO₄ is producing lesser moles of product, so H₂SO₄ is the limiting reactant.</p>\n    <p>Mass of hydrogen produced = no. of moles of hydrogen × molar mass of hydrogen</p>\n    <p>= 2.04 × 2 = 4.08 g</p>\n\n    <h3>Concept Assessment Exercise 3.5</h3>\n    <ol>\n      <li>Magnesium metal reacts with sulphur to produce MgS. How many grams of magnesium sulphide MgS can be made from 1.50g of Mg and 1.50g of sulphur by the reaction? <strong>Mg + S → MgS</strong></li>\n      <li>Zinc and sulphur react to form zinc sulphide according to the balanced chemical equation <strong>Zn + S → ZnS</strong>. If 10.0g of zinc and 10.0g of sulphur are available for reaction, determine: a. the limiting reactant, b. the mass of zinc sulphide produced.</li>\n      <li>Aluminium reacts with bromine to form aluminium bromide, as shown by the balanced chemical equation <strong>2Al + 3Br₂ → 2AlBr₃</strong>. If 54g of Al and 200g of Br₂ are available for reaction, determine: a. the limiting reactant, b. the mass of AlBr₃ produced.</li>\n    </ol>\n  ",
  "3.4 Theoretical Yield, Actual yield and Percent yield": "\n    <h2>3.4 Theoretical Yield, Actual yield and Percent yield</h2>\n    <p>The amount of product as calculated from a balanced chemical equation is known as the theoretical yield of a chemical equation. The actual yield is the amount of product actually produced in the reaction. The percent yield of a chemical reaction can be calculated as follows:</p>\n    <p><strong>Percentage Yield = Actual Yield / Theoretical Yield × 100</strong></p>\n    <p>For many reactions, the theoretical yield is close to the actual yield. These reactions are quantitative and can be used for chemical analysis. For some reactions, however, the actual yield is below the theoretical yield, and the percent yield is less than 100%. This is because of the following reasons:</p>\n    <p>Side reactions may result in by-products. Some reactions may be reversible. Mechanical loss can occur as a result of filtration or distillation. Separation by a funnel, washing or crystallization can also cause mechanical loss.</p>\n\n    <h3>Example 3.5</h3>\n    <p>In an industry copper metal was prepared by the following reaction:</p>\n    <p><strong>Fe + CuSO₄ → FeSO₄ + Cu</strong></p>\n    <p>1.274g of CuSO₄ when reacted with excess of Fe metal, a yield of 0.392g of Cu metal is obtained. Calculate the percentage yield.</p>\n\n    <h3>Solution</h3>\n    <p>Mass of CuSO₄ = 1.274g</p>\n    <p>Molar mass of CuSO₄ = 63.5 + 32 + 64 = 159.5 g/mol</p>\n    <p>159.5g of CuSO₄ = 1 mole</p>\n    <p>1.274g of CuSO₄ = 1/159.5 × 1.274 = 7.982 × 10⁻³ mol</p>\n    <p>1 mol of CuSO₄ = 1 mole of Cu</p>\n    <p>7.982 × 10⁻³ moles of CuSO₄ = 7.982 × 10⁻³ mol of Cu</p>\n    <p>As 1 mole of Cu = 63.5g</p>\n    <p>So, 7.982 × 10⁻³ moles of Cu = 63.5 × 7.982 × 10⁻³ = 0.5072 g of Cu</p>\n    <p>Hence, theoretical yield = 0.5072 g</p>\n    <p>Actual yield = 0.392 g</p>\n    <p>% yield = actual yield / theoretical yield × 100</p>\n    <p>= 0.392 / 0.5072 × 100 = 77.3%</p>\n\n    <h3>Concept Assessment Exercise 3.6</h3>\n    <ol>\n      <li>In a reaction, 2.00 moles of CH₄ were reacted with an excess of Cl₂. As a result, 177.0g of CCl₄ is obtained. What is the theoretical yield, actual yield, and % yield of this reaction? <strong>CH₄ + 4Cl₂ → CCl₄ + 4HCl</strong></li>\n      <li>Phosphorus reacts with bromine to form phosphorus tribromide. When 35g of bromine is reacted, 27.9g of phosphorus tribromide is produced. What is the theoretical yield, actual yield, and % yield of this reaction? <strong>2P + 3Br₂ → 2PBr₃</strong></li>\n    </ol>\n  ",
  "3.5 Determining Empirical and Molecular Formulas": "\n    <h2>3.5 Determining Empirical and Molecular Formulas</h2>\n    <p>Remember that the empirical formula of a compound tells you the simplest ratio of elements in the compound. On the other hand, the molecular formula tells you the actual ratio of elements in the compound.</p>\n\n    <h3>Determining the empirical formula of a compound involves the following steps:</h3>\n    <ol>\n      <li>Find the number of moles of each element from its mass or percentage composition.</li>\n      <li>Divide each element's molar amount by the smallest or least molar amount to get the simplest whole-number ratio of the compound.</li>\n      <li>Write the empirical formula using the simplest ratio as subscripts.</li>\n    </ol>\n\n    <h3>Determining the molecular formula of a compound involves the following steps:</h3>\n    <ol>\n      <li>Find the molar mass of the empirical formula.</li>\n      <li>Divide the compound's molar mass by the empirical formula's molar mass. This will give you a whole number n.</li>\n      <li>Multiply all the subscripts in the empirical formula by n to get the molecular formula.</li>\n    </ol>\n\n    <h3>Example 3.6</h3>\n    <p>A compound has the following composition: Carbon = 40%, hydrogen = 6.7% and oxygen = 53.3%. The molar mass of the compound is 180 g/mol. Determine its empirical and molecular formulas.</p>\n\n    <h3>Solution</h3>\n    <p>Moles of elements:</p>\n    <p>C = 40/12 = 3.33</p>\n    <p>H = 6.7/1 = 6.7</p>\n    <p>O = 53.3/16 = 3.33</p>\n    <p>Mole ratio:</p>\n    <p>C : H : O = 3.33 : 6.7 : 3.33</p>\n    <p>3.33/3.33 : 6.7/3.33 : 3.33/3.33</p>\n    <p>1 : 2 : 1</p>\n    <p>Empirical formula = CH₂O</p>\n    <p>Molar mass of empirical formula = 1 × 12 + 2 × 1 + 1 × 16 = 30g/mol</p>\n    <p>n = molar mass / empirical formula molar mass</p>\n    <p>= 180 / 30 = 6</p>\n    <p>Therefore molecular formula = (CH₂O)₆ = C₆H₁₂O₆</p>\n\n    <h3>Concept Assessment Exercise 3.7</h3>\n    <ol>\n      <li>Determine the empirical and molecular formula of a compound from the following data: 26.4% Carbon, 3.3% Hydrogen, 70.3% Oxygen, Molar Mass: 91.0 g/mol.</li>\n      <li>Determine the empirical and molecular formula of a compound composed of 18.24g carbon, 0.51g hydrogen, and 16.91g fluorine, which has a molar mass 562.0 g/mol.</li>\n    </ol>\n  ",
  "Percentage purity": "\n    <h2>Percentage purity</h2>\n    <p>The amount of the pure substance in a sample represented as a percentage of the sample's total mass is known as percentage purity.</p>\n    <p>You can determine the purity of a compound by comparing the amount of pure compound compared to the total mass of a sample.</p>\n    <p><strong>Percentage purity = Actual mass of compound × 100 / Total mass of sample</strong></p>\n\n    <h3>Example 3.7</h3>\n    <p>A student synthesized a compound and obtained a sample weighing 6.3g. Then he performed chemical analysis and found that the sample contains 4.2g of pure compound. Calculate the percentage purity of the compound.</p>\n\n    <h3>Solution</h3>\n    <p>Actual mass of compound = 4.2g</p>\n    <p>Total mass of the sample = 6.3g</p>\n    <p>Percentage purity of compound = actual mass of compound × 100 / total mass of sample</p>\n    <p>= 4.2 × 100 / 6.3</p>\n    <p>= 66.67%</p>\n\n    <h3>Concept Assessment Exercise 3.8</h3>\n    <p>An impure sample of calcium carbonate has a mass of 70g. After purification, 56g of calcium carbonate is recovered. What is the percentage purity of calcium carbonate?</p>\n  ",
  "3.6 Concentration Units": "\n    <h2>3.6 Concentration Units</h2>\n    <p>When solid solutes are dissolved in water, their molecules or ions readily move about in solution. They come in contact with one another readily in solution, so they combine easily. The quantity of a solute present in a given amount of solvent or solution is called the concentration of a solution.</p>\n    <p>Recall that you have learned the difference between a dilute and a concentrated solution. A dilute solution is that whose concentration is relatively low while a concentrated solution is a solution whose concentration is relatively high. You can find dilute and concentrated solutions of common acids and bases in your chemistry laboratory. Chemists use many concentration units. Here we will discuss molarity and strength.</p>\n\n    <h3>i. Molarity M mol/dm³</h3>\n    <p>If you read the label on the bottle of concentrated H₂SO₄ you will notice 98% by mass and also 18M. What does 18M stand for? This means there are 18 moles of H₂SO₄ in each dm³ of solution. Similarly, conc. HCl is 37% and 12.1M HCl. This means there are 12.1 moles of HCl in each dm³ of solution.</p>\n    <p>We can express the concentration in terms of moles of solute in the given volume of solution. Molarity is the concentration unit in which the amount of solute is expressed in moles and the quantity of solution in dm³.</p>\n    <p>Molarity is defined as the number of moles of solute dissolved per dm³ of solution.</p>\n    <p><strong>M = moles of solute / dm³ of solution</strong></p>\n  ",
  "3.6.1 Problems Involving the Molarity of a Solution": "\n    <h2>3.6.1 Problems Involving the Molarity of a Solution</h2>\n\n    <h3>Example 3.8</h3>\n    <p>Urea is a white solid used as fertilizer and starting material for synthetic plastic. A solution contains 40g urea dissolved in 500 cm³ of solution. Calculate the molarity of this solution.</p>\n\n    <h3>Problem Solving Strategy</h3>\n    <p>To calculate the molarity, you need the number of moles of solute and the volume of solution in dm³. Convert the volume of solution 500 cm³ to dm³. Determine moles of solute from its mass using its molar mass.</p>\n\n    <h3>Solution</h3>\n    <p>Mass of urea = 40g</p>\n    <p>Molar mass of urea = 14 + 1×2 + 12 + 16 + 14 + 1×2 = 60g/mol</p>\n    <p>Moles of urea = 40/60 = 0.667 mol</p>\n    <p>Volume of solution = 500 cm³ = 500/1000 = 0.5 dm³</p>\n    <p>Molarity = moles of solute / dm³ of solution</p>\n    <p>Molarity = 0.667 / 0.5 = 1.334M</p>\n\n    <h3>Example 3.9</h3>\n    <p>Calculating molarity from moles of solute and volume of solution. Potassium permanganate KMnO₄ is a dark blue-black compound. When it is dissolved in water, it forms a bright purple solution. It is used as a disinfectant in water tanks. It is also known as pinky. A solution contains 0.05 moles of KMnO₄ in 600 cm³ of solution. Calculate the molarity of this solution.</p>\n\n    <h3>Problem Solving Strategy</h3>\n    <p>To calculate molarity, you need moles of solute which are given, and the volume of solution in dm³. But volume is given in cm³. So convert the cm³ to dm³ by dividing with 1000. Use a formula to calculate molarity.</p>\n\n    <h3>Solution</h3>\n    <p>Moles of KMnO₄ = 0.05</p>\n    <p>Volume of solution = 600 cm³ = 600/1000 = 0.6 dm³</p>\n    <p>Molarity = moles of solute / dm³ of solution</p>\n    <p>Molarity = 0.05 / 0.6 = 0.083M</p>\n\n    <h3>Concept Assessment Exercise 3.9</h3>\n    <p>Potassium chlorate KClO₃ is a white solid. It is used in making matches and dyes. Calculate the molarity of the solution that contains:</p>\n    <ol type=\"a\">\n      <li>1.5 moles of this compound dissolved in 250 cm³ of solution.</li>\n      <li>75g of this compound dissolved to produce 1.25 dm³ of solution.</li>\n      <li>What is the molarity of a 50 cm³ sample of potassium chlorate solution that yields 0.25g residue after evaporation of the water?</li>\n    </ol>\n  ",
  "Strength of a Solution": "\n    <h2>Strength of a Solution</h2>\n    <p>The strength of a solution refers to the concentration of solute in a given volume of solution. It is expressed in terms of grams of solute per unit volume of solution. It is typically represented as:</p>\n    <ul>\n      <li>g/dm³, grams per cubic decimeter</li>\n      <li>g/cm³, grams per cubic centimeter</li>\n    </ul>\n    <p>These units express how much solute is dissolved in a specified volume of solution.</p>\n    <p><strong>Strength of solution = Mass of solute g / volume of solution dm³ or cm³</strong></p>\n    <p>Mass of solute is measured in grams g. Volume of solution is measured in cubic decimeters dm³ or cubic centimeters cm³.</p>\n\n    <h3>Unit Conversion</h3>\n    <p>1 dm³ = 1000 cm³</p>\n    <p>So, to convert between g/dm³ and g/cm³:</p>\n    <p>1 g/dm³ = 0.001 g/cm³</p>\n\n    <h3>Example 3.10 g/dm³</h3>\n    <p>A solution contains 20g of salt dissolved in 2 dm³ of solution. Calculate the strength of the solution.</p>\n    <p>Mass of solute = 20g</p>\n    <p>Volume of solution = 2 dm³</p>\n    <p>Strength of solution = 20g / 2 dm³ = 10 g/dm³</p>\n\n    <h3>Example 3.11 g/cm³</h3>\n    <p>A solution contains 25g of sugar dissolved in 500 cm³ of solution. Calculate the strength of the solution.</p>\n    <p>Mass of solute = 25g</p>\n    <p>Volume of solution = 500 cm³</p>\n    <p>Strength of solution = 25g / 500 cm³ = 0.05 g/cm³</p>\n\n    <h3>Example 3.12 Unit Conversion</h3>\n    <p>A solution has a strength of 50 g/dm³. Express this strength in g/cm³.</p>\n    <p>1 g/dm³ = 0.001 g/cm³</p>\n    <p>50 g/dm³ = 50 × 0.001 = 0.05 g/cm³</p>\n  ",
  "3.6.2 Problems Involving Interconversion of Molarity and Strength": "\n    <h2>3.6.2 Problems Involving Interconversion of Molarity and Strength</h2>\n\n    <h3>Example 3.13</h3>\n    <p>Converting the molarity of a solution into its concentration in g/dm³ and g/cm³.</p>\n    <p>A flask contains 0.25M NaOH solution. What mass of NaOH is present per dm³ of solution?</p>\n\n    <h3>Problem Solving Strategy</h3>\n    <p>Molarity means the number of moles per dm³ of solution. So, 0.25M NaOH means 0.25 moles of NaOH dissolved per dm³ of solution. You need to convert moles of solute to mass using molar mass.</p>\n\n    <h3>Solution</h3>\n    <p>Molarity = 0.25M</p>\n    <p>Moles of NaOH = 0.25</p>\n    <p>Volume of solution = 1 dm³</p>\n    <p>Molar mass of NaOH = 23 + 16 + 1 = 40g/mole</p>\n    <p>Mass of NaOH = 0.25 moles × 40g/mole = 10g</p>\n    <p>Thus, the solution contains 10g NaOH per dm³.</p>\n    <p>As 1 dm³ = 1000 cm³, the solution contains 10g of NaOH per 1000 cm³.</p>\n    <p>So, 1 cm³ of solution contains 10g/1000 = 0.01g NaOH.</p>\n    <p>Therefore concentration of solution is 0.01 g/cm³.</p>\n\n    <h3>Example 3.14</h3>\n    <p>Converting concentration in g/dm³ into molarity.</p>\n    <p>Potassium hydroxide KOH is used in the manufacturing of shaving creams, paints and varnish. An analyst makes up a solution by dissolving 5.6g of KOH in one dm³ of solution. Calculate the molarity of this solution.</p>\n\n    <h3>Solution</h3>\n    <p>Mass of KOH dissolved in one dm³ of solution = 5.6g</p>\n    <p>Molar mass of KOH = 39 + 16 + 1 = 56g/mol</p>\n    <p>Moles of KOH = 5.6 / 56 = 0.1 mol</p>\n    <p>Thus, the solution contains 0.1 moles of KOH in one dm³ of the solution, so the molarity of the solution is 0.1M.</p>\n\n    <h3>Concept Assessment Exercise 3.10</h3>\n    <ol>\n      <li>Sodium hydroxide solutions are used to neutralize acids and in the preparation of soaps and rayon. If you dissolve 25g of NaOH to make 1 dm³ of solution, what is the molarity of this solution?</li>\n      <li>A solution of NaOH has a concentration of 1.2M. Calculate the mass of NaOH in g/dm³ and g/cm³ in this solution.</li>\n      <li>A solution is prepared by dissolving 10g of haemoglobin in enough water to make up 1 dm³ in volume. Calculate molarity of this solution. Molar mass of haemoglobin is 6.51 × 10⁴ g/mol.</li>\n    </ol>\n  ",
  "3.6.3 Dilution of Solutions": "\n    <h2>3.6.3 Dilution of Solutions</h2>\n    <p>Dilution is a process by which you make a solution less concentrated by adding more of the liquid, usually water. Suppose you have a cup of strong lemonade. If you add more water, the lemonade becomes weaker or less strong. This means that dilution reduces the strength or concentration of a solution. By using the dilution formula, you can determine how much of a concentrated solution is to be mixed with water to get the desired concentration and volume.</p>\n    <p>To understand how to dilute a solution, we use a simple formula:</p>\n    <p><strong>M₁ × V₁ = M₂ × V₂</strong></p>\n    <p>where:</p>\n    <ul>\n      <li>M₁ is the concentration of the original concentrated solution.</li>\n      <li>V₁ is the volume of the original solution you use.</li>\n      <li>M₂ is the concentration you want after dilution.</li>\n      <li>V₂ is the total volume of the final solution.</li>\n    </ul>\n    <p>Plug the known values into the formula to find out how much of the concentrated solution you need. Mix the calculated amount of the concentrated solution with enough water to reach the final volume you want.</p>\n\n    <h3>Activity 3.1</h3>\n    <p>Prepare 250 cm³ solution of 0.1M from concentrated hydrochloric acid.</p>\n\n    <h3>Materials required</h3>\n    <ul>\n      <li>Conc. HCl</li>\n      <li>250 cm³ volumetric flask</li>\n      <li>Graduated pipette</li>\n      <li>Distilled water</li>\n    </ul>\n\n    <h3>Steps</h3>\n    <ul>\n      <li>Concentrated HCl is 12M. Using formula calculate the volume of conc. HCl required to be diluted to 250 cm³.</li>\n      <li>M₁ × V₁ = M₂ × V₂</li>\n      <li>12 × V₁ = 0.1M × 250</li>\n      <li>V₁ = 0.1 × 250 / 12 = 2.08 cm³</li>\n      <li>Transfer 2.08 cm³ of conc. HCl with the help of a graduated pipette into a 250 cm³ volumetric flask.</li>\n      <li>Add distilled water up to the mark and shake well.</li>\n      <li>This is required 0.1M HCl solution.</li>\n    </ul>\n\n    <h3>Example 3.15</h3>\n    <p>If you have 150 cm³ of a 4M potassium nitrate KNO₃ solution, what volume of this solution will be needed to prepare 500 cm³ of a 1M potassium nitrate solution?</p>\n\n    <h3>Solution</h3>\n    <p>The formula for dilution is:</p>\n    <p>M₁ × V₁ = M₂ × V₂</p>\n    <p>M₁ = 4M, M₂ = 1M, V₂ = 500 cm³</p>\n    <p>4M × V₁ = 1M × 500</p>\n    <p>V₁ = 1M × 500 cm³ / 4M = 125 cm³</p>\n    <p>To prepare 500 cm³ of a 1M potassium nitrate solution, you need to use 125 cm³ of the 4M potassium nitrate solution. Mix 125 cm³ of the 4M solution with enough water to make a total of 500 cm³ to achieve the desired concentration.</p>\n  ",
  "3.6.4 Calculating the concentration of a solution through titration": "\n    <h2>3.6.4 Calculating the concentration of a solution through titration</h2>\n\n    <h3>Activity 3.2</h3>\n    <p>To standardise the given solution of hydrochloric acid.</p>\n    <p><strong>Note:</strong> Perform this activity in the chemistry laboratory.</p>\n\n    <h3>You will need:</h3>\n    <ul>\n      <li>Burette, pipette, burette stand, beakers, conical flask, glass rod.</li>\n      <li>Standard 0.1M NaOH solution and phenolphthalein.</li>\n    </ul>\n\n    <h3>Chemical equation</h3>\n    <p><strong>HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)</strong></p>\n    <p>n₁ = 1 mole, n₂ = 1 mole</p>\n\n    <h3>Carry out the following</h3>\n    <ul>\n      <li>Fit up a clean burette in the burette stand vertically.</li>\n      <li>Fill the burette with HCl solution up to zero mark.</li>\n      <li>Take 10 cm³ of NaOH solution in a conical flask with the help of a pipette.</li>\n      <li>Add a few drops of phenolphthalein as an indicator.</li>\n      <li>Note the initial reading on the burette.</li>\n      <li>Run the acid solution in the conical flask drop by drop, and shake the flask constantly.</li>\n      <li>Go on adding the acid solution till the pink colour just disappears.</li>\n      <li>Note down the final reading from the burette.</li>\n      <li>The difference between the final and initial readings gives the volume of the acid used to neutralize 10.0 cm³ of NaOH solution.</li>\n      <li>Repeat the experiment to get three concordant readings.</li>\n      <li>Find the mean volume of the HCl solution used.</li>\n    </ul>\n\n    <h3>Observations and calculations</h3>\n    <p>Suppose the volume of HCl solution used = V₁ = 10 cm³</p>\n    <p>Molarity of HCl solution = M₁ = ?</p>\n    <p>Volume NaOH solution used = V₂ = 10 cm³</p>\n    <p>Molarity of NaOH solution = M₂ = 0.1M</p>\n    <p>No. of moles of HCl = n₁ = 1</p>\n    <p>No. of moles of NaOH = n₂ = 1</p>\n    <p>M₁ = 0.1M</p>\n    <p>Strength of HCl solution = molarity × molar mass</p>\n    <p>= 0.1 × 36.5 = 3.65 g/dm³</p>\n    <p><strong>Result:</strong> Molarity of HCl solution is 0.1M. Strength of HCl solution is 3.65 g/dm³.</p>\n\n    <h3>Concept Assessment Exercise 3.11</h3>\n    <ol>\n      <li>When 10 cm³ solution of NaOH solution is titrated against 9.8 cm³ of 0.1M HCl solution for complete neutralization, calculate the molarity of NaOH solution and the amount of NaOH present per cm³ of solution.</li>\n      <li>A chemist has a 200 cm³ solution of hydrochloric acid with a concentration of 6M. He wants to dilute it to a concentration of 2M. How much of the original solution should be mixed with water to achieve the desired concentration?</li>\n    </ol>\n  ",
  "Key Points": "\n    <h2>KEY POINTS</h2>\n    <ul>\n      <li>The study of relative amounts of the substances involved in the chemical reaction is known as stoichiometry.</li>\n      <li>The atomic mass, formula mass and molecular mass of a substance expressed in grams is called Mole.</li>\n      <li>A balanced chemical equation will tell you the ratio of the reactants/products to the mole.</li>\n      <li>The mole is the SI unit to express the amount of a substance.</li>\n      <li>The relative amounts of each element in a compound are expressed as the percentage composition.</li>\n      <li>A limiting reactant is the reactant that is completely consumed in a reaction.</li>\n      <li>Reactant in excess is the reactant left unutilized or unreacted after the reaction is complete. It is also referred to as a non-limiting reactant.</li>\n      <li>The amount of product a chemical reaction produces is known as the theoretical yield of a chemical equation.</li>\n      <li>The actual yield is the amount of product produced in the reaction.</li>\n      <li>Molarity is defined as the number of moles of solute dissolved per dm³ of solution.</li>\n    </ul>\n\n    <h3>References</h3>\n    <ul>\n      <li>James Brady and John R. Holum, Chemistry, The studies of matter and its changes.</li>\n      <li>Theodore L. Brown, H. Eugene LeMay Jr and Bruce E. Bursten, Chemistry, The Central Science.</li>\n      <li>Rose Marie Gallagher and Paul Ingram, Complete Chemistry.</li>\n    </ul>\n  ",
  "Exercise": "\n    <h2>EXERCISE</h2>\n\n    <h3>1. Multiple Choice Questions (MCQs)</h3>\n    <ol type=\"i\">\n      <li>What mass of CO₂ is produced by the combustion of each mol of CH₄? <strong>CH₄ + 2O₂ → CO₂ + 2H₂O</strong><br>a. 16g b. 44g c. 32g d. none</li>\n      <li>A flask contains 500 cm³ of SO₂ at RTP. The flask contains: a. 32g b. 2.4g c. 64g d. 1.33g</li>\n      <li>A necklace has 6g of diamond in it. How many carbon atoms are present in it? a. 1 b. 0.5 c. 1.5 d. 0.25</li>\n      <li>What is the mass of aluminium in 204g of aluminium oxide Al₂O₃? a. 26g b. 27g c. 54g d. 108g</li>\n      <li>The reactant which is consumed earlier and gives least quantity of product is called: a. Reactant in excess b. Stoichiometry c. Limiting reactant d. Stoichiometric amount</li>\n      <li>Which one of the following compounds contains the highest percentage by mass of nitrogen? a. NH₃ b. NH₄ c. NO d. NH₂OH</li>\n      <li>Vitamin A has a molecular formula of C₂₀H₃₀O. The number of moles of vitamin A in 500 mg of its capsule will be: a. 1.7 b. 1.7 × 10⁻³ c. 4.05 d. 3.01 × 10²³</li>\n      <li>When one mole of each of the following is completely burnt in oxygen, which will give the largest mass of CO₂? a. Carbon monoxide b. Diamond c. Ethane d. Methane</li>\n      <li>One mole of ethanol and one mole of ethane have an equal: a. Mass b. Number of atoms c. Number of electrons d. Number of molecules</li>\n      <li>How many moles of oxygen are needed for the complete combustion of two moles of butane, C₄H₁₀? <strong>2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O</strong> a. 12 mol b. 13 mol c. 4 mol d. 10 mol</li>\n    </ol>\n\n    <h3>2. Short questions</h3>\n    <ol type=\"i\">\n      <li>Analysis of a compound used in photography indicated the following chemical composition: 65.45% C, 5.45% H, and 29.09% O. Its molar mass is 110 g/mol. Determine its molecular formula.</li>\n      <li>How many moles of HCl will be produced when 125g of AlCl₃ are reacted with excess of water? <strong>2AlCl₃ + 3H₂O → Al₂O₃ + 6HCl</strong></li>\n      <li>How many moles of oxygen are needed to produce 1.0g of calcium nitrate?</li>\n      <li>Calculate the limiting reactant when Al₂S₃ is produced by the reaction of 25g of each reactant. <strong>2Al + 3S → Al₂S₃</strong></li>\n      <li>Calculate the empirical and molecular formulas of a compound from the following data.</li>\n      <li>20.2% Sodium, 37.6% Sulphur, 42.2% Oxygen, Molar Mass: 682.8 g/mol.</li>\n      <li>For the reaction <strong>CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O</strong>, 68.1g solid CaCO₃ is mixed with 51.6g HCl. Which one will be the limiting reactant?</li>\n      <li>Copper(II) sulphate is prepared by the reaction of dilute sulphuric acid on copper(II) oxide. A student prepared 1.85g of copper(II) sulphate. If its theoretical yield is 2.5g, calculate its percentage yield. <strong>CuO + H₂SO₄ → CuSO₄ + H₂O</strong></li>\n      <li>In an experiment some amount of limestone was heated, and only 24 dm³ of carbon dioxide was produced at room temperature and pressure. What mass of limestone was heated?</li>\n      <li>For the reaction of C₂H₄ with O₂ to form CO₂ and H₂O, what number of moles of CO₂ can be produced by the reaction of 0.480 mol of C₂H₄ and 1.08 mol of O₂?</li>\n      <li>Which reactant will be left un-reacted?</li>\n      <li>Given 48g of methane CH₄ and excess oxygen, calculate the volume of carbon dioxide gas produced at room temperature and pressure.</li>\n      <li>Calculate the empirical formula of a compound that contains 40% carbon, 6.7% hydrogen, and 53.3% oxygen by mass.</li>\n      <li>A solution is prepared by dissolving 10.0g of sodium chloride in water to make a total volume of 500 cm³. Calculate the concentration of the solution in g/dm³ and mol/dm³.</li>\n      <li>In a titration, 25.0 cm³ of a 0.10 mol/dm³ NaOH solution neutralized 20.0 cm³ of an HCl solution. Calculate the concentration of the HCl solution in mol/dm³.</li>\n      <li>A student is required to prepare a 0.5 mol/dm³ NaCl solution for an experiment. Define concentration in the context of this solution. Calculate the mass of NaCl needed to prepare 250 cm³ of the solution. Convert the concentration of the prepared solution to g/dm³. Propose a step-by-step procedure to accurately prepare this solution.</li>\n    </ol>\n  ",
  "Think Tank": "\n    <h2>THINK TANK</h2>\n    <ol>\n      <li>Critically assess why the percentage yield in a reaction is rarely 100% and discuss the factors that might contribute to a lower yield.</li>\n      <li>A solution has a concentration of 0.5 mol/dm³. Propose a method to double this concentration without changing the volume of the solution.</li>\n      <li>Calculate the percentage purity of a sample of sodium carbonate Na₂CO₃ if 1.00g of the sample requires 25.0 cm³ of 0.1 mol/dm³ hydrochloric acid for complete reaction. <strong>Na₂CO₃ + 2HCl → 2NaCl + CO₂ + H₂O</strong></li>\n      <li>If a solution has a concentration of 2 mol/dm³, what is its concentration in g/dm³ if the solute is H₂SO₄? Answer: 196 g/dm³.</li>\n      <li>Design a method to determine the concentration of acetic acid in vinegar using titration.</li>\n    </ol>\n  "
};

CHEMISTRY_DIGITAL_BOOK["Electrochemistry"] = {
  "Student Learning Outcomes (SLOs)": "\n    <h2>Student Learning Outcomes (SLOs)</h2>\n    <ul>\n      <li>Define electrolysis as decomposition of ionic compounds, in molten state or aqueous solution, by passage of electric current.</li>\n      <li>Identify and label in simple electrolytic cells, the anode (+), cathode (-), electrolyte and direction of flow of electrons in the external circuit.</li>\n      <li>Describe the transfer of charge in external circuit, movement of ions in the electrolyte and transfer of electrons in the electrodes.</li>\n      <li>Identify the products formed at electrodes and describe the observations made during the electrolysis of molten lead(II) chloride, concentrated aqueous sodium chloride, dilute sulphuric acid using inert electrodes, platinum or carbon / graphite.</li>\n      <li>State that hydrogen-oxygen fuel cell uses hydrogen and oxygen to produce water as the only chemical product.</li>\n      <li>Describe the advantages and disadvantages of using hydrogen-oxygen fuel cells in comparison with gasoline/petrol engines in vehicles.</li>\n      <li>Identify the products formed at electrodes and describe the observations made during the electrolysis of dilute Copper(II) sulphate using an inert electrode or copper electrode.</li>\n      <li>Predict the identity of products of electrolysis of a halide compound in dilute or concentrated solution.</li>\n      <li>Construct ionic half-equations for reaction at either electrode.</li>\n      <li>Describe electroplating and its applications.</li>\n      <li>Sketch a schematic diagram for a voltaic cell e.g. Daniel cell.</li>\n      <li>Use the voltage data given for the voltaic cell to determine the order of reactivity of any two metals.</li>\n    </ul>\n  ",
  "Introduction to Electrochemistry": "\n    <h2>Electrochemistry</h2>\n    <p>Electrochemistry is the study and application of the fundamental principles of electrochemical reactions. Electrochemical processes include electrolysis, electroplating, and voltage cells. Electrochemistry principles include understanding the role of anode and cathode, the movement of electrons in an external circuit, and the migration of ions in an electrolyte.</p>\n    <p>In this chapter, we will explore electroplating and electrolysis principles. We also look at the potential advantages of a hydrogen and oxygen fuel cell over a traditional fuel engine. Finally, we will discuss the importance of the voltaic cell, the Daniel cell, and the role of metals in determining reactivity.</p>\n  ",
  "4.1 Electrochemical cells": "\n    <h2>4.1 Electrochemical cells</h2>\n    <p>Devices that convert chemical energy into electrical energy or vice versa are called electrochemical cells. Therefore, there are two types of electrochemical cells:</p>\n    <ol>\n      <li>Electrolytic Cells</li>\n      <li>Galvanic Cells</li>\n    </ol>\n    <p>An electrochemical cell that uses electrical energy to drive a chemical reaction is called an electrolytic cell. An electrochemical cell that converts chemical energy into electricity is called a galvanic cell.</p>\n  ",
  "4.1.1 Nature of Electrochemical Process": "\n    <h2>4.1.1 Nature of Electrochemical Process</h2>\n    <p>Electrochemical processes are oxidation-reduction reactions in which chemical energy released by a spontaneous reaction is converted to electricity or in which electrical energy is used to drive a non-spontaneous reaction.</p>\n    <p>Whether an electrochemical process releases or requires energy, it always involves the transfer of electrons from one substance to another. This means that this process always involves an oxidation-reduction or a redox reaction.</p>\n\n    <h3>Science Tidbit</h3>\n    <p>A physical or chemical change that occurs by itself is called a spontaneous change. It does not require energy to make it happen. For instance, water flows from a higher level to a lower level by itself.</p>\n    <p>A physical or chemical change that requires a source of energy to make it happen is called a non-spontaneous change. For example, water can be forced to flow from a lower level to a higher level by using a pump.</p>\n  ",
  "4.1.2 Concept of Electrolytes and Electrolysis": "\n    <h2>4.1.2 Concept of Electrolytes and Electrolysis</h2>\n    <p>When an ionic compound is dissolved in water, it splits up into its positive and negative ions. These ions are capable of conducting electricity. Such compounds are referred to as electrolytes.</p>\n    <p>Substances that can conduct electricity when they are in a molten state or aqueous solution and undergo chemical changes are electrolytes. Whereas, a substance that cannot conduct electricity when dissolved in water or in the molten state is called a non-electrolyte.</p>\n    <p>Examples of electrolytes are NaCl, KCl, HCl, NaOH, etc.</p>\n    <p>Examples of non-electrolytes are urea, glucose, sucrose, benzene etc.</p>\n  ",
  "4.1.3 Electrolytic Cells": "\n    <h2>4.1.3 Electrolytic Cells</h2>\n    <p>An electrochemical cell in which electrical energy is used to drive a chemical reaction is called an electrolytic cell.</p>\n    <p>An electrolytic cell consists of:</p>\n    <ol type=\"a\">\n      <li>A vessel containing an electrolyte (MX)</li>\n      <li>Two inert electrodes</li>\n      <li>A battery</li>\n    </ol>\n    <p>Electrons move from anode to cathode in the outer circuit. In the solution, the cations move towards the cathode and anions towards anode. At the anode, anions oxidize by losing electrons. At the cathode, cations reduce by gaining electrons. This means oxidation occurs at the anode and reduction at the cathode.</p>\n    <p>The electrons released by anions at the anode move in the external circuit towards the cathode. This means the movement of ions in the electrolyte and the transfer of electrons occur at electrodes in the external circuit.</p>\n    <p><strong>At Anode:</strong> X⁻ → X + e⁻</p>\n    <p><strong>At Cathode:</strong> M⁺ + e⁻ → M</p>\n\n    <h3>Concept Assessment Exercise 4.1</h3>\n    <ol>\n      <li>Sketch an electrolytic cell for the electrolysis of fused KCl.</li>\n      <li>Sketch a simple representation of electrolytic cell for the electrolysis of fused sodium chloride. Indicate the direction of the flow of electrons. Identify anode and cathode.</li>\n    </ol>\n  ",
  "4.2 Electrolysis": "\n    <h2>4.2 Electrolysis</h2>\n    <p>Electrolysis is the chemical process in which an electric current is passed through an electrolyte, either in its molten state or as an aqueous solution, causing a non-spontaneous redox reaction to occur.</p>\n    <p>This process involves the movement of ions towards oppositely charged electrodes, where oxidation occurs at the anode and reduction occurs at the cathode. This process leads to the decomposition of the electrolyte or its components into simpler substances or elements.</p>\n  ",
  "4.2.1 Electrolysis of molten electrolyte": "\n    <h2>4.2.1 Electrolysis of molten electrolyte</h2>\n\n    <h3>(i) Electrolysis of Molten Sodium chloride</h3>\n    <p>On a large scale, sodium metal is produced by the electrolysis of fused sodium chloride. The electrolytic cell used in the process is called a Down's Cell. Down's Cell uses an iron cathode and carbon anode.</p>\n    <p>During the electrolysis, the sodium ions are reduced at the cathode to liquid sodium metal. At the anode, the chloride ions are oxidized to chlorine gas.</p>\n    <p><strong>At anode:</strong> 2Cl⁻ → Cl₂ + 2e⁻ oxidation half-reaction</p>\n    <p><strong>At cathode:</strong> 2Na⁺ + 2e⁻ → 2Na reduction half-reaction</p>\n\n    <h3>(ii) Electrolysis of molten lead(II) chloride using platinum or graphite electrodes</h3>\n    <p>On a large scale, lead metal is produced by the electrolysis of molten or fused lead(II) chloride. An electrolytic cell is used for this purpose. Molten lead chloride is placed in the electrolytic tank and platinum, or graphite electrodes are dipped in it. The electrolysis is conducted above 327°C, which is the melting point of lead chloride.</p>\n    <p>Molten lead chloride contains free lead ions and chloride ions. During electrolysis, chloride ions move towards the anode and lead ions towards the cathode.</p>\n    <p><strong>At anode:</strong> 2Cl⁻ → Cl₂ + 2e⁻ oxidation half-reaction</p>\n    <p><strong>At cathode:</strong> Pb²⁺ + 2e⁻ → Pb reduction half-reaction</p>\n    <p>Molten lead is collected at the bottom of the cathode and chlorine gas at the anode.</p>\n  ",
  "4.2.2 Electrolysis of concentrated aqueous solution": "\n    <h2>4.2.2 Electrolysis of concentrated aqueous solution</h2>\n    <p>Electrolysis of a concentrated aqueous solution of sodium chloride called brine is used for the industrial production of sodium hydroxide. Electrolysis is carried out by using inert electrodes such as platinum, or carbon graphite.</p>\n    <p>The brine contains sodium ions and chloride ions from NaCl and hydrogen ions and hydroxide ions from water.</p>\n    <p>During electrolysis, chloride ions move towards the anode. At anode chloride ions are oxidized to produce chlorine gas. Sodium ions move towards the cathode. However, sodium ions are not reduced to sodium metals in this process. Instead, hydrogen ions from water are discharged to produce hydrogen gas.</p>\n    <p>More and more water molecules keep ionizing to replace H⁺ ions as soon as they are consumed. The electrolyte in the solution becomes sodium hydroxide.</p>\n    <p><strong>At anode:</strong> 2Cl⁻ → Cl₂ + 2e⁻</p>\n    <p><strong>At cathode:</strong> 2H⁺ + 2e⁻ → H₂</p>\n    <p>The solution contains Na⁺ and OH⁻ ions. Evaporation of water from this solution produces pure solid sodium hydroxide.</p>\n  ",
  "4.2.3 Electrolysis of dilute aqueous solution": "\n    <h2>4.2.3 Electrolysis of dilute aqueous solution</h2>\n\n    <h3>a. Electrolysis of dilute aqueous Sodium chloride using platinum electrodes</h3>\n    <p>Unlike electrolysis of concentrated aqueous sodium chloride, chloride ions are not oxidized at the anode. Instead, hydroxide ions are oxidized and oxygen gas is produced at the anode. Reaction at the cathode remains the same. And hydrogen is produced at the cathode.</p>\n    <p><strong>At cathode:</strong> 4H⁺ + 4e⁻ → 2H₂</p>\n    <p><strong>At anode:</strong> 4OH⁻ → 2H₂O + O₂ + 4e⁻</p>\n\n    <h3>b. Electrolysis of dilute sulphuric acid using platinum electrodes</h3>\n    <p>In an aqueous solution, sulphuric acid ionizes to form hydrogen ions and sulphate ions. Autoionization of water gives hydrogen ions and hydroxide ions.</p>\n    <p><strong>H₂SO₄(aq) → 2H⁺(aq) + SO₄²⁻(aq)</strong></p>\n    <p><strong>H₂O(l) ⇌ H⁺(aq) + OH⁻(aq)</strong></p>\n    <p>During electrolysis, hydrogen ions move towards the cathode and are reduced to form hydrogen. Whereas hydroxyl ions and sulphate ions move towards the anode. At the anode, hydroxyl ions are oxidized and sulphate ions remain unchanged.</p>\n    <p><strong>At cathode:</strong> 4H⁺ + 4e⁻ → 2H₂</p>\n    <p><strong>At anode:</strong> 4OH⁻ → 2H₂O + O₂ + 4e⁻</p>\n    <p>Therefore, in the electrolysis of dilute aqueous H₂SO₄ using a platinum electrode, hydrogen gas is produced at the cathode and oxygen gas at the anode.</p>\n\n    <h3>c. Electrolysis of copper(II) sulphate using platinum electrodes</h3>\n    <p>The aqueous solution of copper sulphate contains copper ions and sulphate ions from copper(II) sulphate and hydrogen ions and hydroxide ions from water. During electrolysis copper ions and hydrogen ions are attracted towards the cathode. At the cathode, only copper ions are reduced and hydrogen ions remain unchanged.</p>\n    <p>The sulphate ions and hydroxide ions are attracted towards the anode. At the anode, only hydroxide ions are oxidized and sulphate ions remain unchanged.</p>\n    <p><strong>At cathode:</strong> 2Cu²⁺ + 4e⁻ → 2Cu</p>\n    <p><strong>At anode:</strong> 4OH⁻ → 2H₂O + O₂ + 4e⁻</p>\n    <p>Therefore, in the electrolysis of aqueous copper(II) sulphate using a platinum electrode, copper metal is produced at the cathode and oxygen gas at the anode. The blue colour of the copper sulphate solution gradually fades away as the reaction goes on.</p>\n\n    <h3>d. Electrolysis of copper(II) sulphate using copper electrodes</h3>\n    <p>If you use copper electrodes rather than platinum, the cathode reaction remains the same but the anode reaction differs. At anode, copper atoms break away from the electrode forming Cu²⁺ ions giving up electrons to the anode. These electrons are moved towards the cathode by the power source.</p>\n    <p><strong>At cathode:</strong> Cu²⁺ + 2e⁻ → Cu</p>\n    <p><strong>At anode:</strong> Cu → Cu²⁺ + 2e⁻</p>\n    <p>During electrolysis copper anode is consumed gradually and the copper cathode gains mass due to the deposition of pure copper on it.</p>\n    <p>The copper metal obtained from its ores is usually impure. It contains impurities such as zinc, iron, silver and gold. These impurities are removed by the process of electrolysis.</p>\n    <p>In this process, impure copper bars act as anode and pure copper bars as cathode. CuSO₄ solution containing little sulphuric acid is used as the electrolyte. On passing electricity, copper anode dissolves forming Cu²⁺ ions. Cations move towards the cathode at which only Cu²⁺ ions are reduced. Thus pure copper deposits at the cathode. The less electropositive metals, silver and gold fall to the bottom of the cell. Copper obtained in this process is 99.5% pure.</p>\n  ",
  "4.3 Electrolysis of halide compound": "\n    <h2>4.3 Electrolysis of halide compound</h2>\n    <p>During the electrolysis of a halide compound, a compound containing halogen ions like chloride, bromide, or iodide, the products depend on whether the solution is dilute or concentrated.</p>\n\n    <h3>1. Electrolysis of Dilute Halide Solution</h3>\n    <p><strong>At the Anode positive electrode:</strong> Oxygen gas is usually produced because water breaks down into oxygen and hydrogen ions. This happens because the water molecules compete with the halide ions for discharge.</p>\n    <p><strong>At the Cathode negative electrode:</strong> Hydrogen gas is produced as water molecules are reduced to form hydrogen gas and hydroxide ions.</p>\n    <p><strong>Example:</strong> If you electrolyse a dilute sodium chloride solution, the products are:</p>\n    <ul>\n      <li>Anode: Oxygen gas O₂</li>\n      <li>Cathode: Hydrogen gas H₂</li>\n    </ul>\n\n    <h3>2. Electrolysis of Concentrated Halide Solution</h3>\n    <p><strong>At the Anode:</strong> The halogen, chlorine, bromine, or iodine, is produced because there are many halide ions, so they are discharged instead of water.</p>\n    <p><strong>At the Cathode:</strong> Hydrogen gas is still produced because water is reduced.</p>\n    <p><strong>Example:</strong> If you electrolyse concentrated sodium chloride solution, the products are:</p>\n    <ul>\n      <li>Anode: Chlorine gas Cl₂</li>\n      <li>Cathode: Hydrogen gas H₂</li>\n    </ul>\n\n    <h3>Key Rule to Remember</h3>\n    <ul>\n      <li>Dilute Solution: Oxygen at the anode.</li>\n      <li>Concentrated Solution: Halogen at the anode.</li>\n      <li>The cathode always produces hydrogen gas in both cases.</li>\n    </ul>\n  ",
  "4.4 Electroplating": "\n    <h2>4.4 Electroplating</h2>\n    <p>The electrolytic process used to deposit one metal on another metal is called electroplating. An object can be electroplated by making it cathode in an electrolytic tank containing ions of the plating metal. The plating metal is made anode. On passing electricity through the electrolytic tanks, a thin layer of anode metal is deposited on the surface of the object.</p>\n  ",
  "4.4.1 Applications of Electroplating": "\n    <h2>4.4.1 Applications of Electroplating</h2>\n    <p>Steel objects are often protected from corrosion by electroplating with zinc, tin and chromium.</p>\n\n    <h3>Zinc Plating</h3>\n    <p>Zinc plating on steel is done by using zinc metal as anode. A solution of potassium zinc cyanide K₂[Zn(CN)₄] containing little sodium cyanide is used as an electrolyte. The steel object is made of cathode.</p>\n    <p>During the electrolysis zinc at the anode enters the solution as Zn²⁺ ions, which are deposited at the cathode.</p>\n    <p><strong>At anode:</strong> Zn → Zn²⁺ + 2e⁻</p>\n    <p><strong>At cathode:</strong> Zn²⁺ + 2e⁻ → Zn</p>\n\n    <h3>Awareness against pollution</h3>\n    <p>Cyanide ions are extremely toxic. Therefore, a solution containing cyanide ions must not be dropped into rivers and streams. This is responsible for killing fish and other animals.</p>\n\n    <h3>Society, Technology and Science</h3>\n    <p>Tin-plated steel is used to make cans. Food and beverages industries use tin-plated steel cans, this is because the components of food beverages and preservatives contain organic acids or their salts. They may form toxic substances by reacting with iron. These acids and salts are corrosive. Tin plating is non-poisonous and prevents corrosion.</p>\n\n    <h3>Tin Plating</h3>\n    <p>Food cans are generally tin-plated. Tin plating on steel is done by using tin as an anode and a solution of stannous sulphate, SnSO₄, as electrolyte. A few drops of dilute H₂SO₄ are added to the electrolyte to prevent its hydrolysis.</p>\n    <p><strong>At anode:</strong> Sn → Sn²⁺ + 2e⁻</p>\n    <p><strong>At cathode:</strong> Sn²⁺ + 2e⁻ → Sn</p>\n\n    <h3>Chromium Plating</h3>\n    <p>Since chromium metal does not adhere strongly to the steel therefore steel is first plated with copper or nickel and then with chromium. For electroplating chromium, chromium metal is used as an anode and chromium sulphate, Cr₂(SO₄)₃, as an electrolyte. A few drops of dilute H₂SO₄ are added to the electrolyte to prevent its hydrolysis.</p>\n    <p><strong>At anode:</strong> Cr → Cr³⁺ + 3e⁻</p>\n    <p><strong>At cathode:</strong> Cr³⁺ + 3e⁻ → Cr</p>\n    <p>Chromium-plated steel is used to make automobile parts.</p>\n  ",
  "4.5 Galvanic Cells (Daniel Cells)": "\n    <h2>4.5 Galvanic Cells (Daniel Cells)</h2>\n    <p>The cell which involves a spontaneous redox reaction to generate electricity is called a galvanic or voltaic cell. The name Voltaic is given to this cell because Alessandro Volta discovered the first such cell.</p>\n    <p>The English chemist Fredrick Daniel constructed the first voltaic cell using zinc Zn and copper Cu electrodes. Therefore this cell is named Daniel Cell.</p>\n\n    <p>A galvanic cell consists of the following parts:</p>\n    <ol>\n      <li>A zinc bar dipped into a 1M ZnSO₄ solution.</li>\n      <li>A copper bar dipped into a 1M CuSO₄ solution.</li>\n      <li>A salt bridge is an inverted U tube containing an inert electrolyte such as KCl. Its ions do not react with the electrodes or the ions in the solution. It makes the electrical contact between the solutions through which ions can move.</li>\n      <li>A voltmeter to measure current.</li>\n    </ol>\n\n    <p>Each part of the cell is called a half-cell. Thus a Daniel cell consists of two half-cells joined in series. When the circuit is complete, electrons begin to flow from the Zn rod through the external wires to the Cu rod. Thus Zn half-cell acts as an anode and the Cu half-cell acts as a cathode. A half cell consists of a metal rod dipped in the solution of its ions.</p>\n\n    <h3>Concept Assessment Exercise 4.2</h3>\n    <p>Sketch a voltaic cell labeling the cathode, the anode and the direction of flow of electrons. Use the following chemicals: Silver, Zinc, Silver Nitrate and zinc sulphate ZnSO₄.</p>\n    <p>Hint: Zn is more active than Ag.</p>\n  ",
  "4.5.1 Reactions in a Daniel Cell": "\n    <h2>4.5.1 Reactions in a Daniel Cell</h2>\n    <p>In Daniel's cell, electrons flow from the Zn rod, through the external wire to the Cu rod. This is because Zn has more tendency to undergo oxidation than Cu. Zn atoms from the rod go into the solution as Zn²⁺ ions leaving electrons on the rod. These electrons flow in the external circuit. Thus oxidation half reaction occurs at the anode compartment.</p>\n    <p>Cu²⁺ ions in copper sulphate solution capture electrons from the Cu electrode and are reduced. Reduction half reduction occurs at the cathode compartment. Such oxidation and reduction reactions are called half-cell reactions.</p>\n    <p><strong>At Anode Oxidation half reaction:</strong> Zn → Zn²⁺ + 2e⁻</p>\n    <p><strong>At Cathode Reduction half-reaction:</strong> Cu²⁺ + 2e⁻ → Cu</p>\n  ",
  "4.6 Electrochemical Series": "\n    <h2>4.6 Electrochemical Series</h2>\n    <p>The tendency of a metal to become oxidized or reduced, when placed in its salt solution is called electrode potential E°. Electrode potential is the measure of the potential of a reaction that can occur at the electrode. It is measured in volts.</p>\n    <p>The electrode potential of an electrode is determined experimentally by using a standard hydrogen electrode. The International Union of Pure and Applied Chemistry IUPAC has recommended the representation of electrode potential as reduction potentials. A table showing the arrangement of metals based on increasing reduction potentials is called an electrochemical series.</p>\n    <p>A metal higher in the series has a lower value of reduction potential than the metal below it in the series. So, it has a higher tendency to lose electrons and is more active than the metals below it. In a voltaic cell electrode with the lower value of reduction potential acts as anode and the electrode having a higher reduction potential act as a cathode.</p>\n\n    <h3>Example</h3>\n    <p>Electrochemical series helps us predict which substances will form at the electrodes during electrolysis.</p>\n\n    <h3>At the Cathode Negative Electrode</h3>\n    <p>At the cathode positive ions, cations, gain electrons and reduction happens. The ion lower in the electrochemical series, less reactive, is more likely to get reduced.</p>\n    <p>Example: If the solution contains sodium ions Na⁺ and hydrogen ions H⁺, hydrogen gas H₂ forms because hydrogen is lower in the series than sodium.</p>\n\n    <h3>At the Anode Positive Electrode</h3>\n    <p>At the anode negative ions, anions, lose electrons and oxidation happens. Halide ions Cl⁻, Br⁻, I⁻ are discharged before hydroxide OH⁻ unless halides are absent.</p>\n    <p>For example, in a concentrated solution of sodium chloride, chloride ions Cl⁻ are discharged, producing chlorine gas Cl₂ because chlorine is lower in the series than water.</p>\n    <p>However, in the electrolysis of dilute aqueous NaCl, OH⁻ ions are discharged instead of Cl⁻ ions, even though Cl⁻ ions are lower in the electrochemical series.</p>\n\n    <h3>Concentration Effect</h3>\n    <p>The discharge of ions during electrolysis is influenced not only by their position in the electrochemical series but also by their concentration. In dilute aqueous NaCl, the concentration of Cl⁻ ions is relatively low compared OH⁻ ions, which are present in larger amounts due to the ionization of water.</p>\n\n    <h3>Overpotential of Chlorine Gas</h3>\n    <p>The overpotential, extra voltage required, for the oxidation of Cl⁻ ions to chlorine gas is higher than that for the oxidation of OH⁻ ions to oxygen gas. This makes it energetically less favourable to discharge Cl⁻ ions.</p>\n\n    <h3>Concept Assessment Exercise 4.3</h3>\n    <ol>\n      <li>Which of the following metals is more likely to undergo reduction? Al³⁺ + 3e⁻ → Al, E° = -1.66V; Fe²⁺ + 2e⁻ → Fe, E° = -0.44V.</li>\n      <li>Arrange the following metals in order of increasing ability to get reduced: Na⁺ + e⁻ → Na, E° = -2.71V; Zn²⁺ + 2e⁻ → Zn, E° = -0.76V; Cu²⁺ + 2e⁻ → Cu, E° = +0.34V.</li>\n      <li>Identify the half-cell in which oxidation occurs and the half-cell in which reduction occurs in the given voltaic cell.</li>\n    </ol>\n  ",
  "4.7 Battery-A Source of Electrical Energy": "\n    <h2>4.7 Battery-A Source of Electrical Energy</h2>\n    <p>A battery is a galvanic cell, or a group of galvanic cells joined in series. It generates electric current by a redox reaction. When connected in a circuit its anode is oxidised by releasing electrons. These electrons through the external circuit begin to flow towards the cathode. At the cathode, these electrons reduce the oxidizing agent present in the electrolyte.</p>\n    <p>Examples of batteries are dry cells, storage cells, mercury batteries etc.</p>\n  ",
  "Fuel Cell": "\n    <h2>Fuel Cell</h2>\n    <p>A fuel cell is a special type of galvanic cell which is based upon the reaction between oxygen and a gaseous fuel hydrogen. When hydrogen burns in air, an exothermic reaction occurs and a lot of chemical energy is released in the form of heat and light. In this reaction, hydrogen is oxidized to water.</p>\n    <p><strong>2H₂ + O₂ → 2H₂O + heat</strong></p>\n    <p>The energy released from the reaction of hydrogen with oxygen to form water is converted to electrical energy.</p>\n    <p>A hydrogen-oxygen fuel cell has three compartments separated from one another by porous carbon electrodes. These electrodes contain platinum as a catalyst. The middle compartment contains a hot aqueous solution of KOH. Hydrogen gas is passed through the anode compartment and oxygen is passed through the cathode compartment.</p>\n    <p>At the anode, hydrogen is oxidized to water and at the cathode oxygen is reduced to hydroxide ions.</p>\n    <p><strong>Anode reaction:</strong> 2H₂ + 4OH⁻ → 4H₂O + 4e⁻</p>\n    <p><strong>Cathode reaction:</strong> O₂ + 2H₂O + 4e⁻ → 4OH⁻</p>\n    <p><strong>Net cell reaction:</strong> 2H₂ + O₂ → 2H₂O</p>\n    <p>The electrons released in the oxidation of hydrogen flow through the circuit towards the cathode. A hydrogen-oxygen cell delivers 0.9 V. The fuel cell operates at high temperatures so the water formed evaporates and may be condensed.</p>\n    <p>The fuel cells of this kind have been used by the American space program. The water condensed in spacecraft is consumed by the astronauts.</p>\n  ",
  "4.7.1 Advantages and disadvantages of fuel cells": "\n    <h2>4.7.1 Advantages and disadvantages of fuel cells</h2>\n    <p>Hydrogen-oxygen fuel cells are highly efficient since they convert fuel directly into electricity with very little waste. Fuel cells are a source of clean energy, as they do not produce harmful pollutants. They emit water vapour only.</p>\n    <p>Moreover, fuel cells are highly reliable, as they have no moving parts. They also have a long life span with little maintenance. Hydrogen-oxygen used in fuel cells is obtained from renewable energy sources.</p>\n    <p>Unlike fuel cells, gasoline-powered combustion engines in vehicles emit pollutants, including carbon dioxide, oxides of nitrogen and sulphur, which cause pollution and create smog. These pollutants cause respiratory problems and other health issues. Moreover, gasoline is obtained from non-renewable sources of energy.</p>\n    <p>Fuel cells have a few disadvantages. Hydrogen is highly inflammable and explosive in nature. It requires careful handling for storage and use. So, it cannot be transported easily from one place to another. Hydrogen used in fuel cells is produced by electrolysis of water which is very expensive.</p>\n  ",
  "Key Points": "\n    <h2>KEY POINTS</h2>\n    <ul>\n      <li>An electrochemical cell in which electrical energy is used to drive a chemical reaction is called an electrolytic cell.</li>\n      <li>Oxidation always occurs at the anode. Reduction always occurs at the cathode.</li>\n      <li>An electrochemical cell in which a spontaneous oxidation-reduction reaction generates electricity is called a galvanic or voltaic cell.</li>\n      <li>In a galvanic cell oxidation half-reaction occurs in the anode compartment and reduction half-reaction occurs in the cathode compartment.</li>\n      <li>A battery is a galvanic cell, or a group of galvanic cells joined in series.</li>\n      <li>Electrolysis of brine is used for the industrial production of sodium hydroxide.</li>\n      <li>Electrolytic process used to deposit one metal on another metal is called electroplating.</li>\n      <li>A fuel cell is a special type of galvanic cell which is based upon the reaction between oxygen and gaseous fuel hydrogen.</li>\n      <li>A table showing the arrangement of metals based on increasing reduction potentials is called an electrochemical series.</li>\n    </ul>\n\n    <h3>References</h3>\n    <ul>\n      <li>B. Earl and L. D. R. Wilford, Further Advanced Chemistry.</li>\n      <li>B. Earl and L. D. R. Wilford, Introduction to Advanced Chemistry.</li>\n    </ul>\n  ",
  "Exercise": "\n    <h2>EXERCISE</h2>\n\n    <h3>1. Multiple Choice Questions (MCQs)</h3>\n    <ol type=\"i\">\n      <li>Which of the following statements is not correct about the galvanic cell?<br>a) Cations are reduced at the cathode<br>b) Anions are oxidized at the anode<br>c) Electrons flow from cathode to anode<br>d) Oxidation occurs at the anode</li>\n      <li>Which of the following is not true about the Daniel cell?<br>a) Half-cell of an active metal acts as a cathode.<br>b) Half-cell contains an element in contact with its ions in aqueous solution.<br>c) A salt bridge connects the two half-cells.<br>d) A spontaneous oxidation-reduction reaction generates electricity.</li>\n      <li>Which of the following does not involve an electrolytic process?<br>a) Refining of copper<br>b) Manufacture of sodium from NaCl<br>c) Electroplating of steel<br>d) Reduction of metal oxide by a reducing agent.</li>\n      <li>Galvanizing is:<br>a) Coating with Sn<br>b) Coating with Zn<br>c) Coating with Cr<br>d) Coating with Cu</li>\n      <li>Which of the following is true for the Nelson cell?<br>a) Sodium metal is produced at the anode<br>b) Chlorine gas is produced at anode<br>c) Hydrogen gas is produced at the anode<br>d) Sodium ions are not reduced at the cathode</li>\n      <li>Electroplating involves:<br>a) Using an electrolyte to oxidize a metal.<br>b) Coating a metal object with a thin layer of metal through electrolysis.<br>c) Melting a metal object to form a thin coating.<br>d) Using heat to form a layer of metal on another metal object.</li>\n      <li>In a voltaic cell, the salt bridge serves the function of:<br>a) Preventing electrons from flowing in the external circuit.<br>b) Maintaining electrical neutrality by allowing ion movement.<br>c) Storing excess energy from the cell.<br>d) Generating additional voltage for the cell.</li>\n      <li>If the voltage data shows metal A has a higher standard reduction potential than metal B, it can be concluded that:<br>a) Metal A is more reactive than metal B.<br>b) Metal B is more reactive than metal A.<br>c) Metal A and metal B have the same reactivity.<br>d) Metal A is less likely to gain electrons than metal B.</li>\n    </ol>\n\n    <h3>2. Short questions</h3>\n    <ol type=\"i\">\n      <li>What is a fuel cell?</li>\n      <li>Write chemical reactions that occur in Nelson's cell.</li>\n      <li>Why tin-plated steel is used to make food cans?</li>\n      <li>Explain one example from daily life which involves an oxidation-reduction reaction.</li>\n      <li>Define electrochemical series.</li>\n      <li>Why does chlorine gas form at the anode during the electrolysis of molten lead(II) chloride?</li>\n      <li>How do hydrogen-oxygen fuel cells benefit the environment compared to gasoline engines?</li>\n      <li>Sketch a Daniel cell with labelled components and indicate the direction of electron flow.</li>\n    </ol>\n\n    <h3>3. Long questions</h3>\n    <ol type=\"i\">\n      <li>Define oxidation and reduction in terms of loss or gain of oxygen or hydrogen.</li>\n      <li>Sketch a Daniel Cell, labelling the cathode, anode, and the direction of flow of the electrons.</li>\n      <li>Describe the method of recovering metal from lead(II) chloride.</li>\n      <li>Construct ionic half-equations for reaction at electrodes in the electrolysis of copper(II) sulphate in the presence of copper electrodes.</li>\n      <li>Electrolysis has a major role in electrochemical industries. a) Sketch an electrolytic cell, label the anode and cathode and indicate the direction of electron transfer. b) Describe the nature of the electrochemical process. c) Distinguish between electrolytic and voltaic cells.</li>\n      <li>For each of the following electrolytes, write electrode half-reactions in each case that would occur during their electrolysis: a) Copper(II) sulphate solution using copper electrodes b) Copper(II) chloride using carbon electrodes.</li>\n      <li>Predict the products of electrolysis for a dilute solution of potassium iodide.</li>\n      <li>Why does chlorine gas form at the anode during the electrolysis of molten lead(II) chloride?</li>\n      <li>What changes in observations might you expect when comparing electrolysis in molten lead(II) chloride and concentrated aqueous sodium chloride?</li>\n      <li>How would you set up an experiment to demonstrate the production of different substances at the anode and cathode during the electrolysis of dilute copper(II) sulfate using copper electrodes?</li>\n      <li>Compare and contrast the products formed at the electrodes during the electrolysis of concentrated aqueous sodium chloride and dilute sulphuric acid using inert electrodes.</li>\n      <li>Assess the environmental impact of using hydrogen-oxygen fuel cells compared to gasoline engines in vehicles. Provide arguments for and against each technology.</li>\n      <li>Compare the ionic half-equations for the electrolysis of a dilute solution and a concentrated solution of sodium chloride. How do the products differ?</li>\n    </ol>\n  ",
  "Think Tank": "\n    <h2>THINK TANK</h2>\n    <ol>\n      <li>The following redox reaction occurs in the voltaic cell illustrated below: Ni²⁺(aq) + Fe(s) → Fe²⁺(aq) + Ni(s). Select the anode, and cathode and indicate the direction of flow of electrons.</li>\n      <li>When molten sodium bromide is electrolyzed, reddish-brown fumes are seen at the anode. Answer the following questions:\n        <ol type=\"i\">\n          <li>Name the reddish-brown fumes seen at anode.</li>\n          <li>What difference would you expect to observe if you used molten sodium iodide?</li>\n          <li>Write the electrode reactions in both cases.</li>\n          <li>What difference would expect to observe if you used a dilute aqueous solution of potassium bromide? Also, write electrode reactions.</li>\n        </ol>\n      </li>\n      <li>State what is formed at electrodes during the electrolysis of the following substances using carbon electrodes. Do not write reactions:\n        <ol type=\"i\">\n          <li>dilute aqueous solution of potassium chloride</li>\n          <li>copper(II) chloride</li>\n          <li>molten lead(II) bromide</li>\n        </ol>\n      </li>\n    </ol>\n  "
};

CHEMISTRY_DIGITAL_BOOK["Reaction Kinetics"] = {
  "Student Learning Outcomes (SLOs)": "\n    <h2>Student Learning Outcomes (SLOs)</h2>\n    <ul>\n      <li>Describe collision theory in terms of number of particles per unit volume, frequency of collisions of particles, kinetic energy of particles, and activation energy.</li>\n      <li>State that catalyst increases the rate of reaction, provides alternate pathway with lower activation energy, and remains unchanged at the end of a reaction.</li>\n      <li>Describe the physical parameters that may be affected by the rate of reaction including change in mass, temperature, and formation of gas.</li>\n      <li>Interpret data, including graphs, for investigating rate of reaction.</li>\n      <li>Explain the effect on rate of reaction of changing concentration of a reactant, pressure of gases, surface area of solids, temperature, and presence of catalyst, including enzymes, using collision theory.</li>\n      <li>Justify the importance of chemical kinetics in food industry to determine ideal harvesting and transportation times for produce.</li>\n    </ul>\n  ",
  "Introduction to Reaction Kinetics": "\n    <h2>Reaction Kinetics</h2>\n    <p>Chemical reactions are processes in which mass and energy are constantly changing. These reactions can take place at a range of speeds, from very fast to very slow. Fermentation is known to be a slow reaction, taking several weeks to make enough products, and digestion is a slow reaction. Acid-base neutralization is a fast reaction, taking only a few microseconds. Other reactions take place at a moderate speed, such as those that contract muscles, send impulses along nerves and capture photographic images.</p>\n    <p>For industry, it is important to understand the conditions under which a reaction will be most cost-effective. Kinetics, also known as chemical kinetics, is the study of the rate of chemical reactions, their mechanisms, and the factors that influence them.</p>\n  ",
  "5.1 Rates of Reactions": "\n    <h2>5.1 Rates of Reactions</h2>\n    <p>The rate of a chemical reaction tells us how quickly the reactants are used up or how quickly the products are formed over time. It is the change in the concentration of reactants or products in a given amount of time.</p>\n\n    <p><strong>Mathematically:</strong></p>\n    <p><strong>Rate = Change in concentration of a substance / Time taken for change</strong></p>\n\n    <p>As a reaction happens, the amount of reactants decreases, and the amount of products increases. For example, we measure concentration in moles per cubic decimeter, mol dm⁻³, and time in seconds, s. So, the unit for the rate of reaction is mol dm⁻³ s⁻¹.</p>\n\n    <p>To better understand this, we can use a graph. A graph with two curves, one for reactants showing decreasing concentration and one for products showing increasing concentration over time, represents the rate of a chemical reaction.</p>\n\n    <ol>\n      <li>At the beginning of the reaction, the slope of the reactant curve is steep, showing that the reactants are being used up quickly. At the same time, the product curve is steep, showing that products are being formed quickly.</li>\n      <li>As time goes on, the curves become less steep. This means the reaction slows down because there are fewer reactant particles to react.</li>\n      <li>Eventually, the curves become flat. This means the reaction has stopped because all the reactants are used up or the system has reached equilibrium.</li>\n    </ol>\n\n    <p>This shows that the rate of reaction is not constant. It changes as the reaction progresses.</p>\n  ",
  "Average Rate of Reaction": "\n    <h2>Average Rate of Reaction</h2>\n\n    <p><strong>Average rate of reaction = Total change in concentration / Total time taken</strong></p>\n\n    <p>Consider a general reaction:</p>\n    <p><strong>A → B</strong></p>\n\n    <p>The rate of reaction can be expressed in terms of the rate of disappearance of reactant A or the rate of appearance of product B.</p>\n\n    <p><strong>Rate of reaction = - Δ[A] / Δt</strong></p>\n    <p><strong>Rate of reaction = + Δ[B] / Δt</strong></p>\n\n    <p>Where Δ[A] and Δ[B] are the changes in the concentration of A and B respectively. The negative sign indicates a decrease in the concentration of the reactant A whereas the positive sign indicates the increase in the concentration of product B.</p>\n\n    <p>When we talk about the rate of a chemical reaction, we are interested in how quickly or slowly a chemical reaction happens. This is often measured by how fast the reactants are used up or how quickly the products are formed.</p>\n  ",
  "Interpreting Data": "\n    <h2>Interpreting Data</h2>\n\n    <p>Suppose a student is carrying out a chemical reaction where substance A reacts with another substance B to produce substance C. He followed the rate of reaction by determining the concentration of C produced at regular intervals. The following data was obtained.</p>\n\n    <p><strong>A + B → C</strong></p>\n\n    <table class=\"book-table\">\n      <tr><th>Time (minutes)</th><th>Concentration of C (mol dm⁻³)</th></tr>\n      <tr><td>0</td><td>0</td></tr>\n      <tr><td>20</td><td>10</td></tr>\n      <tr><td>40</td><td>20</td></tr>\n      <tr><td>60</td><td>25</td></tr>\n      <tr><td>80</td><td>27</td></tr>\n      <tr><td>100</td><td>28</td></tr>\n    </table>\n\n    <p>The rate of reaction can be found by plotting a graph of concentration of C against time. From this graph you can determine the rate of reaction at any moment by determining the gradient at that moment.</p>\n\n    <p>Suppose you want to calculate the rate of reaction at 20 minutes. For this purpose, draw a tangent to the curve at 20 minutes.</p>\n\n    <p><strong>Rate of reaction, or gradient = ΔC / Δt</strong></p>\n    <p><strong>Rate of reaction = 24 mol dm⁻³ / 40 min</strong></p>\n    <p><strong>= 0.01 mol dm⁻³ s⁻¹</strong></p>\n\n    <p>Thus, the rate of reaction at 20 min = 0.01 mol dm⁻³ s⁻¹.</p>\n\n    <p><strong>Average rate of reaction = total amount of C produced / total time taken</strong></p>\n    <p><strong>Average rate of reaction = 25 mol dm⁻³ / 6000 s</strong></p>\n    <p><strong>= 0.0042 mol dm⁻³ s⁻¹</strong></p>\n\n    <h3>Conclusion</h3>\n    <p>From this experiment, you can see that the reaction rate is not constant. The amount of substance C formed increases more quickly at first and then slows down. This is a common pattern in chemical reactions, where the rate can change as reactants are consumed.</p>\n  ",
  "5.2 Collision Theory and Activation Energy": "\n    <h2>5.2 Collision Theory and Activation Energy</h2>\n\n    <p>In a chemical reaction, bonds between atoms are broken and new bonds are formed. Collision theory helps us understand how these reactions happen. For a reaction to occur, the atoms or molecules must collide with each other. However, not all collisions lead to a reaction. The success of a collision depends on two things:</p>\n\n    <h3>1. Energy</h3>\n    <p>The colliding particles must have enough energy to overcome the repulsion between their outer electrons.</p>\n\n    <h3>2. Orientation</h3>\n    <p>The particles must be aligned in a way that allows the necessary atoms to come together and form new bonds.</p>\n\n    <p>The smallest amount of energy needed for a reaction to happen is called activation energy. If the energy of the colliding particles is less than this activation energy, the reaction will not occur.</p>\n\n    <p>Reactions happen faster when more particles have enough energy to collide effectively. If the activation energy is high, fewer particles will have enough energy, and the reaction will be slower. If the activation energy is low, more particles can collide effectively, and the reaction will happen faster.</p>\n\n    <p>For example, when hydrogen, H₂, and chlorine, Cl₂, react to form hydrogen chloride, HCl, the molecules need enough energy to break their bonds and form new ones. When an effective collision occurs, the particles form a temporary, high-energy state called the activated complex, or transition state. This complex quickly breaks down to form the final products.</p>\n\n    <p>You can think of activation energy like a hill. The reacting molecules need to climb this hill, using energy, before they can roll down the other side and form products. If the molecules do not have enough energy to reach the top, they roll back and remain unchanged.</p>\n  ",
  "5.3 Catalysts and their Role in Reaction Kinetics": "\n    <h2>5.3 Catalysts and their Role in Reaction Kinetics</h2>\n\n    <p>In industries, reactions are often carried out at high temperatures to produce products quickly. However, high temperatures can be dangerous and may damage certain chemicals. An alternative way to speed up reactions is to use a catalyst.</p>\n\n    <p>A catalyst is a substance that speeds up a chemical reaction without being used up itself. It works by providing an easier pathway for the reaction to happen, which has a lower activation energy. With a lower activation energy, more particles can collide effectively, and the reaction happens faster.</p>\n\n    <p>It is important to note that a catalyst does not change the overall energy of the reaction or its outcome. It only makes the reaction happen faster. Catalysts cannot make a reaction occur if it is not already possible based on the reaction's energy changes.</p>\n\n    <h3>Concept Assessment Exercise 5.1</h3>\n    <ol>\n      <li>How does the presence of a catalyst alter the activation energy of a reaction?</li>\n      <li>Why is it important for a catalyst to remain unchanged at the end of a reaction?</li>\n    </ol>\n  ",
  "5.3.1 Physical Parameters that Affect the Rate of Reaction": "\n    <h2>5.3.1 Physical Parameters that Affect the Rate of Reaction</h2>\n\n    <h3>1. Change in Mass</h3>\n    <p>During a chemical reaction, the mass of the reactants decreases because they are used up, while the mass of the products increases as they are formed.</p>\n\n    <h3>2. Formation of Gas</h3>\n    <p>In some reactions, a gas is produced. If the gas escapes, in an open system, the total mass of the reaction mixture decreases. In a closed system where gas cannot escape, the pressure increases as more gas is formed because the volume stays the same.</p>\n\n    <h3>3. Temperature</h3>\n    <p>When the temperature of a reaction increases, the particles move faster, causing them to collide more often. This increase in collision frequency results in a faster reaction rate.</p>\n  ",
  "5.3.2 Factors Affecting Rate of Reactions": "\n    <h2>5.3.2 Factors Affecting Rate of Reactions</h2>\n\n    <p>Several factors influence how fast a reaction happens by changing the number of successful collisions between particles. Some of the important factors are:</p>\n\n    <h3>1. Concentration of Reactants</h3>\n    <p>The more reactant particles there are in a given volume, the more frequently they collide. Increasing the concentration of a reactant increases the number of particles per unit volume. This increases the frequency of collisions and therefore increases the rate of reaction.</p>\n\n    <h3>2. Surface Area of Solids</h3>\n    <p>When a solid reactant is broken into smaller pieces or powdered, more of its particles are exposed to other reactants. This increases the chance of collisions. Therefore, a powdered solid reacts faster than a large piece of the same solid.</p>\n\n    <h3>3. Temperature</h3>\n    <p>Increasing temperature gives particles more kinetic energy. The particles move faster and collide more frequently. Also, more particles have energy equal to or greater than the activation energy. This increases the number of effective collisions and therefore increases the reaction rate.</p>\n\n    <p>The Maxwell-Boltzmann distribution curve shows how energy is distributed among particles. Most particles have medium energy, while only a few have the activation energy needed for a reaction. When the temperature increases, more particles gain enough energy to overcome the activation energy barrier, leading to faster reactions.</p>\n\n    <p>The curve shows the distribution of available energy between the molecules of a gas at constant temperature. It clearly shows that most of the molecules do not have the necessary activation energy. When temperature increases, the energy of the molecules also increases. Thus, the proportion of molecules having required activation energy increases.</p>\n\n    <p>Hence an increase in kinetic energy of reactant molecules increases the collision frequency, that is, the number of effective collisions and hence the reaction rate.</p>\n\n    <h3>4. Pressure of Gases</h3>\n    <p>Pressure increases the concentration of gases for a given volume. There will be more collisions, which will increase the reaction rate. For instance, a mixture of H₂ molecules and Cl₂ molecules will react twice as quickly when the partial pressure of one of the H₂ molecules is doubled compared to the partial pressure of the other.</p>\n\n    <h3>5. Catalyst</h3>\n    <p>A detailed account of the influence of catalyst on reaction rates is given in section 5.3.</p>\n\n    <h3>Concept Assessment Exercise 5.2</h3>\n    <ol>\n      <li>In what way does increasing the surface area of a solid reactant affect the rate of reaction?</li>\n      <li>How does temperature affect the rate of reaction?</li>\n      <li>Discuss the effect of changing the concentration of a reactant on the rate of reaction.</li>\n    </ol>\n  ",
  "5.3.4 Enzymes": "\n    <h2>5.3.4 Enzymes</h2>\n\n    <p>Most of the chemical reactions that occur in living organisms are regulated by molecules called enzymes. These are biochemical catalysts, that is, substances that increase the rate of chemical reactions within living things. Enzymes, like catalysts, are not consumed during chemical reactions.</p>\n\n    <p>Virtually all reactions in living cells are catalyzed by enzymes. An enzyme is a specialized protein that catalyzes specific biochemical reactions. Each enzyme catalyzes only one reaction. Most of the enzymes are found inside the cells. However, some are found in extracellular fluids such as saliva, gastric juice, etc.</p>\n\n    <p>Enzymes may speed up reactions by a factor of 10¹². Enzymes have specific shapes. They hold the reactant molecules in the right orientation necessary for successful collisions. This causes an increase in reaction rates.</p>\n  ",
  "5.4 Role of Chemical Kinetics in the Food Industry": "\n    <h2>5.4 Role of Chemical Kinetics in the Food Industry</h2>\n\n    <p>When it comes to the food industry, chemical kinetics plays an important role. Some of its key roles include:</p>\n\n    <ul>\n      <li>Identifying the optimal time to harvest and transport product, so that it has the best taste, texture, and nutritional content.</li>\n      <li>Identifying factors that cause degradation during transportation.</li>\n      <li>Estimating the optimal time of harvest so that the product reaches the market at its best quality.</li>\n      <li>Minimizing losses due to ripeness during transportation.</li>\n      <li>Developing methods for storage and transportation that help maintain nutritional value.</li>\n      <li>Identifying methods for slowing down specific reactions by controlling temperature and humidity, increasing the shelf life of the product.</li>\n    </ul>\n  ",
  "Key Points": "\n    <h2>KEY POINTS</h2>\n\n    <ul>\n      <li>The rate of a chemical reaction is a change in the concentration of the reactant or product in a given time.</li>\n      <li>The rate of reaction between two specific time intervals is called the average rate of reaction.</li>\n      <li>The rate of a chemical reaction depends upon the activation energy for the reaction.</li>\n      <li>The minimum amount of kinetic energy that the interacting particles must have is known as activation energy.</li>\n      <li>A substance that accelerates the chemical reaction but does not change its chemical structure at the end is called a catalyst.</li>\n      <li>Reaction rates are influenced by the catalyst, which changes the mechanism of the reaction by decreasing the energy of activation.</li>\n      <li>Enzymes are catalysts in living organisms.</li>\n    </ul>\n\n    <h3>References</h3>\n    <ul>\n      <li>Silberberg, Chemistry The Molecular Nature of Matter and Energy</li>\n      <li>Bonder and Pardue, Chemistry and Experimental Science 2/e</li>\n      <li>Uno Kask and J. David Rawn, General Chemistry</li>\n      <li>Graham Hill and John Holman, Chemistry in Context</li>\n      <li>John M. Deman, Principles of Food Chemistry</li>\n    </ul>\n  ",
  "Exercise": "\n    <h2>EXERCISE</h2>\n\n    <h3>1. Multiple Choice Questions (MCQs)</h3>\n    <ol type=\"i\">\n      <li>The rate of a reaction as the reaction proceeds.<br>a) Increases<br>b) Decreases<br>c) Remains the same<br>d) May increase or decrease</li>\n      <li>The activation energy for a reaction can be:<br>a) Increased by increasing temperature<br>b) Increased by decreasing temperature<br>c) Decreased by increasing concentration of reactants<br>d) None of these</li>\n      <li>Reactions with high activation energy are usually:<br>a) Fast<br>b) Slow<br>c) Exothermic<br>d) Reversible</li>\n      <li>In a reversible reaction catalyst lowers the activation energy of the:<br>a) Forward reaction<br>b) Reverse reaction<br>c) Forward as well as reverse reaction<br>d) Forward reaction but increases for the reverse reaction</li>\n      <li>Which of the following is NOT a factor affecting the rate of reaction according to collision theory?<br>a) Number of particles per unit volume<br>b) Activation energy<br>c) Presence of a catalyst<br>d) Molar mass of reactants</li>\n      <li>How does a catalyst increase the rate of reaction?<br>a) By decreasing the number of particles per unit volume<br>b) By increasing the activation energy<br>c) By providing an alternate pathway with higher activation energy<br>d) By providing an alternate pathway with lower activation energy</li>\n      <li>Which physical parameter is NOT typically affected by the rate of reaction?<br>a) Change in mass<br>b) Temperature<br>c) Formation of gas<br>d) Colour of the reactants</li>\n      <li>Which factor can affect the rate of reaction involving gases?<br>a) Change in solubility<br>b) Change in pressure<br>c) Change in volume<br>d) Change in viscosity</li>\n      <li>Increasing the surface area of solids generally:<br>a) Decreases the rate of reaction<br>b) Increases the rate of reaction<br>c) Has no effect on the rate of reaction<br>d) Makes the reaction irreversible</li>\n      <li>How does temperature affect the rate of reaction according to collision theory?<br>a) Higher temperature decreases the frequency of collisions<br>b) Higher temperature increases the activation energy<br>c) Higher temperature decreases the kinetic energy of particles<br>d) Higher temperature increases the frequency of collisions and kinetic energy of particles</li>\n    </ol>\n\n    <h3>2. Short Questions</h3>\n    <ol type=\"i\">\n      <li>Draw energy diagrams that represent the activation energy and show the effect of a catalyst.</li>\n      <li>What is the effect of a catalyst on the following? a) The rate of reaction b) The energy of activation</li>\n      <li>Why powdered Zn reacts faster with acid than a piece of Zn? Give reason.</li>\n      <li>List physical parameters which are affected by reaction rates.</li>\n      <li>Explain collision theory and its key components.</li>\n      <li>Discuss the effect of changing the concentration of a reactant on the rate of reaction.</li>\n      <li>Describe how graphs are used to interpret the rate of reaction.</li>\n      <li>Why is activation energy important in determining the rate of reaction?</li>\n      <li>If you increase the temperature of a reaction, how does this affect the kinetic energy of the particles?</li>\n      <li>Why do only a fraction of collisions lead to a reaction according to collision theory?</li>\n      <li>Evaluate how increasing activation energy affects the rate of reaction.</li>\n      <li>Suggest a way to identify if a catalyst has been effective in a reaction.</li>\n      <li>Assess the impact of catalysts on industrial chemical processes.</li>\n      <li>Evaluate the impact of adding an enzyme to a biochemical reaction.</li>\n      <li>Analyse how temperature control during transportation can affect the quality of the product.</li>\n    </ol>\n\n    <h3>3. Long Questions</h3>\n    <ol type=\"i\">\n      <li>Examine the graph depicting: a) the concentration of reactants over time. b) the effect of temperature on the rate of reaction. c) the effect of the catalyst on reaction rate.</li>\n      <li>An increase in surface area increases the reaction rate. Evaluate this statement in the light of collision theory to support your answer.</li>\n      <li>Interpret the role of a catalyst in a chemical reaction.</li>\n      <li>Discuss the impact of temperature on the rate of reaction.</li>\n      <li>Justify the role of chemical kinetics in the food industry.</li>\n      <li>Propose a hypothesis for how temperature and surface area affect the reaction rate. Design a set of experiments to test your hypothesis, detailing the methods and measurements.</li>\n      <li>You are investigating a new catalyst for a reaction that produces a valuable pharmaceutical product.</li>\n      <li>Explain the role of the catalyst in the reaction mechanism, including its effect on activation energy.</li>\n      <li>Design an experiment to compare the reaction rates with and without the catalyst.</li>\n      <li>A chemical reaction between substances A and B follows collision theory. You are tasked with maximizing the reaction rate. Describe how you would modify the number of particles per unit volume, temperature, and activation energy to achieve this goal.</li>\n      <li>Compare and contrast the effects of temperature and concentration on the rate of reaction.</li>\n      <li>Discuss the significance of activation energy in chemical reactions and its relationship to reaction rates.</li>\n    </ol>\n  ",
  "Think Tank": "\n    <h2>THINK TANK</h2>\n    <ol>\n      <li>Analyse a scenario where a catalyst is not effective in increasing the rate of reaction.</li>\n      <li>Evaluate the role of chemical kinetics in optimizing food production processes in the food industry.</li>\n      <li>Predict the effect of doubling the surface area of a solid reactant on the rate of reaction, providing reasoning based on collision theory.</li>\n      <li>Explain why the formation of gas is often associated with an increase in the rate of reaction.</li>\n    </ol>\n  "
};

CHEMISTRY_DIGITAL_BOOK["Salts"] = {
  "Student Learning Outcomes (SLOs)": "\n    <h2>Student Learning Outcomes (SLOs)</h2>\n    <ul>\n      <li>Explain that salts are ionic compounds formed due to electrostatic attraction between oppositely ions in which the positive ions come from bases and negative ions come from acids.</li>\n      <li>Explain why at STP salts are solids with high melting points.</li>\n      <li>Describe that under normal conditions, ionic compounds are usually solids with lattice structures.</li>\n      <li>Explain why the molten and aqueous solutions of salts are good conductors of electricity by making reference to the idea of mobile ions.</li>\n      <li>Describe the general solubility rules for salts. These are: a. Sodium, nitrate, potassium and ammonium salts are soluble, b. Chlorides are soluble except lead and silver, c. Carbonates are insoluble except sodium, potassium, and ammonium, d. hydroxides are insoluble except sodium, potassium, ammonium, and calcium partially.</li>\n      <li>Describe the preparation, separation and purification of soluble salts by reactions of acids with alkali titration, excess metal, excess insoluble base, excess insoluble carbonate.</li>\n    </ul>\n  ",
  "6.1 Salts": "\n    <h2>6.1 Salts</h2>\n    <p>Salts are ionic compounds formed through the electrostatic attraction between oppositely charged ions. These ions originate from acids and bases. In a typical reaction, a base provides the positive ions, also known as cations, while an acid supplies the negative ions or anions.</p>\n    <p>When these ions combine, they create a neutral compound, a salt. This process is fundamental to many chemical reactions and is a key concept in understanding the behaviour of acids and bases.</p>\n    <p>For example, in the reaction between hydrochloric acid HCl and sodium hydroxide NaOH, the sodium ions Na⁺ from the base combine with the chloride ions Cl⁻ from the acid to form sodium chloride NaCl, which is a common table salt.</p>\n    <p>Here, the Na⁺ cations from the base and the Cl⁻ anions from the acid come together due to an electrostatic attractive force between their opposite charges, resulting in the formation of the salt NaCl.</p>\n    <p>This principle of ionic bonding in salts is crucial in chemistry, as it explains the formation and properties of a wide range of compounds found in nature and used in various applications.</p>\n  ",
  "6.2 Physical State and Melting Points": "\n    <h2>6.2 Physical State and Melting Points</h2>\n    <p>Salts are usually ionic compounds. Their physical state and melting points depend on strong electrostatic forces between oppositely charged ions in their lattice structure.</p>\n  ",
  "6.2.1 Solids at STP": "\n    <h2>6.2.1 Solids at STP</h2>\n    <p>At Standard Temperature and Pressure STP, salts are usually solids. This is due to the strong electrostatic forces of attraction between the oppositely charged ions, which form a tightly bound lattice structure. These forces require significant energy to overcome, resulting in high melting points.</p>\n  ",
  "6.2.2 Lattice Structure of Ionic Compounds": "\n    <h2>6.2.2 Lattice Structure of Ionic Compounds</h2>\n    <p>Under normal conditions, ionic compounds are usually solids with a well-defined lattice structure. This property is due to the nature of the ionic bonds that hold the ions together. Ionic bonds are formed by electrostatic attraction between positively charged ions, cations, and negatively charged ions, anions.</p>\n    <p>These ions are arranged in a repeating three-dimensional pattern called a crystal lattice. This arrangement maximizes the electrostatic attractions and minimizes the repulsions between ions, leading to a stable structure.</p>\n  ",
  "6.2.3 Electrical Conductivity": "\n    <h2>6.2.3 Electrical Conductivity</h2>\n    <p>Molten and aqueous solutions of salts are good conductors of electricity because of the presence of free-moving ions.</p>\n    <p>When salts are in their solid state, their ions are held together in a rigid lattice structure by strong ionic bonds. In this state, the ions are not free to move, so solid salts do not conduct electricity.</p>\n    <p>Upon melting, the rigid lattice breaks down due to the high temperature. The ions become free to move in the molten state. These free-moving positive cations and negative anions can carry electrical charge, allowing the molten salt to conduct electricity.</p>\n    <p>Similarly, when salts dissolve in water, they dissociate into their constituent ions due to the polar nature of water molecules. For example, sodium chloride NaCl dissociates into Na⁺ and Cl⁻ ions. These free ions are now surrounded by water molecules but can move freely within the solution.</p>\n    <p>When an electric potential is applied, cations migrate toward the cathode negative electrode, and anions migrate toward the anode positive electrode, completing the circuit and allowing electrical conductivity.</p>\n    <p>In both molten and aqueous states, the ionic lattice is disrupted, liberating the ions. Free-moving ions under the influence of an electric field enable the conduction of electricity.</p>\n  ",
  "6.2.4 High melting points and boiling points": "\n    <h2>6.2.4 High melting points and boiling points</h2>\n    <p>The strong electrostatic forces of the lattice require significant energy to break, resulting in high melting points and boiling points. Ionic compounds are solid at STP with high melting points because of the strong electrostatic forces of attraction between their ions, which hold these ions in fixed positions.</p>\n  ",
  "6.2.5 Hardness and brittleness": "\n    <h2>6.2.5 Hardness and brittleness</h2>\n    <p>Lattice stiffness makes ionic compounds hard. However, when a voltage is applied, like-charged ions can be pushed together, causing repulsion and brittleness and a tendency to break.</p>\n    <p>Examples of ionic compounds are sodium chloride NaCl, potassium bromide KBr, calcium carbonate CaCO₃, magnesium sulphate MgSO₄, etc. Each of these compounds forms a clear crystal lattice that determines their structure and many of their physical properties.</p>\n  ",
  "6.3 Preparation, Separation, and Purification of Soluble Salts": "\n    <h2>6.3 Preparation, Separation, and Purification of Soluble Salts</h2>\n    <p>Soluble salts can be prepared through various methods, depending on the nature of the reactants involved. Here, we will describe four common methods: reaction of acids with alkali titration, excess metal, excess insoluble base, and excess insoluble carbonate.</p>\n  ",
  "6.3.1 Preparation by Titration (Acid and Alkali)": "\n    <h2>6.3.1 Preparation by Titration (Acid and Alkali)</h2>\n    <h3>Activity 6.1</h3>\n    <p>Preparation of sodium chloride NaCl from hydrochloric acid HCl and sodium hydroxide NaOH by titration.</p>\n    <p><strong>HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)</strong></p>\n\n    <h3>Materials required</h3>\n    <ul>\n      <li>Dilute solutions of sodium hydroxide and hydrochloric acid.</li>\n      <li>Phenolphthalein indicator</li>\n      <li>Burette</li>\n      <li>Pipette</li>\n      <li>Conical flask</li>\n      <li>Funnel</li>\n      <li>Evaporating disc</li>\n      <li>Burette stand, tripod stand, and heating source.</li>\n    </ul>\n\n    <h3>Procedure</h3>\n    <ul>\n      <li>Measure exactly 25 cm³ of HCl solution using a pipette and transfer it to a conical flask.</li>\n      <li>Add a few drops of phenolphthalein as an indicator to the acid.</li>\n      <li>Fill a burette with NaOH solution using a funnel.</li>\n      <li>Slowly add the NaOH from the burette to the HCl in the conical flask, swirling the flask continuously until the indicator changes colour from colourless to light pink indicating neutralization is complete.</li>\n    </ul>\n\n    <h3>Separation</h3>\n    <ul>\n      <li>Once the endpoint is reached, indicating that the acid and alkali have completely reacted, note the volume of NaOH used.</li>\n    </ul>\n\n    <h3>Crystallization</h3>\n    <ul>\n      <li>Evaporate the water from the resulting NaCl solution gently to obtain a hot saturated solution.</li>\n      <li>Allow the solution to cool and crystallize, then filter to collect the crystals.</li>\n    </ul>\n  ",
  "6.3.2 Preparation with Excess Metal": "\n    <h2>6.3.2 Preparation with Excess Metal</h2>\n    <p>Example: Zinc sulphate ZnSO₄ from sulphuric acid H₂SO₄ and zinc Zn.</p>\n\n    <h3>Activity 6.2: Preparation of zinc sulphate</h3>\n    <p><strong>Zn + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)</strong></p>\n\n    <h3>Materials required</h3>\n    <ul>\n      <li>Zinc metal</li>\n      <li>Dilute sulphuric acid</li>\n      <li>Beaker and glass rod</li>\n      <li>Filter funnel and filter paper</li>\n      <li>Evaporating disc</li>\n      <li>Tripod stand, wire gauze and heating source</li>\n    </ul>\n\n    <h3>Procedure</h3>\n    <ul>\n      <li>Measure 25 cm³ dilute sulphuric acid into a beaker.</li>\n      <li>Add excess zinc metal to dilute sulphuric acid in a beaker. You will observe bubbles of hydrogen are produced.</li>\n      <li>The reaction produces zinc sulphate and hydrogen gas.</li>\n      <li>If all the zinc disappears, add more until there is some left un-reacted, indicating the acid has been fully reacted.</li>\n    </ul>\n\n    <h3>Separation</h3>\n    <ul>\n      <li>Filter the mixture to remove unreacted excess zinc.</li>\n    </ul>\n\n    <h3>Crystallization</h3>\n    <p>Evaporate the filtrate to obtain a hot saturated solution. Allow the solution to cool and crystallize, then filter to collect the crystals.</p>\n  ",
  "6.3.3 Preparation with Excess Insoluble Base": "\n    <h2>6.3.3 Preparation with Excess Insoluble Base</h2>\n    <p>Example: Copper(II) sulphate CuSO₄ from sulphuric acid H₂SO₄ and copper(II) oxide CuO.</p>\n\n    <h3>Activity 6.3: Preparation of copper(II) sulphate</h3>\n    <p><strong>CuO(s) + H₂SO₄(aq) → CuSO₄(aq) + H₂O(l)</strong></p>\n\n    <h3>Materials required</h3>\n    <ul>\n      <li>Copper(II) oxide</li>\n      <li>Dilute sulphuric acid</li>\n      <li>Beaker and glass rod</li>\n      <li>Filter funnel and filter paper</li>\n      <li>Evaporating disc</li>\n      <li>Tripod stand, wire gauze and heating source</li>\n    </ul>\n\n    <h3>Procedure</h3>\n    <ul>\n      <li>Measure 25 cm³ dilute sulphuric acid into a beaker.</li>\n      <li>Add excess copper(II) oxide to dilute sulphuric acid in a beaker.</li>\n      <li>The reaction produces copper(II) sulphate and water.</li>\n      <li>Continue adding CuO until no more dissolves, indicating all the acid has reacted.</li>\n    </ul>\n\n    <h3>Separation</h3>\n    <ul>\n      <li>Filter the mixture to remove unreacted CuO.</li>\n    </ul>\n\n    <h3>Crystallization</h3>\n    <p>Evaporate the filtrate to obtain a hot saturated solution. Allow the solution to cool and crystallize, then filter to collect the crystals.</p>\n  ",
  "6.3.4 Preparation with Excess Insoluble Carbonate": "\n    <h2>6.3.4 Preparation with Excess Insoluble Carbonate</h2>\n    <h3>Activity 6.4</h3>\n    <p>Calcium chloride CaCl₂ from hydrochloric acid HCl and calcium carbonate CaCO₃.</p>\n    <p><strong>CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + CO₂(g) + H₂O(l)</strong></p>\n\n    <h3>Materials required</h3>\n    <ul>\n      <li>Calcium carbonate limestone</li>\n      <li>Dilute hydrochloric acid</li>\n      <li>Beaker and glass rod</li>\n      <li>Filter funnel and filter paper</li>\n      <li>Evaporating disc</li>\n      <li>Tripod stand, wire gauze and heating source</li>\n    </ul>\n\n    <h3>Procedure</h3>\n    <ul>\n      <li>Measure 25 cm³ dilute hydrochloric acid into a beaker.</li>\n      <li>Add excess calcium carbonate to dilute hydrochloric acid in a beaker.</li>\n      <li>The reaction produces calcium chloride, carbon dioxide, and water.</li>\n      <li>You will observe carbon dioxide has evolved with effervescence.</li>\n      <li>Continue adding CaCO₃ until no more effervescence bubbles is observed, indicating all the acid has reacted.</li>\n    </ul>\n\n    <h3>Separation</h3>\n    <ul>\n      <li>Filter the mixture to remove unreacted CaCO₃.</li>\n    </ul>\n\n    <h3>Crystallization</h3>\n    <p>Evaporate the filtrate to obtain a hot saturated solution. Allow the solution to cool and crystallize, then filter to collect the crystals.</p>\n  ",
  "6.4 Soluble and insoluble salts": "\n    <h2>6.4 Soluble and insoluble salts</h2>\n    <p>Soluble salts are salts that dissolve in water at room temperature, and insoluble salts are salts that do not dissolve in water at room temperature.</p>\n    <p>General rules for the solubility of salts help predict the solubility of various ionic compounds in water. These rules are necessary to understand the reactions of aqueous solutions.</p>\n\n    <h3>Solubility Rules</h3>\n    <ol>\n      <li>All sodium, potassium and ammonium salts are soluble in water. This includes common compounds such as sodium chloride NaCl, sodium sulphate Na₂SO₄, potassium chloride KCl, potassium bromide KBr, ammonium chloride NH₄Cl, ammonium sulphate (NH₄)₂SO₄, etc.</li>\n      <li>All nitrate salts are soluble in water. This rule applies to all nitrate compounds such as potassium nitrate KNO₃, calcium nitrate Ca(NO₃)₂, etc.</li>\n      <li>Most chloride Cl⁻ salts are soluble in water, except lead(II) chloride PbCl₂ and silver chloride AgCl are insoluble in water.</li>\n      <li>Most carbonate salts CO₃²⁻ are insoluble in water, except sodium, potassium, and ammonium carbonates which are soluble. Examples of insoluble carbonates include calcium carbonate CaCO₃, magnesium carbonate MgCO₃, etc.</li>\n      <li>Most common sulphates are soluble, except lead(II) sulphate, barium sulphate and calcium sulphate.</li>\n    </ol>\n\n    <h3>Concept Assessment Exercise 6.1</h3>\n    <p>Which of the following salts are insoluble?</p>\n    <p>Silver chloride, barium sulphate, sodium nitrate, ammonium carbonate, and lead nitrate.</p>\n  ",
  "Key Points": "\n    <h2>KEY POINTS</h2>\n    <ul>\n      <li>Salts are ionic compounds formed through the electrostatic attraction between oppositely charged ions.</li>\n      <li>Under normal conditions, ionic compounds are usually solids with a well-defined lattice structure.</li>\n      <li>Lattice stiffness makes ionic compounds hard.</li>\n      <li>In the solid state, ionic compounds do not conduct electricity because the ions are fixed in the lattice.</li>\n      <li>Soluble salts are salts that dissolve in water at room temperature.</li>\n      <li>All nitrate salts are soluble in water.</li>\n    </ul>\n  ",
  "Exercise": "\n    <h2>EXERCISE</h2>\n\n    <h3>1. Multiple Choice Questions (MCQs)</h3>\n    <ol type=\"i\">\n      <li>Which of the following salts is soluble in water?<br>a. Silver chloride AgCl<br>b. Lead carbonate PbCO₃<br>c. Sodium nitrate NaNO₃<br>d. Lead chloride PbCl₂</li>\n      <li>What type of ions do bases provide for salt formation?<br>a. Negative ions<br>b. Positive ions<br>c. Neutral molecules<br>d. Complex ions</li>\n      <li>What is the primary reason salts have high melting points?<br>a. Weak van der Waals forces<br>b. Strong electrostatic forces<br>c. Hydrogen bonding<br>d. Covalent bonding</li>\n      <li>In what state are salts generally good conductors of electricity?<br>a. Solid<br>b. Gas<br>c. Molten<br>d. Powdered</li>\n      <li>Which of the following is a general solubility rule for chlorides?<br>a. All chlorides are insoluble.<br>b. All chlorides are soluble.<br>c. Chlorides are soluble except lead and silver chlorides.<br>d. Chlorides are soluble except sodium and potassium chlorides.</li>\n      <li>What happens to the ions in a salt when it is dissolved in water?<br>a. They form a gas.<br>b. They become fixed in place.<br>c. They become mobile.<br>d. They form a solid.</li>\n      <li>Which of the following methods is used to prepare a salt by titration?<br>a. Acid + Metal<br>b. Acid + Insoluble Base<br>c. Acid + Insoluble Carbonate<br>d. Acid + Alkali</li>\n      <li>Which of these salts is insoluble in water?<br>a. Potassium carbonate K₂CO₃<br>b. Ammonium nitrate NH₄NO₃<br>c. Calcium chloride CaCl₂<br>d. Lead chloride PbCl₂</li>\n      <li>What is formed when an acid reacts with an excess of an insoluble base?<br>a. Salt and hydrogen<br>b. Salt and water<br>c. Salt and carbon dioxide<br>d. Salt and oxygen</li>\n      <li>Which ion is commonly found in soluble nitrates?<br>a. NH₄⁺<br>b. NO₃⁻<br>c. Cl⁻<br>d. CO₃²⁻</li>\n    </ol>\n\n    <h3>2. Short Answer Questions</h3>\n    <ol type=\"i\">\n      <li>Define what a salt is in terms of ions.</li>\n      <li>Why do salts generally have high melting points?</li>\n      <li>Describe the lattice structure of an ionic compound.</li>\n      <li>How do salts conduct electricity when molten or in solution?</li>\n      <li>List three salts that are generally soluble in water.</li>\n      <li>What happens to the ions in an ionic compound when it dissolves in water?</li>\n      <li>Do you think that most carbonates are soluble in water?</li>\n      <li>How can you prepare a soluble salt using an excess of an insoluble base?</li>\n      <li>Which salts are typically soluble according to the general solubility rules?</li>\n    </ol>\n\n    <h3>3. Long Answer Questions</h3>\n    <ol type=\"i\">\n      <li>Explain the process of preparing a soluble salt using titration. Include a detailed description of the steps involved.</li>\n      <li>Discuss the properties of salts that make them solid at STP and have high melting points.</li>\n      <li>Describe the solubility rules for salts and explain the exceptions for chlorides, carbonates, and hydroxides.</li>\n      <li>Explain why ionic compounds have lattice structures and how this influences their physical properties.</li>\n      <li>Describe the preparation, separation, and purification of salts using an excess of an insoluble carbonate, providing an example reaction.</li>\n    </ol>\n  ",
  "Think Tank": "\n    <h2>THINK TANK</h2>\n    <ol>\n      <li>Design an experiment to make magnesium sulphate crystals with suitable reactants.</li>\n      <li>Design an experiment to make potassium sulphate crystals using titration method.</li>\n      <li>Name two types of salts that are always soluble.</li>\n      <li>How could you prepare pure dry sample of copper(II) sulphate from copper(II) carbonate?</li>\n      <li>What would you add to dilute sulphuric acid to make copper(II) sulphate?</li>\n    </ol>\n  "
};

CHEMISTRY_DIGITAL_BOOK["Nitrogen, Sulphur and Metals"] = {
  "Student Learning Outcomes (SLOs)": "\n    <h2>Student Learning Outcomes (SLOs)</h2>\n    <ul>\n      <li>Recognize that atmospheric oxides of nitrogen NO and NO₂ can react with unburned hydrocarbons to form peroxyacetyl nitrate, PAN, which is a component of photochemical smog.</li>\n      <li>Describe the role of NO and NO₂ in the formation of acid rain both directly and in their catalytic role in the oxidation of atmospheric sulphur dioxide.</li>\n      <li>State the symbol equation for the production of ammonia in the Haber process, N₂(g) + 3H₂(g) ⇌ 2NH₃(g).</li>\n      <li>State the sources of hydrogen methane and nitrogen air in Haber process.</li>\n      <li>State typical conditions in the Haber process as 450°C, 20000kPa / 200 atm and an iron catalyst.</li>\n      <li>State the symbol equation for the conversion of sulphur dioxide to sulphur trioxide in the Contact process, 2SO₂(g) + O₂(g) ⇌ 2SO₃(g).</li>\n      <li>State the sources of sulphur dioxide burning sulphur or roasting sulphide ores and oxygen air in the Contact process.</li>\n      <li>State the typical conditions for the conversion of sulphur dioxide to sulphur trioxide in the Contact process as 450°C, 200kPa / 2 atm and vanadium(V) oxide catalyst.</li>\n      <li>Describe atmospheric oxides as oxides that react with acids and bases to produce a salt and water.</li>\n      <li>Classify oxides as acidic, including SO₂ and CO₂, basic, including CuO and CaO, or amphoteric, limited to Al₂O₃ and ZnO, related to metallic and non-metallic character.</li>\n      <li>Identify the general chemical properties of metals, limited to their reactions with dilute acids, cold water, steam and oxygen.</li>\n      <li>Arrange metals in order of reactivity given relevant information.</li>\n    </ul>\n  ",
  "Introduction to Nitrogen, Sulphur and Metals": "\n    <h2>Nitrogen, Sulphur and Metals</h2>\n    <p>Nitrogen and sulphur oxides play important roles in the environment and industrial processes. For instance, in the atmosphere, oxides such as nitric oxide NO and nitrogen dioxide NO₂ react with unburned hydrocarbons, resulting in the formation of peroxy acetyl nitrate, or PAN, which is a major component of photochemical smog.</p>\n    <p>Nitrogen oxides also play a role in acid rain, both directly and by catalyzing the oxidation of SO₂ to SO₃. On the industrial level, nitrogen is important for the production of ammonia in Haber processes, while sulphur dioxide is essential for the production of sulphuric acid. Understanding the chemistry of nitrogen and sulphur oxides, including their behaviour, and their industrial applications is important in both the environment and chemical engineering.</p>\n  ",
  "7.1 Photochemical Smog": "\n    <h2>7.1 Photochemical Smog</h2>\n    <p>Photochemical smog occurs when sunlight reacts with specific chemicals in the air. One of the most important steps in photochemical smog formation is the reaction of nitrogen oxides NO and NO₂ in the atmosphere with unburned hydrocarbons in the presence of sunlight. This reaction leads to the formation of various secondary pollutants, including peroxyacetyl nitrate PAN.</p>\n\n    <h3>The chemical reactions involved in the formation of PAN</h3>\n    <h4>1. Formation of Nitrogen Dioxide NO₂</h4>\n    <p>Nitric oxide NO is emitted from vehicles, industrial processes, and other combustion sources. NO reacts with oxygen O₂ in the atmosphere to form nitrogen dioxide NO₂:</p>\n    <p><strong>2NO(g) + O₂(g) → 2NO₂(g)</strong></p>\n\n    <h4>2. Photolysis of Nitrogen Dioxide NO₂</h4>\n    <p>NO₂ absorbs sunlight particularly UV light and undergoes photodissociation to form nitric oxide NO and a free oxygen atom O:</p>\n    <p><strong>NO₂(g) → NO(g) + [O]</strong></p>\n\n    <h4>3. Formation of Ozone O₃</h4>\n    <p>Nascent oxygen or atomic oxygen is highly reactive and reacts with atmospheric O₂ to form O₃.</p>\n    <p><strong>O₂(g) + [O] → O₃(g)</strong></p>\n\n    <h4>4. Reaction of Hydrocarbons</h4>\n    <p>Unburned hydrocarbons, often referred to as volatile organic compounds or VOCs, in the atmosphere can react with nascent oxygen in the presence of UV light to form a variety of intermediate organic radicals.</p>\n    <p><strong>Hydrocarbons + [O] → RCO•</strong></p>\n\n    <h4>5. Formation of Peroxyacyl Radicals</h4>\n    <p>These organic radicals react with molecular oxygen O₂ to form peroxy acyl radicals RC(O)O₂•.</p>\n    <p><strong>RCO• + O₂ → RC(O)O₂•</strong></p>\n\n    <h4>6. Formation of PAN</h4>\n    <p>The peroxy acyl radicals RC(O)O₂• react with NO₂ to form peroxyacetyl nitrate PAN:</p>\n    <p><strong>RC(O)O₂• + NO₂ → RC(O)O₂NO₂</strong></p>\n    <p>PAN is a stable molecule at lower temperatures and can travel long distances in the atmosphere. It acts as a reservoir for NOx and organic radicals, releasing them under conditions of higher temperatures and sunlight, thereby contributing to the formation and persistence of photochemical smog.</p>\n  ",
  "7.2 Acid rain": "\n    <h2>7.2 Acid rain</h2>\n    <p>The acidity of rainwater increases in polluted areas during thunderstorms e.g. SO₂ sulphur dioxide from power plants during the combustion of fossil fuels and NO₂ from automobiles. Exhaust fumes dissolve in rainwater producing acids.</p>\n    <p>The pH of rainwater can be much lower due to the production of H₂SO₄ and HNO₃ by lightning during the thunderstorm. The rain may have a pH as low as 2. Acid rain is defined as rain having a pH less than 5.</p>\n  ",
  "7.2.1 Role of nitric oxide and nitrogen dioxide in the formation of acid rain": "\n    <h2>7.2.1 Role of nitric oxide and nitrogen dioxide in the formation of acid rain</h2>\n    <p>Nitric oxide NO and nitrogen dioxide NO₂ play important roles in the formation of acid rain through both direct and catalytic processes. Here is an overview of their involvement:</p>\n  ",
  "7.2.2 Direct Role in Acid Rain Formation": "\n    <h2>7.2.2 Direct Role in Acid Rain Formation</h2>\n    <h3>Formation of Nitric Acid HNO₃</h3>\n    <p>Nitric oxide NO is initially produced during combustion processes, such as those occurring in vehicle engines and industrial activities. NO is relatively stable but can be oxidized to form NO₂:</p>\n    <p><strong>2NO(g) + O₂(g) → 2NO₂(g)</strong></p>\n    <p>NO₂ can further react with hydroxyl radicals OH and water in the atmosphere to form nitric acid HNO₃, a major component of acid rain:</p>\n    <p><strong>4NO₂(g) + 2H₂O(l) + O₂(g) → 4HNO₃(aq)</strong></p>\n  ",
  "Catalytic role in the oxidation of sulphur dioxide": "\n    <h2>Catalytic role in the oxidation of sulphur dioxide SO₂</h2>\n    <p>Sulphur dioxide SO₂ is another significant precursor of acid rain, primarily originating from the burning of fossil fuels containing sulphur. The conversion of SO₂ to sulphuric acid H₂SO₄ can be catalysed by NO₂.</p>\n    <p><strong>SO₂(g) + NO₂(g) → SO₃(g) + NO(g)</strong></p>\n\n    <h3>Formation of Sulphuric Acid H₂SO₄</h3>\n    <p>SO₃ readily reacts with water vapour to form sulphuric acid H₂SO₄.</p>\n    <p><strong>SO₃(g) + H₂O(l) → H₂SO₄(aq)</strong></p>\n\n    <h3>Regeneration of NO₂</h3>\n    <p>The NO produced in the oxidation of SO₂ can be re-oxidized to NO₂ by reacting with molecular oxygen O₂, continuing the catalytic cycle:</p>\n    <p><strong>2NO(g) + O₂(g) → 2NO₂(g)</strong></p>\n    <p>This cycle allows a small amount of NO₂ to catalyse the conversion of a large amount of SO₂ to sulphuric acid.</p>\n  ",
  "7.3.3 Overall Impact on Acid Rain": "\n    <h2>7.3.3 Overall Impact on Acid Rain</h2>\n    <p>NO₂ acts as a catalyst in the oxidation of SO₂ to sulphuric acid, thereby increasing the concentration of another strong acid in the atmosphere.</p>\n  ",
  "7.3 Contact Process": "\n    <h2>7.3 Contact Process</h2>\n    <h3>Contact Process for the Manufacture of Sulphuric Acid</h3>\n    <p>Sulphuric acid is a most important industrial chemical used for making a large number of compounds e.g. fertilizer, plastic, explosives, paints, leather, tanning, textiles, metallurgy etc. Sulphuric acid is used in almost all industries which is why it is called the King of Chemicals.</p>\n\n    <h3>Sources</h3>\n    <p>This process is based on the catalytic oxidation of SO₂ and SO₃ in the presence of atmospheric oxygen. Sulphur dioxide is produced by burning sulphur or roasting sulphide ores.</p>\n    <p><strong>2SO₂(g) + O₂(g) ⇌ 2SO₃(g) + 45.2 kcals</strong></p>\n    <p>This reaction is reversible and exothermic. Therefore the optimum conditions for the reaction are:</p>\n    <ol>\n      <li>Concentration: A controlled amount of air is passed.</li>\n      <li>Temperature: The temperature of the reaction should be kept at 450°C.</li>\n      <li>Pressure: Pressure is usually kept at 200kPa / 2 atm.</li>\n      <li>Catalyst: Vanadium pentaoxide is an efficient catalyst.</li>\n    </ol>\n  ",
  "Different Steps involved in the contact process": "\n    <h2>Different Steps involved in the contact process</h2>\n    <ol type=\"i\">\n      <li>Burner: Sulphur is burnt in a sulphur burner, SO₂ gas produced and vapours of this gas are cooled by passing through a pipe cooler made up of iron. <strong>S(s) + O₂(g) → SO₂(g)</strong></li>\n      <li>The gases then pass through a coke filter which filters the traces of suspended matter.</li>\n      <li>The purified gases then pass through the heat exchanger and are cooled to 25°C.</li>\n      <li>From heat exchange gases go to catalytic chambers called converters where SO₃ is formed.</li>\n    </ol>\n    <p><strong>2SO₂ + O₂ ⇌ 2SO₃ + Heat</strong></p>\n    <p>SO₃ is cooled and passed through an absorption tower. Steam, water and dilute sulphuric acid runs into the tower and oleum H₂S₂O₇ or fuming H₂SO₄ is obtained and stored in the oleum tower. The oleum tower is made up of brick-lined steel packed with quartz and fed with 98% H₂SO₄.</p>\n    <p><strong>H₂SO₄(l) + SO₃(g) → H₂S₂O₇(l) Oleum</strong></p>\n    <p>By adding the appropriate amount of water, oleum converts to concentrated H₂SO₄.</p>\n    <p><strong>H₂S₂O₇ + H₂O → 2H₂SO₄</strong></p>\n    <p>The acid obtained from this method is extremely pure. Any concentration of H₂SO₄ can be obtained in this method.</p>\n  ",
  "7.4 Haber Process": "\n    <h2>7.4 Haber Process</h2>\n    <p>Ammonia NH₃ is commercially produced by the Haber process.</p>\n    <p>Ammonia can be liquefied and its boiling point is -33.35°C. It can be solidified as white ice crystals. Most of the commercial ammonia is prepared by fixing atmospheric nitrogen.</p>\n    <p>Sources of reactants: Hydrogen is obtained by the decomposition of methane and nitrogen is obtained from air.</p>\n\n    <h3>Optimum Condition for Haber process</h3>\n    <ol type=\"i\">\n      <li>Concentration of Reactant: A mixture of 1 volume of nitrogen and 3 volume of hydrogen.</li>\n      <li>Catalytic Chamber: These two gases are compressed to 200 - 500 atm pressure by special pumps injected into the heated reaction vessel and then passed over a catalyst consisting of a mixture of Fe/Mo Molybdenum at 450°C.</li>\n      <li>Refrigerated Brine: The gases coming out of the catalytic chamber contain 10-12% ammonia. Ammonia is removed periodically and then passed through refrigerated brine concentrated solution of NaCl to liquefy ammonia. The residual or unreacted gases are recycled. Excess of nitrogen is used to favour the reaction to the right.</li>\n    </ol>\n\n    <p><strong>N₂(g) + 3H₂(g) ⇌ 2NH₃(g)</strong></p>\n    <p>Haber process is the cheapest method for manufacturing ammonia. The reaction between nitrogen and hydrogen is an exothermic and reversible process and is accompanied by a decrease in the volume of the product.</p>\n\n    <h3>Favourable conditions according to the Le-Chatellier’s Principle</h3>\n    <ol>\n      <li>High pressure 200 atm due to a decrease in the volume of the product.</li>\n      <li>The temperature must be kept as low as possible. In the presence of a catalyst, the optimum temperature is 450°C.</li>\n    </ol>\n  ",
  "7.5 Oxides": "\n    <h2>7.5 Oxides</h2>\n    <p>Binary compounds of elements with oxygen are called oxides. For example, CaO, CO₂, SO₂, Na₂O, CuO, Al₂O₃, etc.</p>\n    <p>Oxides can be classified as acidic, basic, or amphoteric based on their chemical properties and their relationship with metallic and non-metallic elements.</p>\n\n    <h3>1. Acidic Oxides</h3>\n    <p>Acidic oxides typically form acids when they react with water. They are oxides of non-metals. Examples include:</p>\n    <p><strong>SO₂ sulphur dioxide:</strong> Reacts with water to form sulphurous acid H₂SO₃.</p>\n    <p><strong>SO₂(g) + H₂O(l) → H₂SO₃(aq)</strong></p>\n    <p><strong>CO₂ carbon dioxide:</strong> Reacts with water to form carbonic acid H₂CO₃.</p>\n    <p><strong>CO₂(g) + H₂O(l) → H₂CO₃(aq)</strong></p>\n\n    <h3>2. Basic Oxides</h3>\n    <p>Basic oxides form bases when they react with water. They are oxides of metals. Examples include:</p>\n    <p><strong>Na₂O sodium oxide:</strong> Reacts with acids to form salts and water, indicating its basic nature.</p>\n    <p><strong>Na₂O(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l)</strong></p>\n    <p><strong>CaO calcium oxide:</strong> Reacts with water to form calcium hydroxide Ca(OH)₂, a strong base. It reacts with acids to form salt.</p>\n    <p><strong>CaO(s) + H₂O(l) → Ca(OH)₂(aq)</strong></p>\n    <p><strong>CaO(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l)</strong></p>\n\n    <h3>3. Amphoteric Oxides</h3>\n    <p>Amphoteric oxides can react both with acids and bases, displaying both acidic and basic properties. These are oxides of some metals. Examples include:</p>\n    <p><strong>Al₂O₃ aluminium oxide:</strong> Reacts with acids to form salts and water, and with bases to form aluminates.</p>\n    <p>With acid HCl: <strong>Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O</strong></p>\n    <p>With base NaOH: <strong>Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄</strong> sodium aluminate</p>\n    <p><strong>ZnO zinc oxide:</strong> Reacts with acids to form salts and water, and with bases to form zincates.</p>\n    <p>With acid HCl: <strong>ZnO + 2HCl → ZnCl₂ + H₂O</strong></p>\n    <p>With base NaOH: <strong>ZnO + 2NaOH + H₂O → Na₂[Zn(OH)₄]</strong> sodium zincate</p>\n  ",
  "7.5 General characteristics of metals": "\n    <h2>7.5 General characteristics of metals</h2>\n    <p>Metals exhibit various chemical properties based on their reactions with different substances, including dilute acids, cold water, steam, and oxygen.</p>\n\n    <h3>Reactions with Dilute Acids</h3>\n    <p>Metals react with dilute acids to form a salt and hydrogen gas.</p>\n    <p><strong>Metal + Dilute Acid → Salt + Hydrogen Gas</strong></p>\n    <p>Example with hydrochloric acid:</p>\n    <p><strong>Mg + 2HCl(aq) → MgCl₂(aq) + H₂(g)</strong></p>\n    <p>Metals like potassium and sodium react explosively. Metals like magnesium, zinc and iron react steadily, producing bubbles of hydrogen. Metals such as copper, silver and gold do not react with dilute acids.</p>\n\n    <h3>Reactions with Cold Water</h3>\n    <p>Reactive metals react with cold water to form a metal hydroxide and hydrogen gas.</p>\n    <p><strong>Metal + Water → Metal Hydroxide + Hydrogen Gas</strong></p>\n    <p><strong>2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)</strong></p>\n    <p>Metals like potassium, sodium and calcium react vigorously, sometimes explosively. Metals like magnesium react slowly with cold water, but faster with hot water. Whereas metals like zinc and iron do not react significantly with cold water.</p>\n\n    <h3>Reactions with Steam</h3>\n    <p>Metals react with steam to form a metal oxide and hydrogen gas.</p>\n    <p><strong>Metal + Steam → Metal Oxide + Hydrogen Gas</strong></p>\n    <p><strong>3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)</strong></p>\n    <p>Metals such as potassium and sodium are typically not tested with steam due to violent reactions. Metals such as magnesium, zinc and iron react readily. Less reactive metals like copper do not react with steam.</p>\n\n    <h3>Reactions with Oxygen</h3>\n    <p>Metals react with oxygen to form metal oxides.</p>\n    <p><strong>Metal + Oxygen → Metal Oxide</strong></p>\n    <p><strong>2Mg(s) + O₂(g) → 2MgO(s)</strong></p>\n    <p>Metals like potassium and sodium react rapidly, forming oxides and sometimes peroxides or superoxides. Metals like magnesium and aluminium form a protective oxide layer, which prevents further reaction. Metals such as copper oxidize slowly, often forming a patina over time. Metals like gold and platinum do not react with oxygen under normal conditions.</p>\n  ",
  "7.5.1 Reactivity series": "\n    <h2>7.5.1 Reactivity series</h2>\n    <p>Metals can be arranged into a reactivity series based on their observed reactions with acids, cold water, and steam. Metals can be grouped into four groups.</p>\n\n    <h3>1. Highly Reactive Metals</h3>\n    <p>These metals react vigorously with cold water, steam, and acids, releasing hydrogen gas. Examples: Potassium K, Sodium Na, Calcium Ca.</p>\n    <p>With cold water: Form hydroxides and hydrogen gas.</p>\n    <p><strong>2K(s) + 2H₂O(l) → 2KOH(aq) + H₂(g)</strong></p>\n    <p>With acids: Form salts and hydrogen gas.</p>\n    <p><strong>2K(s) + 2HCl(aq) → 2KCl(aq) + H₂(g)</strong></p>\n\n    <h3>2. Moderately Reactive Metals</h3>\n    <p>These metals react slowly or not at all with cold water, react with steam to form oxides and hydrogen gas, and react with acids to form salts and hydrogen gas. Examples: Magnesium Mg, Aluminium Al, Zinc Zn, Iron Fe.</p>\n    <p>With cold water: Limited or no reaction, e.g. Mg reacts very slowly.</p>\n    <p>With steam: Form oxides and hydrogen gas.</p>\n    <p><strong>Mg(s) + H₂O(g) → MgO(s) + H₂(g)</strong></p>\n    <p>With acids: React more slowly compared to highly reactive metals.</p>\n    <p><strong>Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)</strong></p>\n\n    <h3>3. Less Reactive Metals</h3>\n    <p>These metals do not react with cold water or steam, and react slowly or not at all with acids. Examples: Lead Pb, Copper Cu, Silver Ag.</p>\n    <p>With cold water: No reaction. With steam: No reaction. With acids: Lead reacts slowly with strong acids, while copper and silver do not react.</p>\n\n    <h3>4. Unreactive Metals</h3>\n    <p>These metals are least reactive and do not react with cold water, steam, or acids under normal conditions. Examples: Gold Au, Platinum Pt.</p>\n\n    <h3>Reactivity Series Simplified Order</h3>\n    <p><strong>Potassium &gt; Sodium &gt; Calcium &gt; Magnesium &gt; Aluminium &gt; Zinc &gt; Iron &gt; Lead &gt; Copper &gt; Silver &gt; Gold</strong></p>\n    <p>This arrangement reflects their decreasing reactivity with acids, cold water, and steam.</p>\n  ",
  "Activity 7.1 Exploring Metal Reactivity": "\n    <h2>Activity 7.1: Exploring Metal Reactivity</h2>\n    <p><strong>Objective:</strong> Students will explore the reactivity of different metals by conducting simple experiments and then arrange the metals in order of their reactivity, from most reactive to least reactive.</p>\n\n    <h3>Materials Required</h3>\n    <ul>\n      <li>Small strips or pieces of various metals e.g. Magnesium, Zinc, Iron, Copper</li>\n      <li>4 Test tubes or small beakers</li>\n      <li>Dilute hydrochloric acid HCl solution safely diluted for the grade level</li>\n      <li>Sandpaper to clean metal surfaces</li>\n      <li>Water</li>\n      <li>Safety goggles and gloves</li>\n      <li>Activity worksheet</li>\n    </ul>\n\n    <h3>Procedure</h3>\n    <ol>\n      <li>Introduction to Metals and Reactivity: Introduce the concept of a reactivity series.</li>\n      <li>Cleaning the Metals: Give each student or group of students a small piece of each metal and a piece of sandpaper. Ask them to clean the surface of the metal to remove any oxide layer, making it shiny.</li>\n      <li>Setting Up the Experiment: Label each test tube or beaker with the name of the metal. Place one piece of metal into each test tube. Add enough dilute hydrochloric acid to each test tube to cover the metal.</li>\n      <li>Observation: Ask students to observe what happens to the metals when they come into contact with the acid. Encourage students to record their observations on the activity worksheet. They should note any bubbles indicating a reaction, the speed of the reaction, and any other changes.</li>\n      <li>Arranging the Metals: Based on their observations, students will arrange the metals from most reactive to least reactive on their worksheet.</li>\n      <li>Discussion: Discuss the results in the class. Ask students why they think some metals reacted more than others and how this relates to the metal’s position in the reactivity series.</li>\n      <li>Safety Considerations: Ensure that all students wear safety goggles and gloves during the experiment. Remind students to handle the acid with care, even though it is dilute. Supervise students closely during the activity.</li>\n    </ol>\n\n    <h3>Concept Assessment Exercise 7.1</h3>\n    <ol>\n      <li>If you were to conduct this experiment with a new metal, what steps would you take to predict its reactivity before starting the experiment?</li>\n      <li>Compare the reactions of magnesium and copper in hydrochloric acid. What does the difference in their reactions tell you about their positions in the reactivity series?</li>\n      <li>Some students observed that a metal did not react with hydrochloric acid. How could you confirm whether this result is due to the metal’s low reactivity or an experimental error?</li>\n      <li>Design an experiment to test the reactivity of metals using a different acid, such as sulphuric acid. What changes would you make to the procedure, and what results would you expect?</li>\n    </ol>\n  ",
  "Key Points": "\n    <h2>KEY POINTS</h2>\n    <ul>\n      <li>PAN is a stable molecule at lower temperatures and can travel long distances in the atmosphere.</li>\n      <li>Nitric oxide NO and nitrogen dioxide NO₂ play important roles in the formation of acid rain through both direct and catalytic processes.</li>\n      <li>Nitrogen dioxide and sulphur dioxide are significant precursors of acid rain.</li>\n      <li>Binary compounds of elements with oxygen are called oxides.</li>\n      <li>Acidic oxides typically form acids when they react with water. They are the oxides of non-metals.</li>\n      <li>Basic oxides form bases when they react with water. They are the oxides of metals.</li>\n      <li>Amphoteric oxides can react with acids and bases, displaying both acidic and basic properties.</li>\n      <li>Metals react with dilute acids to form a salt and hydrogen gas.</li>\n      <li>Reactive metals react with cold water to form a metal hydroxide and hydrogen gas.</li>\n    </ul>\n  ",
  "Exercise": "\n    <h2>EXERCISE</h2>\n\n    <h3>1. Multiple Choice Questions (MCQs)</h3>\n    <ol type=\"i\">\n      <li>What is a key component of photochemical smog formed by the reaction of NO and NO₂ with unburned hydrocarbons?<br>a) Sulfuric acid<br>b) Peroxyacetyl nitrate PAN<br>c) Carbon monoxide<br>d) Ozone</li>\n      <li>Which of the following is the balanced equation for the production of ammonia in the Haber process?<br>a) N₂ + H₂ → NH₃<br>b) N₂ + 2H₂ → 2NH₃<br>c) N₂ + 3H₂ → NH₃<br>d) N₂ + 3H₂ → 2NH₃</li>\n      <li>What are the sources of hydrogen and nitrogen in the Haber process?<br>a) Water and air<br>b) Methane and air<br>c) Methane and water<br>d) Water and methane</li>\n      <li>Which catalyst is used in the Haber process?<br>a) Platinum<br>b) Vanadium(V) oxide<br>c) Iron<br>d) Nickel</li>\n      <li>At what temperature is the Haber process typically conducted?<br>a) 300°C<br>b) 450°C<br>c) 600°C<br>d) 200°C</li>\n      <li>What is the symbol equation for the conversion of sulphur dioxide to sulphur trioxide in the Contact process?<br>a) SO₂ + O₂ → SO₃<br>b) 2SO₂ + O₂ → 2SO₃<br>c) SO₂ + 2O₂ → 2SO₃<br>d) 2SO₂ + O₂ → SO₃</li>\n      <li>Which catalyst is used in the Contact process for the conversion of SO₂ to SO₃?<br>a) Iron<br>b) Vanadium(V) oxide<br>c) Platinum<br>d) Nickel</li>\n      <li>What are the sources of sulphur dioxide in the Contact process?<br>a) Burning sulphur or roasting sulphide ores<br>b) Burning methane<br>c) Electrolysis of water<br>d) Combustion of natural gas</li>\n      <li>How do atmospheric oxides react with acids and bases?<br>a) Forming a salt and water<br>b) Forming an acid and a gas<br>c) Forming a base and hydrogen<br>d) Forming a salt and hydrogen</li>\n      <li>Which of the following oxides is amphoteric?<br>a) SO₂<br>b) CO₂<br>c) CuO<br>d) Al₂O₃</li>\n    </ol>\n\n    <h3>2. Short Answer Questions</h3>\n    <ol type=\"i\">\n      <li>What is peroxyacetyl nitrate PAN and how is it formed?</li>\n      <li>Describe the role of NO and NO₂ in the formation of acid rain.</li>\n      <li>Write the balanced equation for the production of ammonia in the Haber process.</li>\n      <li>What are the typical conditions temperature, pressure, catalyst for the Haber process?</li>\n      <li>How is sulphur dioxide produced for the Contact process?</li>\n      <li>State the balanced chemical equation for the conversion of sulphur dioxide to sulphur trioxide.</li>\n      <li>Describe the role of vanadium(V) oxide in the Contact process.</li>\n      <li>What are acidic oxides? Give two examples.</li>\n      <li>What are basic oxides? Give two examples.</li>\n      <li>What is meant by amphoteric oxides? Provide examples.</li>\n      <li>Evaluate the environmental impact of acidic oxides like SO₂ and CO₂.</li>\n      <li>Evaluate the significance of controlling the emission of oxides like NO₂ and SO₂ in industrial processes.</li>\n    </ol>\n\n    <h3>3. Long Answer Questions</h3>\n    <ol type=\"i\">\n      <li>Explain the environmental impact of nitrogen oxides in the atmosphere, particularly focusing on photochemical smog and acid rain.</li>\n      <li>Discuss the Haber process, including the chemical reaction, sources of reactants, conditions required, and its significance in the production of ammonia.</li>\n      <li>Describe the Contact process for sulphuric acid production, detailing the chemical reactions involved, the sources of reactants, and the industrial conditions used.</li>\n      <li>Compare and contrast acidic, basic, and amphoteric oxides with suitable examples for each type.</li>\n      <li>How do industrial processes like the Haber and Contact processes contribute to environmental pollution, and what measures can be taken to minimize their impact?</li>\n      <li>Compare the roles of NO and NO₂ in the formation of acid rain. How do their chemical behaviours contribute to both direct acid formation and the oxidation of sulphur dioxide?</li>\n      <li>Analyse the classification of oxides. Why are oxides like SO₂ considered acidic, while oxides like CuO are considered basic? Discuss how the metallic or non-metallic character of the element influences this classification.</li>\n    </ol>\n  ",
  "Think Tank": "\n    <h2>THINK TANK</h2>\n    <ol>\n      <li>Explain why gold and platinum are often used in jewellery despite their high cost.</li>\n      <li>If a new metal was discovered and found to react with steam but not cold water, where would you place it in the reactivity series? Justify your placement.</li>\n      <li>Give the expected reactivity series from the following data for the following three metals. Justify your placement.</li>\n      <li>How can the knowledge of basic oxides, such as CaO, be applied to neutralize acidic pollutants in industrial wastewater treatment?</li>\n      <li>Evaluate the choice of 450°C and 200 atm for the Haber process.</li>\n      <li>Evaluate the environmental impact of acidic oxides.</li>\n      <li>Evaluate the significance of controlling the emission of oxides like NO₂ and SO₂ in industrial processes.</li>\n    </ol>\n  "
};

CHEMISTRY_DIGITAL_BOOK["Organic Chemistry"] = {
  "Student Learning Outcomes (SLOs)": "\n    <h2>Student Learning Outcomes (SLOs)</h2>\n    <ul>\n      <li>Name and draw the structural and displayed formulae of unbranched alkanes, alkenes, alcohols, and carboxylic acids, including but-1-ene and but-2-ene, propan-1-ol, propan-2-ol, butan-1-ol and butan-2-ol.</li>\n      <li>State the type of compound present given the chemical name ending in -ane, -ene, -yne, -ol, or -oic acid or from a molecular, structural or displayed formula.</li>\n      <li>Name and draw the displayed formulae of the unbranched esters which can be made from unbranched alcohols and carboxylic acids, each containing up to four carbon atoms.</li>\n    </ul>\n  ",
  "Introduction to Organic Chemistry": "\n    <h2>Organic Chemistry</h2>\n    <p>Organic chemistry is the study of carbon-based compounds, which are fundamental to life and have diverse applications in various industries. Understanding the structures, properties, and reactions of organic molecules is crucial for fields such as medicine, materials science, and environmental science.</p>\n  ",
  "8.1 Structural Formula": "\n    <h2>8.1 Structural Formula</h2>\n    <p>A structural formula shows how different atoms are joined up or arranged in a molecule or compound. You can represent structural formulas in two ways. You can draw it as a displayed structural formula or as a condensed structural formula.</p>\n    <p>A displayed formula is a full structural formula that shows all the bonds between the atoms in a molecule as individual lines. The bonds are represented by lines. The strength of the bond is indicated by the number of lines. Single bonds are represented by one line. Double bonds are represented by two lines. In some molecules, three lines are possible. These formulas are very useful because they show as much information as possible about the molecule.</p>\n    <p>Methane is the simplest alkane. Other examples of alkanes are ethane, propane, butane etc. Displayed formulas are always drawn with the molecule straightened out and flattened. They show exactly how all the atoms are joined together.</p>\n    <p>However, displayed formulas are very large and time-consuming to draw. Condensed structural formulas solve this problem by omitting some of the bonds and grouping some of the atoms together.</p>\n  ",
  "8.1.1 The normal way to draw a structural formula": "\n    <h2>8.1.1 The normal way to draw a structural formula</h2>\n    <p>Except for the smallest molecules, drawing a fully displayed formula is very time-consuming. You can simplify the formula by listing the main chain carbon atoms and the hydrogen atoms attached to them in the sequence they appear, for example CH₃ or CH₂, instead of showing all the carbon-hydrogen bonds.</p>\n    <p>The structural formula for methane could be written as CH₄, and that of ethane as CH₃-CH₃ or CH₃CH₃.</p>\n    <p>A condensed or normal structural formula uses established abbreviations for various groups of chains. It is a simplified version that omits some or all of the bonds. It involves grouping atoms that are connected to the same carbon atom.</p>\n\n    <h3>Table 8.1: Condensed or normal structural formulas of some alkanes</h3>\n    <table class=\"book-table\">\n      <tr><th>Name</th><th>Molecular Formula</th><th>Structural Formula</th></tr>\n      <tr><td>Heptane</td><td>C₇H₁₆</td><td>CH₃CH₂CH₂CH₂CH₂CH₂CH₃</td></tr>\n      <tr><td>Octane</td><td>C₈H₁₈</td><td>CH₃CH₂CH₂CH₂CH₂CH₂CH₂CH₃</td></tr>\n      <tr><td>Nonane</td><td>C₉H₂₀</td><td>CH₃CH₂CH₂CH₂CH₂CH₂CH₂CH₂CH₃</td></tr>\n      <tr><td>Decane</td><td>C₁₀H₂₂</td><td>CH₃CH₂CH₂CH₂CH₂CH₂CH₂CH₂CH₂CH₃</td></tr>\n    </table>\n\n    <h3>Example 8.1</h3>\n    <p>Give the displayed and normal structural formula for pentane.</p>\n    <h3>Problem Solving Strategy</h3>\n    <ol>\n      <li>The stem pent- means five carbon atoms.</li>\n      <li>The ending -ane indicates an alkane.</li>\n      <li>Write a string or chain of five carbon atoms.</li>\n      <li>Attach hydrogen atoms to the carbons to give each carbon atom four bonds.</li>\n      <li>For the structural formula, write each carbon atom’s set of hydrogen atoms next to the carbon.</li>\n    </ol>\n    <h3>Solution</h3>\n    <p>Normal Structural formula: <strong>CH₃-CH₂-CH₂-CH₂-CH₃</strong></p>\n    <p>Or <strong>CH₃CH₂CH₂CH₂CH₃</strong> or <strong>CH₃(CH₂)₃CH₃</strong></p>\n\n    <h3>Concept Assessment Exercise 8.1</h3>\n    <p>Give the displayed and structural formulas for:</p>\n    <ol type=\"a\">\n      <li>Butane</li>\n      <li>Hexane</li>\n    </ol>\n  ",
  "8.1.2 Structural formulae for alkenes": "\n    <h2>8.1.2 Structural formulae for alkenes</h2>\n    <p>Alkenes have one or more double bonds between carbon atoms. They have the general formula CₙH₂ₙ. When two carbon atoms share two pairs of electrons, they form a double covalent bond between the carbon atoms. Doubly bonded carbon atoms form a single bond with two other atoms.</p>\n\n    <h3>Example 8.2</h3>\n    <p>Draw structural and condensed formulas for:</p>\n    <ol type=\"a\">\n      <li>But-1-ene</li>\n      <li>But-2-ene</li>\n    </ol>\n\n    <h3>Problem Solving Strategy</h3>\n    <ol>\n      <li>But- means four carbon atoms.</li>\n      <li>Ending -ene indicates an alkene.</li>\n      <li>Write a string of four carbon atoms and assign a number to each carbon atom from one side.</li>\n      <li>The number written in the name indicates the position of the double bond.</li>\n      <li>Make a double bond between the indicated carbon atom and the atom next to it.</li>\n      <li>Attach enough hydrogen atoms to the carbon atoms to give each carbon atom four bonds.</li>\n    </ol>\n\n    <h3>Solution</h3>\n    <p><strong>But-1-ene:</strong> CH₂=CH-CH₂-CH₃</p>\n    <p><strong>But-2-ene:</strong> CH₃-CH=CH-CH₃</p>\n\n    <h3>Concept Assessment Exercise 8.2</h3>\n    <p>Draw structural and displayed formulas for:</p>\n    <ol type=\"a\">\n      <li>Pent-1-ene</li>\n      <li>Pent-2-ene</li>\n    </ol>\n  ",
  "8.1.3 Structural formulae for alkynes": "\n    <h2>8.1.3 Structural formulae for alkynes</h2>\n    <p>Hydrocarbons which have at least one triple bond between carbon atoms are called alkynes. Those with one triple bond have the general formula CₙH₂ₙ₋₂.</p>\n    <p>Ethyne, also called acetylene, is the simplest member of the alkyne family. In ethyne, the two carbon atoms share three pairs of electrons. This means the carbon atoms are joined by a triple bond.</p>\n    <p>The structure of ethyne is <strong>H-C≡C-H</strong>.</p>\n\n    <h3>Example 8.3</h3>\n    <p>Draw structural formulas for:</p>\n    <ol type=\"a\">\n      <li>But-1-yne</li>\n      <li>But-2-yne</li>\n    </ol>\n\n    <h3>Solution</h3>\n    <p><strong>But-1-yne:</strong> H-C≡C-CH₂-CH₃</p>\n    <p><strong>But-2-yne:</strong> CH₃-C≡C-CH₃</p>\n\n    <h3>Key Differences</h3>\n    <ul>\n      <li>Displayed formulas provide a clear view of how atoms are connected and can reveal structural isomers and the spatial arrangement of atoms.</li>\n      <li>Condensed formulas are more concise and used when detailed bond information is not required, offering a quick way to write the structure of a compound.</li>\n    </ul>\n  ",
  "8.2 Naming Organic Compounds": "\n    <h2>8.2 Naming Organic Compounds</h2>\n    <p>The IUPAC system provides a standardized set of rules for naming organic molecules based on their structure. This helps chemists and researchers accurately identify and differentiate compounds regardless of language or region.</p>\n    <p>IUPAC names convey important information about the molecular structure, such as the type and position of functional groups, the length of carbon chains, and the presence of double or triple bonds.</p>\n    <p>Functional groups serve as a basis for naming organic compounds. A functional group serves to classify organic compounds into different classes. All the compounds with the same functional group belong to the same class.</p>\n    <p>The name has two parts. One part tells how many carbon atoms are there in the longest chain. This part is called the stem. The other part tells about the functional group. This part is called a suffix.</p>\n\n    <h3>Table 8.2: Stem names</h3>\n    <table class=\"book-table\">\n      <tr><th>Stem</th><th>Number of carbon atoms</th></tr>\n      <tr><td>Meth-</td><td>1</td></tr>\n      <tr><td>Eth-</td><td>2</td></tr>\n      <tr><td>Prop-</td><td>3</td></tr>\n      <tr><td>But-</td><td>4</td></tr>\n      <tr><td>Pent-</td><td>5</td></tr>\n      <tr><td>Hex-</td><td>6</td></tr>\n    </table>\n  ",
  "8.2.1 Naming Alkanes": "\n    <h2>8.2.1 Naming Alkanes</h2>\n    <p>Alkanes are hydrocarbons in which all the carbon atoms are joined to each other with single covalent bonds. Their names are coded with the ending “-ane”. Adding the stem before -ane gives the name of the alkane.</p>\n    <p>One carbon alkane is methane, CH₄. Two carbon alkane is ethane, CH₃CH₃. Three carbon alkane is propane, CH₃CH₂CH₃, and four carbon alkane is butane.</p>\n  ",
  "8.2.2 Naming Alkenes": "\n    <h2>8.2.2 Naming Alkenes</h2>\n    <p>Alkenes contain a carbon-carbon double bond. This is shown in their name by the ending “-ene”. For example, a 2-carbon chain containing a carbon-carbon double bond is named ethene, CH₂=CH₂. A 3-carbon chain alkene is named propene, CH₃CH=CH₂.</p>\n    <p>With larger chains, the position of the double bond is indicated by numbering the chain. Numbering is started from the end nearest to the double bond, noting which carbon the double bond starts from.</p>\n    <p>A 4-carbon chain with a double bond starting on carbon number 1 is named <strong>but-1-ene</strong>: CH₂=CHCH₂CH₃.</p>\n    <p>If the double bond starts on the second carbon, the alkene is named <strong>but-2-ene</strong>: CH₃CH=CHCH₃.</p>\n    <p><strong>Note:</strong> Numbering is started from the end which gives the smaller number to the name.</p>\n  ",
  "8.2.3 Naming Alkynes": "\n    <h2>8.2.3 Naming Alkynes</h2>\n    <p>Alkynes contain a carbon-carbon triple bond. This is shown in their name by the ending “-yne”. For example, a 2-carbon chain containing a carbon-carbon triple bond is named ethyne, H-C≡C-H. A 3-carbon chain alkyne is named propyne, CH₃C≡CH.</p>\n    <p>With larger chains, the position of the triple bond is indicated by numbering the chain. Numbering is started from the end nearest to the triple bond.</p>\n    <p>A 4-carbon chain with a triple bond starting on carbon number 1 is named <strong>but-1-yne</strong>. If the triple bond starts on the second carbon, it is named <strong>but-2-yne</strong>.</p>\n\n    <h3>Concept Assessment Exercise 8.3</h3>\n    <ol>\n      <li>Write the name and structural formula of an alkane containing 5-carbon atoms.</li>\n      <li>Write the name and structural formula of an alkene containing 6-carbon atoms with a double bond starting on the third carbon.</li>\n      <li>Which name is correct for CH₃CH₂CH=CHCH₃: Pent-2-ene or Pent-3-ene?</li>\n      <li>Write the structural formula of an alkyne containing 6-carbon atoms with a triple bond starting on the second carbon.</li>\n    </ol>\n  ",
  "8.2.3 Naming Alcohols": "\n    <h2>8.2.3 Naming Alcohols</h2>\n    <p>Alcohols are characterized by the presence of the hydroxyl group -OH attached to a hydrocarbon chain. This is shown by the ending “-ol” in their names.</p>\n    <p>While naming alcohols, the “e” of the alkane containing the same number of carbon atoms is replaced by the suffix “ol”.</p>\n    <p>Examples:</p>\n    <ul>\n      <li>Methane → Methanol</li>\n      <li>Ethane → Ethanol</li>\n      <li>CH₃OH = Methanol</li>\n      <li>CH₃CH₂OH = Ethanol</li>\n      <li>CH₃CH₂CH₂OH = Propan-1-ol</li>\n      <li>CH₃CH(OH)CH₃ = Propan-2-ol</li>\n    </ul>\n\n    <h3>Concept Assessment Exercise 8.4</h3>\n    <ol>\n      <li>Write the name, displayed and structural formula of an alcohol-containing 4-carbon chain with -OH group attached to a second carbon atom.</li>\n      <li>Write the structural formulas of butan-1-ol and butan-2-ol.</li>\n    </ol>\n  ",
  "8.2.4 Naming Carboxylic Acids": "\n    <h2>8.2.4 Naming Carboxylic Acids</h2>\n    <p>The carboxylic acids are characterized by the presence of carboxylic group -COOH attached to a hydrocarbon chain. This is shown by ending “-oic acid” in their names.</p>\n    <p>While naming carboxylic acids, the ending “e” of the name of the corresponding alkane containing the same number of carbon atoms is replaced by “oic acid”.</p>\n    <p>Examples:</p>\n    <ul>\n      <li>HCOOH = Methanoic acid, also called formic acid.</li>\n      <li>CH₃COOH = Ethanoic acid, also called acetic acid.</li>\n      <li>CH₃CH₂COOH = Propanoic acid, also called propionic acid.</li>\n    </ul>\n    <p>The position of carbonyl carbon is not mentioned in the name, because it is always numbered carbon 1. Numbering always starts from the carbonyl carbon atom in naming carboxylic acids.</p>\n\n    <h3>Concept Assessment Exercise 8.5</h3>\n    <ol>\n      <li>Write the name, displayed and structural formulae of a carboxylic acid containing 4-carbon atoms.</li>\n      <li>Identify the class of each compound from their names and write displayed structural formulas and condensed structural formulas: Pent-2-ol, Pentanoic acid, Pent-2-ene, Pentane.</li>\n    </ol>\n  ",
  "8.3 Esters": "\n    <h2>8.3 Esters</h2>\n    <p>Esters are organic compounds that are derived from carboxylic acids and alcohols. Carboxylic acids contain -COOH group, carboxylic group, and can be represented by the general formula RCOOH.</p>\n    <p>When OH of the carboxyl group is replaced by OR′ group from an alcohol, an ester is formed. It has the general formula RCOOR′. The reaction is carried out in the presence of a few drops of dilute sulphuric acid as a catalyst. This reaction is known as esterification reaction. Esters possess a fruity odour.</p>\n    <p><strong>RCOOH + R′OH → RCOOR′ + H₂O</strong></p>\n    <p><strong>CH₃COOH + CH₃OH → CH₃COOCH₃ + H₂O</strong></p>\n    <p>Ethanoic acid reacts with methanol to form methyl ethanoate and water.</p>\n    <p>Their names have two parts. The first part indicates the attached alkyl group from alcohol and the second part is the name of carboxylic acid, where -ic acid is replaced with -ate.</p>\n\n    <h3>Concept Assessment Exercise 8.6</h3>\n    <p>Complete the following reactions and write the names of the reactants and products.</p>\n    <ol>\n      <li>CH₃CH₂COOH + CH₃OH →</li>\n      <li>CH₃CH₂COOH + CH₃CH₂CH₂OH →</li>\n      <li>CH₃COOH + CH₃CH₂OH →</li>\n    </ol>\n  ",
  "Key Points": "\n    <h2>KEY POINTS</h2>\n    <ul>\n      <li>Hydrocarbons are compounds containing carbon and hydrogen only.</li>\n      <li>Hydrocarbons whose carbon-carbon bonds are all single bonds are called alkanes.</li>\n      <li>Alkenes have at least one carbon-carbon double bond between carbon atoms.</li>\n      <li>Alkynes have at least one carbon-carbon triple bond between carbon atoms.</li>\n      <li>The class of organic compounds which have a hydroxyl functional group attached to a hydrocarbon chain are called alcohols.</li>\n      <li>Alcohols are named by changing the ending “e” of the parent alkane by “ol”.</li>\n      <li>The family of compounds which have -COOH functional group attached to the carbon chain are called carboxylic acids.</li>\n      <li>Esters are organic compounds that are derived from carboxylic acids and alcohols.</li>\n    </ul>\n  ",
  "Exercise": "\n    <h2>EXERCISE</h2>\n\n    <h3>1. Multiple Choice Questions (MCQs)</h3>\n    <ol type=\"i\">\n      <li>Which of the following correctly represents the formula for but-2-ene?<br>a) CH₃CH=CHCH₃ b) CH₂=CHCH₂CH₃ c) CH₃CH₂CH=CH₂ d) CH₃C=CHCH₃</li>\n      <li>Given the molecular formula C₄H₁₀O, which compound is most likely to be represented by this formula?<br>a) Butanoic acid b) Butan-1-ol c) But-2-ene d) Butanal</li>\n      <li>Which of the following is the correct IUPAC name for CH₃CH₂CH₂COOH?<br>a) Butanoic acid b) Propanoic acid c) Butanal d) Butanol</li>\n      <li>Identify the true statement regarding propan-1-ol and propan-2-ol.<br>a) Both have identical condensed structural formula. b) They have the same molecular formula. c) They are different compounds with the same structural formula. d) Propan-1-ol is a carboxylic acid, and propan-2-ol is an ester.</li>\n      <li>Name the compound formed by esterification of methanol and propanoic acid.<br>a) Methyl propanoate b) Propyl methanoate c) Ethyl propanoate d) Propyl ethanoate</li>\n      <li>Which molecule contains an -OH functional group?<br>a) Butane b) Ethene c) Butan-1-ol d) But-2-yne</li>\n      <li>If a compound ends in “-oic acid”, what functional group must it contain?<br>a) -OH b) -COOH c) -C=O d) -C=C-</li>\n      <li>Which formula corresponds to an ester formed from butan-1-ol and ethanoic acid?<br>a) CH₃CH₂CH₂CH₂COOCH₃ b) CH₃COOCH₂CH₂CH₂CH₃ c) CH₃CH₂CH₂CH₂CH₂COOH d) CH₃CH₂COOCH₃</li>\n      <li>Which structural formula represents butan-1-ol?<br>a) CH₃CH₂CH₂CH₂OH b) CH₃CH₂CH₂CH₂COOH c) CH₃CH₂CH=CH₂ d) CH₃CH=CHCH₃</li>\n      <li>Identify the compound with formula C₃H₈O and name ending with “-ol”.<br>a) Propanoate b) Propan-2-ol c) Propane d) Propanoic acid</li>\n    </ol>\n\n    <h3>2. Short Answer Questions</h3>\n    <ol type=\"i\">\n      <li>Define the term displayed structural formula in organic chemistry.</li>\n      <li>Explain the difference between an alkane and an alkene.</li>\n      <li>How can you distinguish between an alcohol and a carboxylic acid by their structural formulae?</li>\n      <li>Write the name for CH₃-CH₂-CH₂-CH₂-CH₂-OH.</li>\n      <li>Describe the process of esterification.</li>\n      <li>Given the condensed structural formula CH₃CH₂CH₃, what is the displayed structural formula?</li>\n      <li>Give displayed structural formulae for ethanol and ethanoic acid.</li>\n      <li>Identify the type of organic compounds from the given names and give the normal structural formula of each compound: propyne, propanoic acid, propan-2-ol, methyl propanoate.</li>\n      <li>Identify the type of compound given the name “but-2-ene”.</li>\n      <li>Draw the structural formula of but-1-ene and but-2-ene and explain the difference between them.</li>\n      <li>Draw the displayed formula of ethyl butanoate.</li>\n      <li>Given CH₃COOCH₂CH₃, identify the alcohol and carboxylic acid used to form the ester.</li>\n      <li>From the displayed formula CH₃-C≡C-CH₃, identify the compound and its type.</li>\n      <li>Design the synthesis pathway for converting butan-1-ol into but-1-ene.</li>\n    </ol>\n\n    <h3>3. Long Questions</h3>\n    <ol type=\"i\">\n      <li>Discuss the significance of functional groups in organic chemistry and provide examples.</li>\n      <li>How can you differentiate alkenes, alcohols, and carboxylic acids by looking at their structural formulae?</li>\n      <li>Explain the reaction between an alcohol and a carboxylic acid to form an ester.</li>\n      <li>Explain the chemical reaction process for forming esters from alcohols and carboxylic acids. Draw the structural and displayed formulas of the ester formed from ethanol and propanoic acid.</li>\n      <li>Given the esters methyl methanoate, ethyl ethanoate, and butyl butanoate, give the starting materials required to produce these esters.</li>\n      <li>Explain the significance of the suffixes -ane, -ene, -yne, -ol, and -oic acid in naming organic compounds. Provide examples of each with their molecular and displayed formulas.</li>\n      <li>Compare the functional groups of esters and carboxylic acids. Use specific examples to illustrate your answer.</li>\n      <li>Develop a table that helps you determine the type of organic compound based on its structural formula and functional groups.</li>\n    </ol>\n  ",
  "Think Tank": "\n    <h2>THINK TANK</h2>\n    <ol>\n      <li>Develop a flowchart or decision tree that helps students determine the type of organic compound based on its molecular formula and functional groups.</li>\n      <li>Given the molecular formula C₄H₈O₂, draw possible structural formulas and classify them.</li>\n    </ol>\n  "
};

CHEMISTRY_DIGITAL_BOOK["Hydrocarbons"] = {
  "Student Learning Outcomes (SLOs)": "\n    <h2>Student Learning Outcomes (SLOs)</h2>\n    <ul>\n      <li>State that the bonding in alkene includes a double carbon-carbon covalent bond and that alkenes are unsaturated hydrocarbons.</li>\n      <li>Describe the manufacture of alkenes by cracking large alkane molecules using a high temperature and a catalyst.</li>\n      <li>Describe the reasons for the cracking of large alkane molecules.</li>\n      <li>Describe the test to distinguish between saturated and unsaturated hydrocarbon by their reaction with aqueous bromine and KMnO₄.</li>\n      <li>Describe the properties of alkenes in terms of addition reactions with bromine or aqueous bromine, hydrogen in the presence of nickel catalyst, and steam in the presence of an acid catalyst.</li>\n      <li>Describe, using symbol equations, preparation of alkenes by elimination reaction in halogenoalkanes and alcohols.</li>\n      <li>Identify alkynes as hydrocarbons containing triple carbon-carbon covalent bond and that alkynes are unsaturated hydrocarbons.</li>\n      <li>Describe the use of ethyne as fuel for welding and in artificially ripening fruits.</li>\n      <li>Describe separation of petroleum into useful fractions by fractional distillation.</li>\n      <li>Describe how properties of fractions obtained from petroleum change from bottom to top of the fractionating column: decreasing chain length, higher volatility, lower boiling point, and lower viscosity.</li>\n      <li>Name the uses of petroleum fractions such as refinery gas, gasoline, naphtha, kerosene, diesel oil, fuel oil, lubricating oil, and bitumen.</li>\n      <li>Name fossil fuels: coal, natural gas and petroleum.</li>\n      <li>Name methane as the main constituent of natural gas.</li>\n      <li>State that petroleum is a mixture of hydrocarbons containing hydrogen and carbon only.</li>\n    </ul>\n  ",
  "Introduction to Hydrocarbons": "\n    <h2>Hydrocarbons</h2>\n    <p>Hydrocarbons are organic compounds composed solely of carbon C and hydrogen H. Carbon atoms attach to each other to form the backbone of the compound. Hydrogen atoms attach to the carbon atoms in a variety of ways.</p>\n    <p>Hydrocarbons make up the major component of petroleum and natural gas, methane. They are raw materials for plastics, fibers, explosives, and many industrial chemicals.</p>\n  ",
  "9.1 Saturated and Unsaturated Hydrocarbons": "\n    <h2>9.1 Saturated and Unsaturated Hydrocarbons</h2>\n    <p>Hydrocarbons are compounds containing carbon and hydrogen only. Hydrocarbons whose carbon-carbon bonds are all single bonds are called saturated. Saturated hydrocarbons are also called alkanes.</p>\n    <p>In alkanes, each carbon atom is bonded to four other atoms. Methane is the simplest alkane. Other examples are ethane, propane, butane, etc. The general formula of alkanes is CₙH₂ₙ₊₂, where n is the number of carbon atoms.</p>\n    <p>Hydrocarbons containing carbon-carbon multiple bonds are called unsaturated. Unsaturated hydrocarbons are further divided into alkenes and alkynes.</p>\n    <p>Unsaturated hydrocarbons containing at least one carbon-carbon double bond are called alkenes. They have the general formula CₙH₂ₙ, for example ethene.</p>\n    <p>Unsaturated hydrocarbons that have at least one carbon-carbon triple bond are called alkynes. They have the general formula CₙH₂ₙ₋₂, for example ethyne.</p>\n\n    <h3>Concept Assessment Exercise 9.1</h3>\n    <p>Choose saturated and unsaturated compounds from the following:</p>\n    <ol>\n      <li>CH₃-CH₂-CH₃</li>\n      <li>CH₃-C≡CH</li>\n      <li>CH₃-CH=CH₂</li>\n      <li>CH₂=CH-CH=CH₂</li>\n    </ol>\n  ",
  "9.2 Alkenes": "\n    <h2>9.2 Alkenes</h2>\n    <p>Alkenes have one or more double bonds between carbon atoms. They have the general formula CₙH₂ₙ. When two carbon atoms share two pairs of electrons, they form a double bond between the carbon atoms. Doubly bonded carbon atoms form a single bond with two other atoms.</p>\n    <p>Ethylene or ethene is an important commercial organic chemical. It is converted to ethylene glycol, which is used as antifreeze in automobile radiators.</p>\n  ",
  "9.2.1 Preparation of Alkene": "\n    <h2>9.2.1 Preparation of Alkene</h2>\n\n    <h3>1. By the cracking of large alkanes</h3>\n    <p>A large alkane molecule breaks up into smaller hydrocarbons when heated at high temperatures such as 450-750°C and high pressure. This process is called thermal cracking. This process produces a mixture of alkanes and alkenes.</p>\n    <p>For example, when decane is heated at high temperatures and pressure, it breaks into octane and ethene.</p>\n    <p><strong>C₁₀H₂₂ → C₈H₁₈ + C₂H₄</strong></p>\n    <p>Large alkane molecules can also be broken into smaller pieces by catalytic cracking. In catalytic cracking, alkanes are heated at 550°C in the presence of a catalyst such as zeolite.</p>\n    <p>Catalytic cracking gives a higher percentage of hydrocarbons containing 5 to 10 carbon atoms. Cracking gives a mixture of smaller hydrocarbons containing a higher proportion of alkenes.</p>\n    <p>These hydrocarbons are more volatile and possess lower boiling points, making them easier to use as better fuels. Their combustion can be controlled and they produce large amounts of heat per gram.</p>\n\n    <h3>2. By Dehydration of Alcohols</h3>\n    <p>Dehydration means loss of water. Alcohols dehydrate when their vapours are passed over heated alumina to give alkenes.</p>\n    <p><strong>CH₃CH₂OH → CH₂=CH₂ + H₂O</strong></p>\n    <p>Phosphoric acid H₃PO₄ and phosphorus pentoxide P₂O₅ can also be used as catalysts for dehydration of alcohols. Concentrated sulphuric acid is also used for dehydration.</p>\n    <p>In a dehydration reaction, the -OH group is removed from one carbon and the H atom from the adjacent carbon atom, resulting in formation of a double bond between such carbon atoms. Such a reaction is called an elimination reaction.</p>\n\n    <h3>3. By dehydrohalogenation of halogenoalkanes</h3>\n    <p>Dehydrohalogenation means loss of hydrogen halide. Halogenoalkanes on heating with alcoholic potassium hydroxide undergo dehydrohalogenation.</p>\n    <p><strong>CH₃CH₂Cl + KOH alcoholic → CH₂=CH₂ + KCl + H₂O</strong></p>\n    <p>Removal of H and halogen takes place from two adjacent carbon atoms. Dehydrohalogenation is an elimination reaction.</p>\n\n    <h3>Concept Assessment Exercise 9.2</h3>\n    <p>Complete the reactions and identify the alkene formed by dehydration of the given alcohol.</p>\n  ",
  "9.2.2 Properties of Alkenes": "\n    <h2>9.2.2 Properties of Alkenes</h2>\n\n    <h3>a. Physical Properties</h3>\n    <p>Alkenes are unsaturated hydrocarbons. The first three members, ethene, propene and butene, are gases while C₅-C₁₅ members are liquids, and the higher members are solids. They are insoluble in water but soluble in organic solvents such as alcohol.</p>\n\n    <h3>b. Chemical Properties</h3>\n    <p>The two carbon atoms forming the double bond are the site where other molecules can attack, giving addition reactions.</p>\n\n    <h3>1. Reaction with halogens</h3>\n    <p>Chlorine and bromine are added to the double bond C=C. One bromine atom becomes attached to one carbon and another bromine atom to the other carbon. Such a type of reaction is called an addition reaction.</p>\n    <p>Alkenes react with bromine water in the same way. Bromine is a reddish-brown liquid and the product is colourless. When bromine water is added to an alkene, the red-brown colour disappears.</p>\n    <p>The decolourization of bromine solution is frequently used as a simple test for the detection of unsaturation. Alkynes also give this reaction.</p>\n\n    <h3>2. Reaction with KMnO₄</h3>\n    <p>When an alkene is treated with a dilute alkaline aqueous solution of KMnO₄, addition of two hydroxyl groups occurs across the double bond. The pink colour of KMnO₄ solution is discharged during the reaction.</p>\n    <p>This reaction is used as a test for the presence of an unsaturated compound like alkene and is known as Baeyer’s test. Saturated hydrocarbons do not give this reaction.</p>\n    <p><strong>3CH₂=CH₂ + 2KMnO₄ + 4H₂O → 3C₂H₄(OH)₂ + 2MnO₂ + 2KOH</strong></p>\n    <p>Ethylene glycol is used as an anti-freeze.</p>\n\n    <h3>3. Hydrogenation of alkenes</h3>\n    <p>The addition of hydrogen molecules across a carbon-carbon multiple bond is called hydrogenation. Hydrogenation takes place in the presence of finely divided nickel at 200-300°C and high pressure.</p>\n    <p><strong>CH₂=CH₂ + H₂ → CH₃-CH₃</strong></p>\n\n    <h3>4. Hydration of alkenes</h3>\n    <p>Alkenes produce alcohol on treatment with steam. Phosphoric acid is used as a catalyst in this reaction. Ethanol is commercially produced by this reaction.</p>\n    <p><strong>CH₂=CH₂ + H₂O → CH₃CH₂OH</strong></p>\n  ",
  "9.3 Alkyne": "\n    <h2>9.3 Alkyne</h2>\n    <p>Hydrocarbons that have at least one triple bond between carbon atoms are called alkynes. This means alkynes are unsaturated hydrocarbons. Alkynes with one triple bond have the general formula CₙH₂ₙ₋₂.</p>\n    <p>Ethyne, also called acetylene, is the simplest member of the alkyne family. In ethyne, the two carbon atoms share three pairs of electrons. This means the carbon atoms are joined by a triple bond.</p>\n    <p><strong>H-C≡C-H</strong></p>\n  ",
  "Commercial Importance of Ethyne": "\n    <h2>Commercial Importance of Ethyne</h2>\n    <p>Ethyne has great commercial importance. It is also known as acetylene and is commonly used in cutting and welding metals. When it is ignited in oxygen or air, it burns with a bluish colour producing a very hot flame called oxy-acetylene flame.</p>\n    <p>Its temperature is about 3200°C. Oxy-acetylene flame has the highest flame temperature of all other fuel gases. Welding and cutting of metals require high temperatures. Therefore, ethyne is used for this purpose.</p>\n    <p>Another advantage of ethyne is its use in the artificial ripening of fruits. Calcium carbide, when coming in contact with moisture, produces ethyne gas. This ethyne promotes ripening and also induces colour changes in fruits.</p>\n    <p>However, its use can lead to exposure to harmful chemicals that can cause respiratory issues and other health problems.</p>\n    <p><strong>CaC₂ + H₂O → C₂H₂ + Ca(OH)₂</strong></p>\n  ",
  "9.4 Distinguishing saturated and unsaturated hydrocarbons": "\n    <h2>9.4 Distinguishing saturated and unsaturated hydrocarbons</h2>\n    <p>To distinguish between saturated and unsaturated hydrocarbons, you can perform the bromine water test. This test involves adding bromine water, Br₂ in water, which is an orange-brown solution, to the hydrocarbon and observing the colour change.</p>\n\n    <h3>Procedure</h3>\n    <ol>\n      <li>Add bromine water to the hydrocarbon sample.</li>\n      <li>Observe the colour change.</li>\n    </ol>\n\n    <h3>Observations</h3>\n    <ul>\n      <li>Saturated hydrocarbons, alkanes, will not react with bromine water. The solution will remain orange-brown.</li>\n      <li>Unsaturated hydrocarbons, alkenes and alkynes, will react with bromine water. The solution will decolourize, turning colourless, because bromine reacts with the double or triple bonds.</li>\n    </ul>\n\n    <h3>Symbol Equations</h3>\n    <p>Ethene reacts with bromine to form dibromoethane.</p>\n    <p>Ethyne reacts with bromine to form tetrabromoethane.</p>\n    <p>Ethane does not react with bromine water, so the colour remains unchanged.</p>\n  ",
  "Baeyer’s Test": "\n    <h2>Baeyer’s Test</h2>\n    <p>Baeyer’s test is another method to distinguish between saturated and unsaturated hydrocarbons. This test involves using a cold, dilute alkaline aqueous solution of potassium permanganate KMnO₄, which is purple.</p>\n    <h3>Procedure</h3>\n    <ol>\n      <li>Add a few drops of cold, dilute alkaline aqueous KMnO₄ solution to the hydrocarbon.</li>\n      <li>Shake the mixture and observe the colour change.</li>\n    </ol>\n    <h3>Observation</h3>\n    <ul>\n      <li>Saturated hydrocarbons, alkanes, do not react with KMnO₄ and the solution remains purple.</li>\n      <li>Unsaturated hydrocarbons, alkenes, react with KMnO₄, causing the solution to become colourless as the permanganate ion is reduced to manganese dioxide, MnO₂, which precipitates as a brown solid.</li>\n    </ul>\n    <p><strong>3C₂H₄ + 2KMnO₄ + 4H₂O → 3C₂H₄(OH)₂ + 2MnO₂ + 2KOH</strong></p>\n    <p>Alkynes do not react with cold 1% alkaline aqueous solution of KMnO₄, Baeyer’s agent.</p>\n  ",
  "Activity 9.1": "\n    <h2>Activity 9.1</h2>\n    <p>To distinguish between saturated, butter representing saturated hydrocarbon, and unsaturated, vegetable oil representing an unsaturated hydrocarbon, hydrocarbons based on the reaction with bromine.</p>\n\n    <h3>Materials Required</h3>\n    <ul>\n      <li>Vegetable oil, such as olive oil or sunflower oil</li>\n      <li>Butter or lard</li>\n      <li>Bromine water</li>\n      <li>Two small glass containers or test tubes</li>\n      <li>Droppers or pipettes</li>\n      <li>Safety goggles and gloves</li>\n      <li>Lab apron</li>\n      <li>White paper or white tiles</li>\n      <li>Tongs or test tube holders</li>\n      <li>Fume hood or well-ventilated area</li>\n    </ul>\n\n    <h3>Safety Precautions</h3>\n    <ul>\n      <li>Ensure all students wear safety goggles, gloves, and lab aprons.</li>\n      <li>Conduct the experiment in a well-ventilated area or fume hood.</li>\n      <li>Explain the hazards associated with bromine water and the importance of not directly inhaling or contacting the solution.</li>\n    </ul>\n\n    <h3>Procedure</h3>\n    <ul>\n      <li>Pour about 5 mL of vegetable oil into one glass container or test tube.</li>\n      <li>Place a small piece of butter in another glass container or test tube.</li>\n      <li>Label each container appropriately, such as Vegetable Oil and Butter.</li>\n      <li>Using a dropper, add a few drops of bromine water to each container.</li>\n      <li>Observe and note the initial colour of the bromine water, orange-brown.</li>\n    </ul>\n\n    <h3>Observations</h3>\n    <ul>\n      <li>Vegetable oil: the bromine water will react with the double bonds in the unsaturated hydrocarbons, causing the orange-brown colour to disappear or lighten.</li>\n      <li>Butter: the bromine water will remain orange-brown, indicating no reaction.</li>\n    </ul>\n  ",
  "9.5 Fossil Fuels": "\n    <h2>9.5 Fossil Fuels</h2>\n    <p>Fossil fuels are natural energy sources. Fossil fuels are a non-renewable energy source. It is believed that they are formed from the remains of ancient organisms. They include coal, natural gas, and petroleum.</p>\n  ",
  "9.5.1 Coal": "\n    <h2>9.5.1 Coal</h2>\n    <p>Coal is a material usually found in sedimentary rock deposits where rock and dead plant and animal matter are piled up in layers. It can be burned for fuel and used to generate electricity.</p>\n    <p>Coal is the leading source of energy in the world. Because coal takes millions of years to develop and there is a limited amount of it, it is a non-renewable resource.</p>\n  ",
  "9.5.2 Natural Gas": "\n    <h2>9.5.2 Natural Gas</h2>\n    <p>Natural gas is a gaseous mixture of hydrocarbons that occurs naturally. The main component of natural gas is methane. It also contains small amounts of other higher alkanes such as ethane, propane, and butane, as well as trace gases such as carbon dioxide CO₂, nitrogen N₂, hydrogen sulfide H₂S, and helium.</p>\n    <p>Natural gas is used extensively for heating, electricity generation, and as a fuel for vehicles and spacecraft.</p>\n  ",
  "9.5.3 Petroleum": "\n    <h2>9.5.3 Petroleum</h2>\n    <p>The name petroleum is derived from Latin words, petra meaning rock and oleum meaning oil. It is also known as crude oil. Petroleum or crude oil is a thick dark liquid composed mostly of hydrocarbons.</p>\n    <p>Natural gas, usually associated with petroleum deposits, consists mostly of methane. It also contains significant amounts of ethane, propane, and butane.</p>\n    <p>Petroleum is extracted by drilling holes into the earth’s crust where it is found. When a drill is made through the rocks, natural gas comes out first with great pressure. After the gas pressure subsides, crude oil is extracted by pumps.</p>\n  ",
  "9.6 Separating crude oil": "\n    <h2>9.6 Separating crude oil</h2>\n    <p>Refining is the process of separating crude oil into usable products. These useful products contain a group of hydrocarbon molecules that have similar chain lengths, similar boiling points, and condense over a range of temperatures. These groups of hydrocarbons are called fractions.</p>\n    <p>Each useful fraction consists of a combination of different hydrocarbons that boil at a specific temperature. Oil refining takes place in a high-temperature fractionation tower, where the temperature at the top of the tower is colder than at the bottom.</p>\n    <p>Crude oil is heated under high pressure in a furnace to a temperature of 400°C. The oil is then passed through a distillation column where vapour rises. As the hot vapour moves up the tower, it condenses into different fractions according to boiling point.</p>\n    <p>Compounds with the highest boiling point condense near the bottom, compounds with the lowest boiling point at the top, and non-boiling compounds collect at the bottom. Therefore, crude oil is divided into several fractions.</p>\n\n    <h3>Table 9.1: Fractions of petroleum and their uses</h3>\n    <table class=\"book-table\">\n      <tr><th>Fraction</th><th>Important use</th></tr>\n      <tr><td>Refinery gas</td><td>Gas used in heating and cooking</td></tr>\n      <tr><td>Gasoline / petrol</td><td>Fuel for motor cars</td></tr>\n      <tr><td>Naphtha</td><td>Chemical feedstock for making drugs, plastics and other chemicals</td></tr>\n      <tr><td>Kerosene / paraffin</td><td>Jet fuel, fuel for heating, lighting and cooking</td></tr>\n      <tr><td>Diesel oil / gas oil</td><td>Fuel for diesel engines of buses, trucks and trains</td></tr>\n      <tr><td>Lubricating oil</td><td>Lubricants for machines, waxes and polishes</td></tr>\n      <tr><td>Fuel oil</td><td>Fuel for power stations, factories, ships and home heating systems</td></tr>\n      <tr><td>Bitumen</td><td>Paving roads and making roofing materials</td></tr>\n    </table>\n\n    <p>As the length of the hydrocarbon carbon chain increases, the strength of the intermolecular force also increases. Bitumen has the longest carbon chain, highest boiling point, highest viscosity, lowest volatility, and darkest colour.</p>\n    <p>As you move from bottom to top, the chain length of carbon atoms in different fractions gradually decreases. Thus, boiling points and viscosity also decrease. However, the weakening of intermolecular forces increases the volatility of the fractions.</p>\n\n    <h3>Concept Assessment Exercise 9.5</h3>\n    <ol>\n      <li>List names of fractions obtained by the fractional distillation of petroleum.</li>\n      <li>List one use of each petroleum fraction.</li>\n      <li>How is petroleum obtained?</li>\n    </ol>\n  ",
  "Key Points": "\n    <h2>KEY POINTS</h2>\n    <ul>\n      <li>Hydrocarbons are compounds containing carbon and hydrogen only.</li>\n      <li>Hydrocarbons whose carbon-carbon bonds are all single bonds are called saturated.</li>\n      <li>Hydrocarbons containing carbon-carbon multiple bonds are called unsaturated.</li>\n      <li>Unsaturated hydrocarbons containing at least one carbon-carbon double bond are called alkenes.</li>\n      <li>Unsaturated hydrocarbons that have at least one carbon-carbon triple bond are called alkynes.</li>\n      <li>In catalytic cracking, alkanes are heated at 550°C in the presence of a catalyst such as zeolite.</li>\n      <li>Dehydration means loss of water.</li>\n      <li>Dehydrohalogenation means loss of hydrogen halide.</li>\n      <li>The name petroleum is derived from Latin words, petra meaning rock and oleum meaning oil. It is also known as crude oil.</li>\n    </ul>\n  ",
  "Exercise": "\n    <h2>EXERCISE</h2>\n\n    <h3>1. Multiple Choice Questions (MCQs)</h3>\n    <ol type=\"i\">\n      <li>Alkenes have one or more double bonds between carbon atoms. How many electrons are left on each carbon atom?<br>a) 2 b) 3 c) 1 d) 4</li>\n      <li>The type of bond present between the carbon atoms in alkynes is:<br>a) Single covalent bond b) Double covalent bond c) Triple covalent bond d) Saturated covalent bond</li>\n      <li>Alkenes are classified as:<br>a) Saturated hydrocarbons b) Unsaturated hydrocarbons c) Aromatic hydrocarbons d) None of the above</li>\n      <li>Cracking of large alkane molecules requires:<br>a) Low temperature and pressure b) High temperature and catalyst c) Low temperature and catalyst d) High temperature and high pressure</li>\n      <li>Which is a product of cracking large alkane molecules?<br>a) Carbon dioxide b) Alkenes c) Water d) Hydrogen</li>\n      <li>The chemical test to distinguish between alkanes and alkenes involves:<br>a) Limewater b) Bromine water c) Litmus paper d) Universal indicator</li>\n      <li>Alkynes contain which type of carbon-carbon bond?<br>a) Single covalent bond b) Double covalent bond c) Triple covalent bond d) Saturated covalent bond</li>\n      <li>Ethyne is commonly used for:<br>a) Cooking b) Welding c) Fuel for cars d) Heating</li>\n      <li>Fractional distillation separates petroleum into fractions based on:<br>a) Density b) Boiling point c) Viscosity d) Solubility</li>\n      <li>Which property increases as you move from the bottom to the top of the fractionating column?<br>a) Volatility b) Chain length c) Boiling point d) Viscosity</li>\n      <li>The gasoline / petrol fraction from petroleum is primarily used for:<br>a) Jet fuel b) Heating c) Car fuel d) Chemical feedstock</li>\n      <li>Doubly bonded carbon atoms form which type of bond with two other atoms?<br>a) Single b) Double c) Triple d) None</li>\n    </ol>\n\n    <h3>2. Short Answer Questions</h3>\n    <ol type=\"i\">\n      <li>Describe the bonding in alkenes.</li>\n      <li>What are the conditions required for the cracking of alkanes?</li>\n      <li>Why is the cracking of large alkane molecules important in the petroleum industry?</li>\n      <li>How can you test for the presence of an unsaturated hydrocarbon?</li>\n      <li>Write the symbol equation for the preparation of ethene from ethanol.</li>\n      <li>What type of bond is present in alkynes?</li>\n      <li>Name two uses of ethyne.</li>\n      <li>What is the principle behind the fractional distillation of petroleum?</li>\n      <li>How does the boiling point of fractions change from the bottom to the top of the fractionating column?</li>\n      <li>List two uses of the naphtha fraction obtained from petroleum.</li>\n      <li>How can you distinguish between propane and propene?</li>\n      <li>Explain why alkenes are considered unsaturated hydrocarbons and write conditions for cracking.</li>\n      <li>Write the symbol equation for cracking of decane to produce ethene and octane.</li>\n      <li>Why is cracking of large alkanes necessary in the petroleum industry?</li>\n      <li>Explain why ethyne is considered an unsaturated hydrocarbon.</li>\n      <li>Explain why ethyne is an effective fuel for welding.</li>\n      <li>Discuss the potential health risks associated with using ethyne for artificially ripening fruits.</li>\n      <li>Explain why the refinery gas fraction is more volatile than the fuel oil fraction.</li>\n    </ol>\n\n    <h3>3. Long Answer Questions</h3>\n    <ol type=\"i\">\n      <li>Explain the process of fractional distillation of petroleum, including how the properties of fractions change from the bottom to the top of the fractionating column.</li>\n      <li>Discuss the significance of cracking in the petroleum industry and how it helps in meeting the demand for various hydrocarbons.</li>\n      <li>Describe the preparation of alkenes by elimination reactions from halogenoalkanes and alcohols, providing balanced chemical equations for each process.</li>\n    </ol>\n  ",
  "Think Tank": "\n    <h2>THINK TANK</h2>\n    <ol>\n      <li>Compare the economic benefits of producing alkenes via cracking versus extracting them directly from crude oil.</li>\n      <li>Describe the chemical properties of ethyne that make it suitable for welding.</li>\n      <li>In a laboratory, you need to distinguish between a sample of hexane and hexene. Describe the test to distinguish between them.</li>\n    </ol>\n  "
};

CHEMISTRY_DIGITAL_BOOK["Hydroxy Compounds"] = {
  "Student Learning Outcomes (SLOs)": "\n    <h2>Student Learning Outcomes (SLOs)</h2>\n    <ul>\n      <li>Describe the manufacture of ethanol by fermentation of aqueous glucose at 25-35°C in the presence of yeast and in the absence of oxygen.</li>\n      <li>Describe the manufacture of ethanol by catalytic addition of steam to ethene at 300°C and 600kPa / 6 atm in the presence of an acid catalyst.</li>\n      <li>Compare the advantages and disadvantages of fermentation and hydration of ethene.</li>\n      <li>Describe the combustion of alcohols.</li>\n      <li>Discuss the applications of alcohols as fuels, including their advantages over fossil fuels.</li>\n      <li>Explain the role of alcohols in pharmaceuticals, cosmetics, and fuel production.</li>\n      <li>Discuss the impact of alcohols on daily life, including their uses as solvents and disinfectants.</li>\n    </ul>\n  ",
  "Introduction to Hydroxy Compounds": "\n    <h2>Hydroxy Compounds</h2>\n    <p>An alcohol is an organic compound in chemistry that contains at least one hydroxy functional group attached to a saturated carbon atom. The class of organic compounds which have a hydroxyl functional group attached to a hydrocarbon chain are called alcohols.</p>\n    <p>There are many different types of alcohols, ranging from simple examples such as methanol CH₃OH and ethanol CH₃CH₂OH to complex alcohols like sugar, cholesterol, etc.</p>\n  ",
  "10.1 Manufacture of Ethanol": "\n    <h2>10.1 Manufacture of Ethanol</h2>\n    <p>Ethanol can be manufactured by two important methods: fermentation of glucose and hydration of ethene. Fermentation uses renewable resources and lower energy, while hydration of ethene is a faster industrial process.</p>\n  ",
  "Making ethanol by fermentation": "\n    <h2>1. Making ethanol by fermentation</h2>\n    <p>When aqueous glucose is mixed with yeast and left for several days at 25-35°C in the absence of oxygen, enzymes present in yeast convert the glucose into ethanol and carbon dioxide. This process is called fermentation.</p>\n    <p><strong>C₆H₁₂O₆(aq) → 2CH₃CH₂OH(aq) + 2CO₂(g)</strong></p>\n    <p>The fermentation process produces 10-15% ethanol. The yeast is killed beyond this concentration. The ethanol is separated from the mixture by fractional distillation, which gives 96% pure alcohol also called rectified spirit.</p>\n    <p>The remaining 4% of water cannot be removed by fractional distillation. Rectified spirit is converted into 100% pure ethanol by using a dehydrating agent such as concentrated H₂SO₄. This method uses renewable resources and low energy levels.</p>\n  ",
  "Making ethanol by the hydration of ethene": "\n    <h2>2. Making ethanol by the hydration of ethene</h2>\n    <p>Ethanol is produced when steam is added to ethene at 300°C and 6000kPa / 6 atm in the presence of phosphoric acid as a catalyst.</p>\n    <p><strong>CH₂=CH₂(g) + H₂O(g) → CH₃CH₂OH(g)</strong></p>\n    <p>Only 4% of ethene is converted into ethanol. The ethanol produced is condensed into liquid and unreacted ethene is recycled in the process. By repeating these steps, 96% ethanol is produced. This method uses non-renewable resources and high energy levels.</p>\n\n    <h3>Comparing hydration and fermentation</h3>\n    <table class=\"book-table\">\n      <tr><th>Hydration of ethene</th><th>Fermentation of glucose</th></tr>\n      <tr><td>The raw material is ethene, which comes from crude oil, a non-renewable source.</td><td>The raw material is glucose, which comes from plants such as sugar cane, a renewable source.</td></tr>\n      <tr><td>Continuous process and efficient.</td><td>Batch process and less efficient.</td></tr>\n      <tr><td>Fast reaction.</td><td>Slow reaction.</td></tr>\n      <tr><td>Produces pure ethanol.</td><td>Produces impure ethanol, so needs further processing.</td></tr>\n      <tr><td>Requires high temperature and pressure, so needs a lot of energy.</td><td>Requires moderate temperature, so less energy is required.</td></tr>\n    </table>\n  ",
  "10.2 Combustion of Alcohols": "\n    <h2>10.2 Combustion of Alcohols</h2>\n    <p>Alcohols are flammable organic compounds. They burn in the air due to the presence of a hydrocarbon chain. Just like fossil fuels, all alcohols burn in the presence of oxygen to form carbon dioxide, water and release energy. This feature makes it possible to use alcohol as a fuel.</p>\n    <p>In countries where there is no oil industry, ethanol produced by fermentation is used as an alternative fuel to imported oil.</p>\n    <p><strong>CH₃OH + 2O₂ → CO₂ + 2H₂O + heat</strong></p>\n    <p><strong>CH₃CH₂OH + 3O₂ → 2CO₂ + 3H₂O + heat</strong></p>\n  ",
  "10.2.1 Application of Alcohols as Fuels": "\n    <h2>10.2.1 Application of Alcohols as Fuels</h2>\n    <p>Methanol has been used as an alternative fuel for cars. However, it has low energy content compared to gasoline, diesel, or ethanol, so methanol reduces the driving range of vehicles.</p>\n    <p>Ethanol is a more useful fuel. It produces about two-thirds as much energy per litre as gasoline. Ethanol has a higher octane number than gasoline. Petrol blended with 10-20% ethanol is used in many countries, for example Brazil. This mixture is commonly known as gasohol.</p>\n    <p>Ethanol not only increases the octane value of fuel but also cuts down the formation of carbon monoxide and other smog-causing emissions. Moreover, ethanol is a renewable energy source, whereas fossil fuels are non-renewable. Pollution is a major disadvantage of fossil fuels.</p>\n    <p>According to recent studies conducted at Harvard, USA, corn-based ethanol reduces greenhouse gas emissions by roughly 40-50%.</p>\n    <p>The disadvantage of using alcohols as fuel is that they can corrode certain materials used in engines. This is due to their much hygroscopic nature than gasoline, so they absorb significant amounts of water from air.</p>\n  ",
  "10.3 Role of alcohols in the pharmaceutical industry": "\n    <h2>10.3 Role of alcohols in the pharmaceutical industry</h2>\n    <p>Alcohols have many important roles in the pharmaceutical industry. Some of these are:</p>\n    <ul>\n      <li>Alcohols such as ethanol and isopropanol are used as solvents.</li>\n      <li>Ethanol is used in the production of herbal extracts and homoeopathy in the preparation of liquid potencies.</li>\n      <li>Alcohols are used for sterilization and disinfection of equipment, surfaces and pharmaceutical manufacturing areas.</li>\n      <li>Isopropyl alcohol or isopropanol is useful for disinfecting and sterilizing because it can kill or inhibit the growth of many microorganisms.</li>\n      <li>Alcohols show rapid antibacterial properties against vegetative bacteria, viruses, and fungi.</li>\n      <li>They are used in medicines as antiseptic and disinfectant in topical formulations such as creams or lotions.</li>\n      <li>As solvents, alcohols diffuse active pharmaceutical ingredients through the skin, making them easier to administer and more effective.</li>\n      <li>Ethanol and isopropanol are also used as antiseptic agents in disinfectant wipes and alcohol swabs before injection or surgery.</li>\n    </ul>\n  ",
  "10.4 Role of alcohols in the cosmetic industry": "\n    <h2>10.4 Role of alcohols in the cosmetic industry</h2>\n    <p>Ethanol is widely used in the cosmetic industry because of its antibacterial, antiviral, antimicrobial, and antifungal qualities. It is used in hygiene products such as deodorants, skin care products, toners, perfumes, and skin lotions.</p>\n    <p>Alcohols keep cosmetic ingredients together in a formulation and prevent them from separating. Alcohols also increase the adhering properties of a product.</p>\n  ",
  "10.5 Impact of alcohols on Everyday Life Public Health": "\n    <h2>10.5 Impact of alcohols on Everyday Life Public Health</h2>\n    <p>Alcohols significantly impact daily life through their diverse applications as solvents and disinfectants. Their chemical properties make them invaluable in medical, industrial, and household contexts, contributing to health, hygiene, and convenience.</p>\n    <p>Alcohols are widely used in household and industrial cleaners, paints, and inks.</p>\n    <p>Alcohol-based disinfectants are widely used and play an important role in controlling the spread of infections, especially during pandemics such as COVID-19. Alcohols’ solubility and rapid drying make them easy to use in a variety of applications, improving the efficiency and effectiveness of many products. Alcohols are effective in sanitizing surfaces and hands, especially in healthcare settings.</p>\n  ",
  "Key Points": "\n    <h2>KEY POINTS</h2>\n    <ul>\n      <li>Enzymes present in yeast convert glucose into ethanol and carbon dioxide in the absence of air. This process is called fermentation.</li>\n      <li>The fermentation process produces 10-15% ethanol.</li>\n      <li>Ethanol is produced when steam is added to ethene at 300°C and 6000kPa / 6 atm in the presence of phosphoric acid as catalyst.</li>\n      <li>96% pure alcohol is also called rectified spirit.</li>\n      <li>Ethanol is used in the production of herbal extracts and homoeopathy in the preparation of liquid potencies.</li>\n      <li>Alcohols exhibit rapid antibacterial properties against vegetative bacteria, viruses, and fungi.</li>\n      <li>Petrol blended with 10-20% ethanol is commonly known as gasohol.</li>\n      <li>Ethanol has a higher octane number than gasoline.</li>\n      <li>Ethanol cuts down the formation of carbon monoxide and other smog-causing emissions.</li>\n      <li>Ethanol is widely used in the cosmetic industry because of its antibacterial, antiviral, antimicrobial, and antifungal qualities.</li>\n    </ul>\n  ",
  "Exercise": "\n    <h2>EXERCISE</h2>\n    <h3>1. Multiple Choice Questions (MCQs)</h3>\n    <ol type=\"i\">\n      <li>What is the optimal temperature range for fermentation of glucose to produce ethanol?<br>a) 0-10°C b) 25-35°C c) 50-60°C d) 70-80°C</li>\n      <li>Which organism is used in the fermentation process to produce ethanol?<br>a) Bacteria b) Yeast c) Algae d) Molds</li>\n      <li>What is the catalyst used in the catalytic hydration of ethene to ethanol?<br>a) Sulfuric acid b) Hydrochloric acid c) Phosphoric acid d) Nitric acid</li>\n      <li>What is the primary by-product of ethanol fermentation?<br>a) Methane b) Oxygen c) Carbon dioxide d) Water</li>\n      <li>Which of the following is a major advantage of using ethanol as a fuel?<br>a) High cost b) Non-renewable c) Clean burning d) Low energy density</li>\n      <li>What is the chemical formula for ethanol?<br>a) CH₃OH b) C₂H₆ c) C₂H₅OH d) C₃H₇OH</li>\n      <li>Which process requires high pressure and temperature for ethanol production?<br>a) Fermentation b) Catalytic hydration c) Distillation d) Sublimation</li>\n      <li>Ethanol combustion primarily produces:<br>a) CO and H₂O b) CO₂ and H₂ c) CO₂ and H₂O d) CO and H₂</li>\n      <li>What is the disadvantage of ethanol production through fermentation?<br>a) High-temperature requirement b) Slow process c) High-pressure requirement d) Uses non-renewable resources</li>\n      <li>Which industry uses alcohol extensively as a solvent?<br>a) Agriculture b) Pharmaceuticals c) Mining d) Construction</li>\n    </ol>\n\n    <h3>2. Short Answer Questions</h3>\n    <ol type=\"i\">\n      <li>What is the chemical equation for the fermentation of glucose to ethanol?</li>\n      <li>Name two advantages of producing ethanol via fermentation.</li>\n      <li>What catalyst is used in the catalytic hydration of ethene to ethanol?</li>\n      <li>List two disadvantages of the catalytic hydration method for ethanol production.</li>\n      <li>What are the primary products of ethanol combustion?</li>\n      <li>Why is ethanol considered a renewable fuel?</li>\n      <li>How is ethanol used in the pharmaceutical industry?</li>\n      <li>Describe one environmental benefit of using ethanol as a fuel.</li>\n      <li>What role does yeast play in ethanol production?</li>\n      <li>Name two industries where alcohols are used as solvents.</li>\n      <li>Write the chemical equation for the fermentation of glucose.</li>\n      <li>Evaluate the environmental impact of the two ethanol production methods.</li>\n      <li>Explain why alcohols are considered cleaner fuels compared to fossil fuels.</li>\n      <li>Discuss the benefits of using ethanol as a fuel in internal combustion engines compared to gasoline.</li>\n      <li>Describe how ethanol is used in cosmetic products.</li>\n      <li>Explain the role of alcohols in the pharmaceutical industry.</li>\n      <li>Evaluate the environmental impact of the two ethanol production methods.</li>\n    </ol>\n\n    <h3>3. Long Answer Questions</h3>\n    <ol type=\"i\">\n      <li>Compare and contrast the fermentation and catalytic hydration methods of ethanol production, including their advantages and disadvantages.</li>\n      <li>Explain the combustion process of alcohols and discuss why they are considered cleaner fuels compared to fossil fuels.</li>\n      <li>Discuss the role of ethanol in fuel production, highlighting its benefits and potential challenges.</li>\n      <li>Describe the impact of alcohols on various industries, including pharmaceuticals, cosmetics, and household products.</li>\n      <li>Analyse the overall impact of alcohols on daily life, considering their use as fuels, solvents, disinfectants, and their health and environmental implications.</li>\n      <li>Compare the advantages and disadvantages of the two methods of ethanol production in terms of energy efficiency, cost, and environmental impact.</li>\n      <li>Analyse the impact of replacing traditional fossil fuels with alcohol-based fuels in terms of emissions and energy efficiency.</li>\n      <li>Evaluate the feasibility of switching to ethanol as a primary fuel source for transportation in your country.</li>\n      <li>Evaluate the impact of widespread use of alcohol-based disinfectants on public health and the environment.</li>\n    </ol>\n  ",
  "Think Tank": "\n    <h2>THINK TANK</h2>\n    <ol>\n      <li>Assess the potential economic and environmental impacts of shifting from fossil fuels to alcohols as primary fuels.</li>\n      <li>Which raw material is better for the production of ethanol, glucose or ethane? Give reasons for your choice.</li>\n      <li>Evaluate the impact of the widespread use of alcohol-based disinfectants on public health and the environment.</li>\n      <li>Develop a strategy for promoting the use of alcohols in the cosmetics industry, emphasizing their benefits.</li>\n    </ol>\n  "
};

CHEMISTRY_DIGITAL_BOOK["Carboxylic Compounds"] = {
  "Student Learning Outcomes (SLOs)": "\n    <h2>Student Learning Outcomes (SLOs)</h2>\n    <ul>\n      <li>Describe the reactions of carboxylic acids with metals, bases, and carbonates including names and formulae of the salts produced.</li>\n      <li>Describe the formation of ethanoic acid by the oxidation of ethanol with acidified aqueous potassium manganate(VII) and by bacterial oxidation during vinegar production.</li>\n      <li>Describe the reaction of a carboxylic acid with an alcohol using an acid catalyst to form an ester.</li>\n      <li>Describe the industrial applications of carboxylic acids and esters, including their use as solvents, flavours, fragrance, and plastics.</li>\n      <li>Explain the role of carboxylic acids and esters in daily life, including their use in food preservation, cosmetics, and pharmaceuticals.</li>\n    </ul>\n  ",
  "Introduction to Carboxylic Compounds": "\n    <h2>Carboxylic Compounds</h2>\n    <p>The organic compounds that contain carbon-oxygen double bonds C=O are called carbonyl compounds. There are many types of carbonyl compounds, such as aldehydes, ketones, carboxylic acids, etc.</p>\n    <p>Carbonyl compounds in which carbonyl carbon is attached to the -OH hydroxyl group are called carboxylic acids. Examples include methanoic acid, ethanoic acid, and propanoic acid.</p>\n    <p>Name shown in square brackets are common names of these compounds. Organic compounds which contain a carboxyl group -COOH functional group in their molecule are called carboxylic acids.</p>\n    <p>Aliphatic carboxylic acids have the carboxyl group attached to an open chain of carbon atoms of alkyl group. Aromatic carboxylic acids have the carboxylic group with phenyl or aryl group.</p>\n    <p>They may be represented by the general formula <strong>R-COOH</strong>, where R = H or any alkyl or aryl group.</p>\n  ",
  "11.1 Formation of Ethanoic acid": "\n    <h2>11.1 Formation of Ethanoic acid</h2>\n    <p>Ethanoic acid can be formed by the oxidation of alcohols and by bacterial oxidation of ethanol. Both methods convert ethanol into ethanoic acid but under different conditions.</p>\n  ",
  "By the Oxidation of Alcohols": "\n    <h2>1. By the Oxidation of Alcohols</h2>\n    <p>Ethanol is readily oxidized to aldehyde, which further oxidizes to carboxylic acids in the presence of oxidizing agents such as potassium dichromate or potassium permanganate(VII) in an acidic medium. This process is fast but requires strong oxidizing agents.</p>\n    <p>The oxidizing agent provides nascent oxygen for the oxidation of alcohol. In the first step, oxygen removes two hydrogen atoms from ethanol to form water and ethanal. In the second step, the oxygen atom oxidizes ethanal into ethanoic acid.</p>\n    <p><strong>CH₃CH₂OH(l) + [O](g) → CH₃CHO(l) + H₂O(l)</strong></p>\n    <p><strong>CH₃CHO(l) + [O](g) → CH₃COOH(l)</strong></p>\n  ",
  "By the Bacterial Oxidation of Ethanol": "\n    <h2>2. By the Bacterial Oxidation of Ethanol</h2>\n    <p>Ethanol can be converted into vinegar by the action of micro-organisms called acetobacter in an aerobic environment. The reaction is catalysed by enzymes produced by acetobacter bacteria.</p>\n    <p><strong>CH₃CH₂OH(l) + O₂(g) → CH₃COOH(aq) + H₂O(l)</strong></p>\n    <p>The fermentation is complete when the ethanol is fully converted into acetic acid. This can be confirmed by tasting or by measuring the acetic acid concentration using titration.</p>\n    <p>Typical vinegar contains about 4-8% acetic acid. This process is slow but environmentally friendly and uses renewable resources.</p>\n  ",
  "11.2 Reactions of Carboxylic Acids": "\n    <h2>11.2 Reactions of Carboxylic Acids</h2>\n    <p>The carboxyl group shows the chemistry of both the carbonyl group C=O and the hydroxyl group -OH. In most reactions, the carboxyl group is retained. However, the reactivity of these molecules is due to the presence of the carbonyl group.</p>\n    <p>Carboxylic acids undergo the following types of reactions:</p>\n    <ol>\n      <li>The reaction in which the hydrogen atom of the carboxyl group is involved, salt formation.</li>\n      <li>The reaction in which the -OH group is replaced by another group.</li>\n      <li>The reactions involving the carboxyl group as a whole.</li>\n    </ol>\n    <h3>Acidic properties of carboxylic acid</h3>\n    <p>Carboxylic acids are weaker acids than mineral acids. They produce H⁺ ions when dissolved in water.</p>\n  ",
  "Reaction with bases": "\n    <h2>(a) Reactions with bases</h2>\n    <p>Carboxylic acids react with strong bases such as NaOH and KOH to form salts.</p>\n    <p><strong>CH₃COOH(aq) + NaOH(aq) → CH₃COONa(aq) + H₂O(l)</strong></p>\n    <p>Ethanoic acid reacts with sodium hydroxide to form sodium acetate and water.</p>\n  ",
  "Reaction with carbonates and bicarbonates": "\n    <h2>(b) Reaction with carbonates and bicarbonates</h2>\n    <p>Carboxylic acids decompose carbonates and bicarbonates, evolving carbon dioxide gas with effervescence.</p>\n    <p><strong>2CH₃COOH(aq) + Na₂CO₃(aq) → 2CH₃COONa(aq) + CO₂(g) + H₂O(l)</strong></p>\n    <p><strong>CH₃COOH(aq) + NaHCO₃(aq) → CH₃COONa(aq) + CO₂(g) + H₂O(l)</strong></p>\n  ",
  "Reactions with metals": "\n    <h2>(c) Reactions with metals</h2>\n    <p>Carboxylic acids react with active metals such as sodium, potassium, calcium, and magnesium to form their salts with the evolution of hydrogen gas.</p>\n    <p><strong>2CH₃COOH(aq) + 2Na(s) → 2CH₃COONa(aq) + H₂(g)</strong></p>\n  ",
  "Preparation of Esters": "\n    <h2>2. Reaction involving the OH group of Carboxylic acid</h2>\n    <h3>Reaction with Alcohol: Preparation of Esters</h3>\n    <p>When a carboxylic acid is heated with an alcohol in the presence of concentrated sulphuric acid as catalyst, an ester is formed. The reaction is named esterification reaction.</p>\n    <p>Esters are usually significant for their fruity smells and act as flavouring agents. Such a reaction in which two molecules combine with the elimination of a small molecule like water is called a condensation reaction.</p>\n    <p><strong>RCOOH + R′OH ⇌ RCOOR′ + H₂O</strong></p>\n    <p><strong>CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O</strong></p>\n    <p>Ethanoic acid reacts with ethanol to form ethyl acetate and water.</p>\n\n    <h3>Concept Assessment Exercise 11.1</h3>\n    <ol>\n      <li>CH₃COOH + CH₃OH →</li>\n      <li>CH₃CH₂COOH + Na →</li>\n      <li>HCOOH + NaHCO₃ →</li>\n    </ol>\n  ",
  "Activity 11.1": "\n    <h2>Activity 11.1</h2>\n    <p>Studying and analyzing the reactions between vinegar, acetic acid, and two different substances: sodium metal and sodium carbonate.</p>\n    <h3>Materials Needed</h3>\n    <ul>\n      <li>Vinegar, acetic acid CH₃COOH</li>\n      <li>Small pieces of sodium metal Na</li>\n      <li>Sodium carbonate Na₂CO₃</li>\n      <li>Two small beakers or glass containers</li>\n      <li>Droppers or pipettes</li>\n      <li>Safety goggles and gloves</li>\n    </ul>\n\n    <h3>Reaction: Vinegar with Sodium Metal</h3>\n    <p>Place a small piece of sodium metal in a dry beaker. Carefully add a small amount of vinegar using a dropper. Sodium metal reacts vigorously with vinegar, producing bubbles and fizzing. Hydrogen gas is released and sodium acetate is formed.</p>\n    <p><strong>2Na(s) + 2CH₃COOH(aq) → 2CH₃COONa(aq) + H₂(g)</strong></p>\n\n    <h3>Reaction: Vinegar with Sodium Carbonate</h3>\n    <p>In a separate beaker, add a small amount of sodium carbonate. Slowly add vinegar using a dropper until bubbling occurs. Vigorous bubbling and fizzing are observed as carbon dioxide gas is released. Water and sodium acetate are also formed.</p>\n    <p><strong>Na₂CO₃(s) + 2CH₃COOH(aq) → 2CH₃COONa(aq) + CO₂(g) + H₂O(l)</strong></p>\n\n    <h3>Concept Assessment Exercise 11.2</h3>\n    <ol>\n      <li>Describe the chemical reaction for the oxidation of ethanol to ethanoic acid using acidified potassium manganate(VII).</li>\n      <li>Explain the role of bacteria in the production of vinegar from ethanol.</li>\n      <li>Write structural formulas for ethanoic acid and propanoic acid.</li>\n    </ol>\n  ",
  "11.3 Industrial Applications of Carboxylic acids and Esters": "\n    <h2>11.3 Industrial Applications of Carboxylic acids and Esters</h2>\n    <p>Carboxylic acids and esters have many industrial applications.</p>\n    <ol>\n      <li>Methanoic acid, commonly known as formic acid, is used in the textile industry as an acid-reducing agent.</li>\n      <li>Ethanoic acid, commonly known as acetic acid, is used in making plastics and esters.</li>\n      <li>Sodium salts of fatty acids are used in making soaps and detergents.</li>\n      <li>Ethanoic acid is used in making medicines like aspirin.</li>\n      <li>Many carboxylic acids are used as industrial solvents.</li>\n      <li>Citric acid is a natural preservative and is used in both processed foods and drinks.</li>\n      <li>Carboxylic acids are used in the preparation of perfumes and artificial food essences.</li>\n      <li>Benzoic acid and sodium benzoate are used in the food, pharmaceutical, and personal care industries.</li>\n      <li>Tartaric acid is used in baking powder. It reacts with carbonates in dough in the baking industry.</li>\n      <li>Esters are industrial solvents for dyes, glues, inks for permanent markers, and whiteboard markers.</li>\n      <li>Esters are used for making car spray paints, varnishes, and nail polish remover.</li>\n      <li>Esters are used to make polymers called polyesters, which are used to make plastic bottles, canes, and textile clothing fibers.</li>\n    </ol>\n\n    <h3>Some carboxylic esters used as flavouring agents</h3>\n    <table class=\"book-table\">\n      <tr><th>Structure</th><th>Name</th><th>Flavour</th></tr>\n      <tr><td>CH₃COOCH₂CH(CH₃)₂</td><td>isopentyl acetate</td><td>Banana</td></tr>\n      <tr><td>CH₃CO(CH₂)₇CH₃</td><td>octyl acetate</td><td>Orange</td></tr>\n      <tr><td>CH₃(CH₂)₂COOCH₂CH₃</td><td>ethyl butyrate</td><td>Pineapple</td></tr>\n      <tr><td>CH₃(CH₂)₃COOCH₃</td><td>methyl butyrate</td><td>Apple</td></tr>\n      <tr><td>HCOOCH₂CH(CH₃)₂</td><td>isobutyl formate</td><td>Raspberry</td></tr>\n    </table>\n  ",
  "11.4 Everyday uses of Carboxylic acids": "\n    <h2>11.4 Everyday uses of Carboxylic acids</h2>\n    <ul>\n      <li>Ethanoic acid solution 5% is used as vinegar.</li>\n      <li>Vinegar is used to make pickles, flavouring food, and dress salads.</li>\n      <li>Lemon juice contains ascorbic acid and is used to reduce the smell of fish and flavouring food.</li>\n      <li>Ascorbic acid is also used as vitamin-C.</li>\n      <li>Benzoic acid and its salt sodium benzoate are used as preservatives in food and beverages to inhibit the growth of bacteria and fungi.</li>\n    </ul>\n  ",
  "11.5 Everyday uses of Esters": "\n    <h2>11.5 Everyday uses of Esters</h2>\n    <p>Esters are sweet-smelling organic compounds. They are used as:</p>\n    <ul>\n      <li>Food flavouring compounds as they give a characteristic odour to fruits.</li>\n      <li>Fragrance and perfumes.</li>\n      <li>Some esters are used in the treatment of rheumatoid arthritis.</li>\n      <li>Aspirin is an ester. It is used as a fever reducer and pain killer.</li>\n    </ul>\n  ",
  "Key Points": "\n    <h2>KEY POINTS</h2>\n    <ul>\n      <li>Carbonyl compounds in which carbonyl carbon is attached to the -OH hydroxyl group are called carboxylic acids.</li>\n      <li>Ethanol can be converted into vinegar by the action of micro-organisms called acetobacter in an aerobic environment.</li>\n      <li>Vinegar contains about 4-8% acetic acid.</li>\n      <li>Carboxylic acids react with bases NaOH and KOH to form salts.</li>\n      <li>Carboxylic acids decompose carbonates and bicarbonates, evolving carbon dioxide gas with effervescence.</li>\n      <li>When a carboxylic acid is heated with an alcohol in the presence of concentrated sulphuric acid as catalyst, an ester is formed.</li>\n      <li>Carboxylic acids are used in the preparation of perfumes and artificial food essences.</li>\n      <li>Esters are sweet-smelling organic compounds.</li>\n    </ul>\n  ",
  "Exercise": "\n    <h2>EXERCISE</h2>\n    <h3>1. Multiple Choice Questions (MCQs)</h3>\n    <ol type=\"i\">\n      <li>What is the product of the reaction between ethanoic acid and sodium carbonate?<br>a) Sodium propanoate b) Sodium hydroxide c) Sodium chloride d) Sodium acetate</li>\n      <li>Which catalyst is used in esterification reaction between a carboxylic acid and an alcohol?<br>a) Potassium manganate(VII) b) Sulfuric acid c) Sodium hydroxide d) Hydrochloric acid</li>\n      <li>What is the main component of vinegar?<br>a) Ethanol b) Methanol c) Propanoic acid d) Ethanoic acid</li>\n      <li>What gas is produced when a carboxylic acid reacts with a metal?<br>a) Oxygen b) Carbon dioxide c) Hydrogen d) Nitrogen</li>\n      <li>Which compound is formed by bacterial oxidation of ethanol?<br>a) Methanoic acid b) Propanoic acid c) Ethanoic acid d) Butanoic acid</li>\n      <li>What type of bond is formed between a carboxylic acid and an alcohol during esterification?<br>a) Ionic bond b) Hydrogen bond c) Covalent bond d) Metallic bond</li>\n      <li>Which of the following is an example of a carboxylic acid?<br>a) Ethanol b) Ethanoic acid c) Ethyl acetate d) Methanol</li>\n      <li>In the oxidation of ethanol to ethanoic acid, what is the role of potassium manganate(VII)?<br>a) Reducing agent b) Oxidizing agent c) Catalyst d) Inhibitor</li>\n      <li>What is produced when ethanoic acid reacts with sodium hydroxide?<br>a) Sodium chloride b) Sodium ethanoate c) Sodium oxide d) Sodium bicarbonate</li>\n    </ol>\n\n    <h3>2. Short Answer Questions</h3>\n    <ol type=\"i\">\n      <li>Write the balanced chemical equation for the reaction between ethanoic acid and sodium.</li>\n      <li>Describe how ethanoic acid can be formed from ethanol using an oxidizing agent.</li>\n      <li>What is the role of sulphuric acid in esterification?</li>\n      <li>Name the salt formed when ethanoic acid reacts with sodium carbonate.</li>\n      <li>How is ethanoic acid used in the food industry?</li>\n      <li>Explain the industrial use of ethyl acetate.</li>\n      <li>Write the chemical equation for the esterification reaction between methanol and ethanoic acid.</li>\n      <li>What happens when a carboxylic acid reacts with a base? Provide a general reaction.</li>\n      <li>Describe the bacterial oxidation process used in vinegar production.</li>\n      <li>What are the products of the reaction between a carboxylic acid and a metal?</li>\n    </ol>\n\n    <h3>3. Long Answer Questions</h3>\n    <ol type=\"i\">\n      <li>Explain why esters are commonly used in the fragrance industry.</li>\n      <li>Discuss the industrial importance of carboxylic acids and esters.</li>\n      <li>Compare the efficiency of chemical and bacterial oxidation methods in the production of ethanoic acid.</li>\n      <li>Analyze the importance of esterification reactions in the pharmaceutical industry.</li>\n      <li>Compare the reactivity of carboxylic acids with metals, bases, and carbonates. Which reaction releases a gas, and why is this significant in practical applications?</li>\n      <li>Describe how carboxylic acids are used in the food industry, particularly in food preservation.</li>\n      <li>Explain the use of esters in the cosmetics industry and pharmaceutical industry.</li>\n      <li>Evaluate the impact of carboxylic acids and esters on daily life.</li>\n    </ol>\n  ",
  "Think Tank": "\n    <h2>THINK TANK</h2>\n    <ol>\n      <li>Explain why carbon dioxide is produced when ethanoic acid reacts with sodium carbonate.</li>\n      <li>Write the balanced chemical equation for the esterification reaction between methanoic acid and propanol.</li>\n      <li>Discuss the environmental and economic implications of producing ethanoic acid via the chemical method using potassium manganate(VII) compared to the biological method.</li>\n    </ol>\n  "
};

CHEMISTRY_DIGITAL_BOOK["Polymers"] = {
  "Student Learning Outcomes (SLOs)": "\n    <h2>Student Learning Outcomes (SLOs)</h2>\n    <ul>\n      <li>Define polymers as large molecules built up from many smaller molecules called monomers.</li>\n      <li>Identify the repeating units and/or linkages in addition polymers and condensation polymers.</li>\n      <li>Deduce the structure or repeat unit of an addition polymer from a given alkene and vice versa.</li>\n      <li>Deduce the structure or repeating unit of a condensation polymer from given monomer and vice versa, limited to polyamides from dicarboxylic acid and diamide, and polyester from a dicarboxylic acid and a diol.</li>\n      <li>Describe the differences between addition and condensation polymerisation.</li>\n      <li>State that plastics are made from polymers.</li>\n      <li>Describe how the properties of plastics have implications for their disposal.</li>\n      <li>Describe the environmental challenges caused by plastics, limited to disposal in landfill sites, accumulation in oceans, and formation of toxic gases from burning.</li>\n      <li>Describe the structure of nylon, a polyamide, and PET, a polyester.</li>\n      <li>State that PET can be converted back into monomers and re-polymerised.</li>\n      <li>Outline the importance of polymers in the textile industry.</li>\n    </ul>\n  ",
  "12.1 Polymers": "\n    <h2>12.1 Polymers</h2>\n    <p>Polymers are large molecules built from many smaller repeating units called monomers. These monomers bond covalently to form long chains, giving polymers their unique properties.</p>\n    <p>Polymerisation is the joining up of many monomers to form a big molecule.</p>\n    <p>Polymers can be classified into two categories based on their synthesis: addition polymers and condensation polymers.</p>\n  ",
  "12.1.1 Addition polymers": "\n    <h2>12.1.1 Addition polymers</h2>\n    <p>Addition polymers are formed by adding monomer units without losing small molecules. Monomers usually contain double or triple bonds that open and combine to form a polymer.</p>\n    <p>The number of carbon atoms in these chains can vary from 4000 to 40,000.</p>\n    <p>For example, ethene is the smallest hydrocarbon containing a carbon-carbon double bond. Ethene molecules can join together to produce very long chains. Part of the double bond is broken, and the electrons in it are used to join neighbouring molecules. This process is called addition polymerisation.</p>\n    <p>At high temperatures and high pressures, the monomer ethene joins up to give a polymer called polyethylene or polyethene.</p>\n\n    <h3>Repeating units</h3>\n    <p>For a polymer, a repeating unit is the same as a monomer, except that the double bond is replaced by a single bond after polymerization.</p>\n    <p><strong>Monomer:</strong> CH₂=CH₂</p>\n    <p><strong>Repeating unit:</strong> -CH₂-CH₂-</p>\n    <p>Polyethylene PE consists of ethylene monomer CH₂=CH₂.</p>\n\n    <p>Polypropylene PP consists of propylene monomer CH₂=CH-CH₃.</p>\n    <p><strong>Repeating unit:</strong> -CH₂-CH(CH₃)-</p>\n\n    <p>Polyvinylchloride consists of vinyl chloride monomer CH₂=CHCl. Chloroethene is an ethene molecule in which one hydrogen atom is replaced by a chlorine atom. It is called vinyl chloride. Polymerising vinyl chloride gives polychloroethene. Its commercial name is polyvinylchloride PVC.</p>\n  ",
  "12.1.2 Condensation polymers": "\n    <h2>12.1.2 Condensation polymers</h2>\n    <p>Condensation polymers are formed in a condensation reaction where each time a bond is formed between two monomers, a small molecule, often water, is released.</p>\n    <p>Some polymers form in a different way than addition polymers. If one monomer contains an -OH group and the other contains -H, they can be joined by eliminating a molecule of water. This reaction is called a condensation reaction. This type of polymerisation process is called condensation polymerisation.</p>\n    <p>Condensation polymers are usually polyamides or polyesters formed by the reaction of functional groups, for example carboxyl and amino groups in polyamides or carboxyl and hydroxyl groups in polyesters, with the removal of a small molecule such as water.</p>\n\n    <h3>Repeating units</h3>\n    <p>In condensation polymers, the repeating unit usually consists of two different types of monomers, each forming the polymer backbone with functional groups that react to form the polymer and release small molecules.</p>\n\n    <h3>Polyesters and PET</h3>\n    <p>Polyesters such as polyethylene terephthalate PET are formed from terephthalic acid and ethylene glycol.</p>\n    <p><strong>Monomers:</strong> terephthalic acid and ethylene glycol, a diol.</p>\n    <p><strong>Repeating unit:</strong> -OC-C₆H₄-COO-CH₂-CH₂-O-</p>\n    <p><strong>Released molecule:</strong> water H₂O.</p>\n\n    <h3>Polyamides and Nylon-6,6</h3>\n    <p>Polyamides such as nylon-6,6 are formed from hexamethylenediamine and adipic acid.</p>\n    <p><strong>Monomers:</strong> hexamethylenediamine and adipic acid.</p>\n    <p><strong>Repeating unit:</strong> -NH-(CH₂)₆-NH-CO-(CH₂)₄-CO-</p>\n    <p><strong>Released molecule:</strong> water H₂O.</p>\n\n    <p>Nylon is used to make carpets, clothing, ropes that do not rot, and toothbrushes. Nylon is stronger and more durable than natural fibres such as cotton.</p>\n    <p>Polyester fibres are very strong and flexible and are used to make clothing. For example, terylene can give a permanent crease, useful for trousers.</p>\n\n    <h3>Concept Assessment Exercise 12.1</h3>\n    <ol>\n      <li>What type of bond is involved in the formation of addition polymers?</li>\n      <li>What is released during the formation of addition and condensation polymers?</li>\n      <li>Give an example of a condensation polymer.</li>\n      <li>How do these building blocks come together to form polymers?</li>\n    </ol>\n  ",
  "PET Recycling and Re-polymerisation": "\n    <h2>PET Recycling and Re-polymerisation</h2>\n    <p>Condensation polymers generally have a higher potential for recycling compared to addition polymers. Polyethylene terephthalate PET undergoes acid hydrolysis in the presence of strong acids such as sulphuric acid H₂SO₄ or hydrochloric acid HCl at high temperature, for example 200-250°C, and pressure.</p>\n    <p>The reaction breaks down the ester bonds in PET. This reaction produces the monomers from which PET is made, that is terephthalic acid and ethylene glycol.</p>\n\n    <h3>The Chemical Reaction</h3>\n    <p>During acid hydrolysis:</p>\n    <ol>\n      <li>The ester bonds -COO- in PET are cleaved.</li>\n      <li>Water molecules H₂O and the acid catalyst attack these bonds, breaking the polymer into smaller molecules.</li>\n    </ol>\n\n    <p>Acid hydrolysis of PET is an essential step in recycling, as it allows recovery of pure monomers for reuse in making new PET or other products. This process contributes to sustainability by reducing the need for raw materials and minimizing plastic waste.</p>\n  ",
  "12.2 Plastics": "\n    <h2>12.2 Plastics</h2>\n    <p>The word plastic is derived from the Greek word plastikos, which means malleable or moldable, and plastos meaning mouldable.</p>\n    <p>Plastics are synthetic materials made from organic polymers, such as PVC, polyvinyl chloride, polyethylene, nylon, etc. These materials can be melted down and then transformed into solid or slightly flexible shapes.</p>\n    <p>They are also referred to as long carbon chain polymers. The ability of a material to be moulded or malleable during the manufacturing process means that it can be cast, pressed, or extruded into a variety of forms including film, fibre, sheet, tube, bottle, and box.</p>\n  ",
  "12.2.1 Properties of Plastics": "\n    <h2>12.2.1 Properties of Plastics</h2>\n    <p>The properties of plastics are directly derived from the characteristics of the polymers they are made from. Some of these are:</p>\n\n    <h3>1. Molecular Structure</h3>\n    <p>Polymer chains tend to be longer and more durable. They can be linear or branched. Branched polymers are softer and more flexible. On the other hand, linear polymers are stronger and more rigid. Cross-linking is also possible, with high cross-linking resulting in tough and heat-resistant plastics, such as vulcanized rubber.</p>\n\n    <h3>2. Chemical Composition</h3>\n    <p>Chemical composition is determined by the monomer type, which determines the plastic’s properties. For example, polyethylene PE is flexible and moisture-resistant, while polystyrene PS is stiff and brittle. Additives such as plasticizers, stabilizers, and fillers can also enhance the plastic’s properties, depending on the processing conditions.</p>\n\n    <h3>3. Temperature and Pressure</h3>\n    <p>Conditions such as temperature and pressure during polymerisation and moulding affect the plastic’s crystalline structure, affecting properties like transparency, tensile strength, and melting point.</p>\n  ",
  "12.2.2 Environmental Impact of plastics": "\n    <h2>12.2.2 Environmental Impact of plastics</h2>\n    <p>Most plastics are highly resistant to degradation due to their strong carbon-carbon backbone. This leads to long persistence to degradation.</p>\n    <p>As plastics degrade slowly, they can break down into microplastics, which are small particles that can contaminate water bodies. These microplastics are harmful to aquatic life and human health.</p>\n\n    <h3>Incineration</h3>\n    <p>While incineration reduces plastic volume, it can release harmful chemicals and greenhouse gases if not properly managed. Certain plastics, when burned, can emit toxic substances like dioxins and furans.</p>\n  ",
  "12.3 Importance of Polymers in the Textile Industry": "\n    <h2>12.3 Importance of Polymers in the Textile Industry</h2>\n    <p>Polymers are essential for the textile industry because they are versatile and can be used in a variety of applications. The properties of polymers allow them to be used for a variety of purposes, from everyday clothing to specialised industrial applications.</p>\n\n    <h3>1. Polyester PET</h3>\n    <p>Polyester PET has durability, shrinking and stretching resistance, rapid drying, excellent colour retention, etc. PET is used in clothing, for example shirts and pants, home furnishing such as curtains and bed linens, and industrial applications such as ropes and tyre cords.</p>\n\n    <h3>2. Nylon-6,6 Polyamide</h3>\n    <p>Nylon-6,6 has properties such as high strength, high elasticity, resistance to abrasion, and chemical and oil resistance. It is commonly used in clothing. It can also be used as a part of blended fabrics for different garments. It is also used for making toothbrushes, ropes that do not rot, carpets, and other products.</p>\n\n    <h3>3. Polyethylene PE</h3>\n    <p>Polyethylene is lightweight, durable, and has properties such as good thermal insulation, water resistance, chemical resistance, moisture resistance, mildew resistance, and other properties. Polyethene is used for making trays, fruit juice containers, milk containers, crates, food packaging products, garbage bags, toys, insulation for wires and cables, and housewares.</p>\n  ",
  "12.4 Properties of Plastics and Their Implications for Disposal": "\n    <h2>12.4 Properties of Plastics and Their Implications for Disposal</h2>\n    <p>The properties of plastics, while beneficial for their intended uses, create significant challenges for disposal. Therefore, plastics cause numerous environmental issues.</p>\n\n    <h3>1. Durability and Longevity</h3>\n    <p>Plastics are made durable, which means that they can withstand a wide range of environmental conditions without breaking down quickly. However, because of the same durability, plastics can last hundreds or even thousands of years in the environment. This makes them difficult to dispose of.</p>\n\n    <h3>2. Lightweight Nature</h3>\n    <p>Because plastics are lightweight, they can be easily packed and transported, but they can also be transported by wind or water. This makes it easier for them to spread over long distances, which can lead to extensive environmental pollution, particularly in marine environments.</p>\n\n    <h3>3. Chemical Composition</h3>\n    <p>The chemical composition of plastics can vary from one plastic material to another. Many plastic materials contain additives to enhance their properties, such as stabilisers, plasticizers, flame retardants, etc. These additives can leach into the environment, which can pose a risk to ecosystems and human health.</p>\n\n    <h3>4. Recyclability</h3>\n    <p>Some plastics can be recycled. However, contamination, sorting issues, and economic constraints often limit the amount that can be recycled. Many plastics cannot be recycled effectively, resulting in a large portion of them going to landfill or being burned.</p>\n  ",
  "12.4.1 Environmental Challenges Caused by Plastics": "\n    <h2>12.4.1 Environmental Challenges Caused by Plastics</h2>\n    <p>Many environmental challenges are caused by plastics. Some of these are as follows:</p>\n\n    <h3>1. Disposal of plastics in Landfill Sites</h3>\n    <p>Plastics take up a lot of space in a landfill because of their size and resistance to compaction. This means that landfills fill up quickly, leading to more landfilling and worsening land use issues.</p>\n    <p>Over time, plastic in a landfill can leach dangerous chemicals into soil or groundwater.</p>\n    <p>As plastic slowly decomposes in a landfill, it breaks down into smaller microplastic particles. Microplastics can then seep into soils and water bodies and become a persistent environmental pollutant.</p>\n\n    <h3>2. Accumulation in Oceans</h3>\n    <p>Plastics are a major component of marine litter, and an estimated 8 million tons of plastic are dumped into the ocean each year. Plastics accumulate in ocean rings and build up into large floating debris, like the Pacific Garbage Patch.</p>\n    <p>Plastics can also be ingested and entangled by marine animals, which often mistake plastic for food. This can cause gastrointestinal blockage and even death. Microplastics can enter the food chain, and once in the food supply, these pollutants can reach toxic levels in humans.</p>\n\n    <h3>3. Formation of Toxic Gases from Burning</h3>\n    <p>Incinerating plastics releases a variety of toxic gases and particulates. These substances are known to be carcinogenic and can cause serious health problems for humans and animals.</p>\n    <p>Burning plastics contributes to air pollution, releasing greenhouse gases like carbon dioxide CO₂ and methane CH₄, which aggravate climate change. Other pollutants can also cause respiratory problems, cardiovascular diseases, and other health issues for populations living near incineration facilities.</p>\n    <p>The residual ash from burning plastics can contain toxic substances that, if not properly managed, can contaminate soil and water sources. This further complicates the disposal process and poses additional environmental risks.</p>\n    <p>Addressing these challenges requires comprehensive waste management strategies, increased recycling efforts, and the development of more sustainable materials.</p>\n  ",
  "Key Points": "\n    <h2>KEY POINTS</h2>\n    <ul>\n      <li>Polymers are large molecules built from many smaller repeating units called monomers.</li>\n      <li>Addition polymers are formed by adding monomer units without losing small molecules.</li>\n      <li>Condensation polymers are formed in a condensation reaction where a small molecule, often water, is released.</li>\n      <li>In condensation polymers, the repeating unit usually consists of two different types of monomers.</li>\n      <li>Polyesters such as PET are formed from terephthalic acid and ethylene glycol.</li>\n      <li>Polyamides such as nylon-6,6 are formed from hexamethylenediamine and adipic acid.</li>\n      <li>Plastics are synthetic materials made from organic polymers.</li>\n      <li>Polymers are essential for the textile industry because they are versatile and can be used in a variety of applications.</li>\n      <li>Properties of plastics create significant challenges for disposal.</li>\n      <li>Lightweight plastic can spread over long distances, causing environmental pollution.</li>\n      <li>Incinerating plastics releases toxic gases and particulates.</li>\n    </ul>\n  ",
  "Exercise": "\n    <h2>EXERCISE</h2>\n\n    <h3>1. Multiple Choice Questions (MCQs)</h3>\n    <ol type=\"i\">\n      <li>Which of the following best defines polymers?<br>a) Small molecules bonded together to form large molecules<br>b) Large molecules built up from many smaller molecules called monomers<br>c) Simple molecules consisting of one type of atom<br>d) Large molecules made up of metals and non-metals</li>\n      <li>What type of linkage is found in polyamides?<br>a) Ester linkage<br>b) Amide linkage<br>c) Glycosidic linkage<br>d) Phosphodiester linkage</li>\n      <li>Polyethylene is an example of:<br>a) A condensation polymer<br>b) An addition polymer<br>c) A copolymer<br>d) A natural polymer</li>\n      <li>The repeating unit of the addition polymer formed from ethene is:<br>a) -CH₂-CH₂-<br>b) -CH-CH-<br>c) -CH₂-CH-<br>d) -C-C-</li>\n      <li>Nylon-6,6 is an example of a:<br>a) Polyester<br>b) Polyamide<br>c) Polysaccharide<br>d) Polyurethane</li>\n      <li>Which process produces water as a by-product?<br>a) Addition polymerisation<br>b) Condensation polymerisation<br>c) Hydrogenation<br>d) Hydrolysis</li>\n      <li>Which statement is not true about PET?<br>a) It cannot be recycled<br>b) It is a polyamide<br>c) It can be converted back into monomers and re-polymerised<br>d) It is used only in textiles</li>\n      <li>What is a major environmental challenge caused by plastics?<br>a) They are biodegradable<br>b) They are easily recycled<br>c) They accumulate in oceans<br>d) They are non-toxic when burned</li>\n      <li>Polyesters are formed from:<br>a) Dicarboxylic acids and diamines<br>b) Dicarboxylic acids and diols<br>c) Diols and diamines<br>d) Monocarboxylic acids and diols</li>\n      <li>Which of the following is not a property of plastics?<br>a) They are lightweight<br>b) They are durable<br>c) They are easily decomposed by microorganisms<br>d) They are versatile in application</li>\n    </ol>\n\n    <h3>2. Short Answer Questions</h3>\n    <ol type=\"i\">\n      <li>Define a polymer.</li>\n      <li>What is a monomer?</li>\n      <li>Identify the repeating unit in polyethylene.</li>\n      <li>Explain what is meant by addition polymerisation.</li>\n      <li>Describe the process of condensation polymerisation.</li>\n      <li>Name the linkage found in polyesters.</li>\n      <li>What are the monomers required to form nylon?</li>\n      <li>Explain one environmental challenge associated with the disposal of plastics in landfills.</li>\n      <li>Describe the structure of PET.</li>\n      <li>Why is PET considered recyclable?</li>\n      <li>How are addition polymers formed from monomers?</li>\n      <li>What is released during the formation of condensation polymers?</li>\n      <li>What is the repeating unit in the polymer formed from ethylene glycol and terephthalic acid?</li>\n      <li>Why is PET widely used in textiles?</li>\n      <li>What is a key difference between polyamides and polyesters?</li>\n      <li>What is one benefit of recycling PET?</li>\n      <li>Give an example of a condensation polymer.</li>\n      <li>How do the properties of plastics depend on their polymer structure?</li>\n      <li>What are two environmental challenges associated with plastic disposal?</li>\n    </ol>\n\n    <h3>3. Long Answer Questions</h3>\n    <ol type=\"i\">\n      <li>Describe in detail the process of addition polymerization, giving an example of an addition polymer and its repeating unit.</li>\n      <li>Explain how condensation polymerisation works, using the formation of polyester as an example. Include the reactants and the type of linkage formed.</li>\n      <li>Discuss the differences between addition and condensation polymerization, giving examples of polymers formed by each process.</li>\n      <li>Evaluate the environmental impacts of plastic disposal, covering landfills, ocean accumulation, and formation of toxic gases from burning.</li>\n      <li>Outline the importance of polymers in the textile industry, giving examples of specific polymers used and their properties.</li>\n      <li>What process allows PET to be reused? Why is this process beneficial?</li>\n      <li>Assess the role of polymers such as nylon and PET in the textile industry.</li>\n      <li>Evaluate the differences between addition and condensation polymerization in terms of monomers, polymer chains, and by-products.</li>\n      <li>Analyse the environmental impact of addition and condensation polymers.</li>\n    </ol>\n  ",
  "Think Tank": "\n    <h2>THINK TANK</h2>\n    <ol>\n      <li>Considering the environmental challenges posed by plastics, propose a sustainable strategy for managing plastic waste, including recycling and alternative materials.</li>\n      <li>Analyse the impact of microplastics in marine environments and discuss potential solutions to mitigate their effects.</li>\n      <li>Evaluate the need for developing biodegradable polymers to replace traditional plastics.</li>\n      <li>Imagine you are an environmental scientist tasked with reducing oceanic plastic pollution. Analyse the key sources of plastic waste that end up in the oceans.</li>\n      <li>Polyamide polymers like nylon are used extensively in various applications. Analyse the properties that make nylon a preferred material.</li>\n      <li>Consider a monomer such as ethylene or terephthalic acid and ethylene glycol, and deduce the structure of the corresponding polymers that can be made from them.</li>\n    </ol>\n  "
};

CHEMISTRY_DIGITAL_BOOK["Biochemistry"] = {
  "Student Learning Outcomes (SLOs)": "\n    <h2>Student Learning Outcomes (SLOs)</h2>\n    <ul>\n      <li>Describe proteins as natural polyamides and that they are formed from amino acid monomers with the general structure.</li>\n      <li>Draw the general structures of proteins.</li>\n      <li>Explain the sources, use, and structure of proteins, lipids and carbohydrates.</li>\n      <li>Describe the importance of nucleic acids.</li>\n      <li>Explain vitamins, their sources, and their importance to health.</li>\n      <li>Identify applications of biochemistry in testing, including blood cells, pregnancy test, cancer screening, parental genetic testing, genetic engineering, gene therapy and cloning.</li>\n    </ul>\n  ",
  "13.1 Proteins": "\n    <h2>13.1 Proteins</h2>\n    <h3>The Basic Unit of Protein - Amino Acids</h3>\n    <p>Proteins are found in our muscles, bones, skin, hair, and almost every part of the body. Proteins are also known as the building blocks of life because they are the most abundant molecules present in the body.</p>\n    <p>Proteins are called natural polyamides because they are naturally occurring polymers. Proteins are large, complex molecules made up of long chains of monomers which are all amino acids. Amino acids are the basic structural unit of protein.</p>\n    <p>An amino acid is a simple organic compound consisting of two functional groups, a basic group, amine group -NH₂, an acidic group, carboxylic group -COOH, with a variable alkyl group R that is unique to each amino acid.</p>\n    <p>The body makes proteins through a process called protein synthesis. Protein synthesis requires adequate amounts of amino acids.</p>\n    <p>Molecules of amino acids join together through the amino -NH₂ group of one molecule and the carboxyl -COOH group of another molecule by eliminating a water molecule.</p>\n    <p>The linkage which joins two amino acid units is called a peptide bond. The resulting molecule is called a dipeptide. There is still an amino group on the left and a carboxyl group on the right. Each of these groups can react further to join more amino acid units. In this way, thousands of amino acid units join to form a giant molecule of protein. This sequence of amino acid linkages is called the primary structure of the protein.</p>\n\n    <h3>Do You Know?</h3>\n    <p>Enzymes are proteins that fasten chemical reactions in the body. They act like small machines that help break down food, make molecules, and carry out other important functions in cells, all without being used up or changed themselves.</p>\n    <p>Hemoglobin is found in red blood cells in our blood and carries oxygen from your lungs to your cells. A protein called collagen is a strong and tough material that makes up our skin and fingernails and helps to hold our internal organs in place.</p>\n  ",
  "13.1.1 Classification of Protein": "\n    <h2>13.1.1 Classification of Protein</h2>\n    <p>The proteins are classified on the basis of the shape, constitution, and nature of the molecule. Each amino acid is connected to the next amino acid by covalent bonds.</p>\n    <ol>\n      <li><strong>Primary structure:</strong> Primary protein structure is a sequence of amino acids in a chain.</li>\n      <li><strong>Secondary structure:</strong> Secondary protein structure is formed by folding and twisting of the amino acid chain.</li>\n      <li><strong>Tertiary structure:</strong> Tertiary protein structure is formed when the twists and folds of the secondary structure fold again to form a larger three-dimensional structure.</li>\n      <li><strong>Quaternary structure:</strong> Quaternary protein structure is a protein consisting of more than one folded amino acid chain.</li>\n    </ol>\n\n    <h3>Do You Know?</h3>\n    <p>Insulin is a protein hormone that is made by specific cells inside the pancreas called beta cells. Insulin signals cells to absorb sugar from the bloodstream. Cells cannot absorb sugar without insulin.</p>\n  ",
  "13.2 Carbohydrates": "\n    <h2>13.2 Carbohydrates</h2>\n    <p>Carbohydrates have a general formula Cₙ(H₂O)ₙ. This formula suggests that they are hydrates of carbon.</p>\n    <p>Plants prepare carbohydrates through photosynthesis in the presence of chlorophyll and sunlight.</p>\n    <p><strong>6H₂O + 6CO₂ → C₆H₁₂O₆ + 6O₂</strong></p>\n    <p>Plants convert glucose into starch and cellulose. Carbohydrates are monomers and polymers of aldehydes and ketones that have numerous hydroxyl groups attached.</p>\n    <p>Examples include fructose, glucose and galactose.</p>\n  ",
  "13.3 Lipids": "\n    <h2>13.3 Lipids</h2>\n    <p>A lipid is a component of plant or animal tissue that is insoluble in water, but soluble in solvents of low polarity such as ether, hexane, benzene and carbon tetrachloride. The primary function of lipids in the body is long-term energy storage.</p>\n\n    <h3>Lipids include:</h3>\n    <ul>\n      <li>Fats and oils</li>\n      <li>Cholesterol</li>\n      <li>Sex hormones</li>\n      <li>Components of the cell membrane called phospholipids</li>\n      <li>Some vitamins A, D, E and K</li>\n    </ul>\n\n    <p>Fats and oils are referred to as simple lipids. They are esters of fatty acids with a trihydroxy alcohol, glycerol. For this reason, they are called glyceryl esters or glycerides. Fatty acids are long-chain carboxylic acids. They are the building blocks of lipids.</p>\n  ",
  "Proteins, Lipids and Carbohydrates Table": "\n    <h2>Proteins, Lipids and Carbohydrates</h2>\n    <table class=\"book-table\">\n      <tr><th></th><th>Proteins</th><th>Lipids</th><th>Carbohydrates</th></tr>\n      <tr><td>Building blocks</td><td>Amino acid + amino acid = protein</td><td>Fatty acids + glycerol = lipids/fats</td><td>Glucose + glucose = carbohydrates/starch</td></tr>\n      <tr><td>Description</td><td>All vital processes, including immunity and general metabolism, are carried out by proteins.</td><td>Lipids act as energy storage and are a larger source of energy.</td><td>Energy comes from carbohydrates. Carbohydrates are organic molecules that contain carbon, hydrogen and oxygen.</td></tr>\n      <tr><td>Sources</td><td>Protein is found in meat, fish, eggs, dairy products, seeds and nuts, beans and lentils.</td><td>Lipids are found in canola, corn, olive, peanut, soy and sunflower oil.</td><td>Carbohydrates are found in wheat, beans, milk, popcorn, potatoes, cookies, spaghetti, soft drinks, corn, cherry pie and sugar cane.</td></tr>\n      <tr><td>Uses</td><td>Proteins build and repair tissues, muscles and bones, make hormones and enzymes, support immune function, provide structural support and maintain fluid balance.</td><td>Lipids regulate hormones, provide insulation, form components of cell membranes, help cell signaling, absorb fat-soluble vitamins, and provide energy during prolonged exercise.</td><td>Carbohydrates store energy, support digestive health, spare protein for tissue repair, and play roles in cell structure and communication.</td></tr>\n    </table>\n  ",
  "13.4 Nucleic Acid": "\n    <h2>13.4 Nucleic Acid</h2>\n    <p>Nucleic acids are long-chain organic molecules present in all living cells. Nucleic acids are the main information-carrying molecules of the cell. They determine the inherited characteristics of every living thing.</p>\n    <p>Nucleic acids play an important role in the storage and transfer of genetic data from one generation to another. These are the molecules that contain all the information necessary for an organism to develop traits, carry out life functions, and reproduce.</p>\n  ",
  "13.4.1 Significance of Nucleic Acid": "\n    <h2>13.4.1 Significance of Nucleic Acid</h2>\n    <p>Nucleic acids, and DNA in particular, are key macromolecules for the continuity of life. DNA possesses the hereditary information that transfers from parents to children, providing instructions for how and when to make proteins needed to build and maintain functioning cells, tissues, and organisms.</p>\n    <p>Nucleic acids carry genetic information which is read in cells to make RNA and protein.</p>\n  ",
  "13.5 Vitamins Sources and Importance": "\n    <h2>13.5 Vitamins - Sources and their Importance to Health</h2>\n    <p>Vitamins are organic molecules that are important to an organism in small quantities for proper metabolic function. Vitamins allow your body to grow and develop.</p>\n    <p>Vitamins play important roles in body functions such as metabolism, immunity and digestion. Important nutrients cannot be synthesized in the organism in sufficient quantities for survival and therefore must be obtained through a balanced diet.</p>\n    <p>There are 13 essential vitamins, including vitamins A, C, D, E, K, and B vitamins such as riboflavin and folate. The best way to meet your vitamin needs is to eat a balanced diet containing a variety of foods.</p>\n\n    <h3>1. Fat-soluble vitamins</h3>\n    <p>Vitamins A, D, E, and K are fat-soluble. The body stores fat-soluble vitamins in fatty tissue and the liver, and reserves of these vitamins can stay in the body for days and sometimes months. Dietary fats help the body absorb fat-soluble vitamins through the intestinal tract.</p>\n\n    <h3>2. Water-soluble vitamins</h3>\n    <p>Vitamins B and C are water-soluble vitamins. They do not stay in the body for long and cannot be stored. They leave the body via the urine. Because of this, people need a more regular supply of water-soluble vitamins than fat-soluble ones.</p>\n\n    <p>Different vitamins play different roles in the body, and a person requires a different amount of each vitamin to stay healthy. Vitamins support metabolism, immune function, growth and development, bone health, antioxidant defense, and healthy skin, hair and nails.</p>\n  ",
  "13.5.1 Sources and functions of vitamins": "\n    <h2>13.5.1 Sources and functions of vitamins</h2>\n\n    <h3>1. Vitamin A</h3>\n    <p><strong>Sources:</strong> Carrots, sweet potatoes, spinach, kale, apricots, eggs, liver, and dairy products.</p>\n    <p><strong>Function:</strong> Supports vision, immune function, and skin health.</p>\n\n    <h3>2. Vitamin B Complex</h3>\n    <ul>\n      <li><strong>Vitamin B1 Thiamine:</strong> Whole grains, pork, legumes, nuts, and seeds.</li>\n      <li><strong>Vitamin B2 Riboflavin:</strong> Milk, eggs, almonds, spinach, and fortified cereals.</li>\n      <li><strong>Vitamin B3 Niacin:</strong> Chicken, turkey, fish, peanuts, and whole grains.</li>\n      <li><strong>Vitamin B5 Pantothenic Acid:</strong> Avocados, yogurt, eggs, meat, and sweet potatoes.</li>\n      <li><strong>Vitamin B6 Pyridoxine:</strong> Chickpeas, fish, poultry, bananas, and potatoes.</li>\n      <li><strong>Vitamin B7 Biotin:</strong> Eggs, nuts, seeds, and sweet potatoes.</li>\n      <li><strong>Vitamin B9 Folate:</strong> Leafy greens, legumes, seeds, and fortified cereals.</li>\n      <li><strong>Vitamin B12 Cobalamin:</strong> Meat, fish, dairy products, and fortified cereals.</li>\n    </ul>\n    <p><strong>Function:</strong> B vitamins play roles in energy production, red blood cell formation, and nervous system function.</p>\n\n    <h3>3. Vitamin C</h3>\n    <p><strong>Sources:</strong> Oranges, strawberries, kiwi, bell peppers, broccoli, Brussels sprouts, and tomatoes.</p>\n    <p><strong>Function:</strong> Supports immune function, acts as an antioxidant, and aids in collagen synthesis.</p>\n\n    <h3>4. Vitamin D</h3>\n    <p><strong>Sources:</strong> Sunlight, fatty fish such as salmon and mackerel, fortified milk and orange juice, and egg yolks.</p>\n    <p><strong>Function:</strong> Essential for bone health and calcium absorption, and supports immune function.</p>\n\n    <h3>5. Vitamin E</h3>\n    <p><strong>Sources:</strong> Nuts and seeds, spinach, broccoli, and vegetable oils such as sunflower and safflower.</p>\n    <p><strong>Function:</strong> Acts as an antioxidant, protecting cells from damage.</p>\n\n    <h3>6. Vitamin K</h3>\n    <p><strong>Sources:</strong> Leafy green vegetables such as kale and spinach, broccoli, Brussels sprouts, fish, meat and eggs in smaller amounts.</p>\n    <p><strong>Function:</strong> Essential for blood clotting and bone health.</p>\n  ",
  "13.6 Applications of Biochemistry": "\n    <h2>13.6 Applications of Biochemistry</h2>\n    <p>Biochemistry is the branch of science dedicated to the study of the chemical processes within a cell.</p>\n    <p>The findings of biochemistry are applied primarily in medicine, nutrition, and agriculture. In medicine, biochemists investigate the causes and cures of diseases. Several blood tests are carried out to detect the presence of disease, monitor its progression, and evaluate the effectiveness of treatments.</p>\n  ",
  "Blood Tests": "\n    <h2>Blood Tests</h2>\n    <p>A blood test is carried out with a blood specimen that measures the concentration of certain chemicals in a blood sample. Blood tests are essential for understanding the body’s internal function and balance.</p>\n    <p>They analyse various breakdowns in the blood, including ions, enzymes, sugars, lipids, and proteins, providing crucial insights into overall health. Blood chemistry tests provide significant information about how well kidneys, liver and other organs are working.</p>\n  ",
  "Pregnancy test": "\n    <h2>Pregnancy test</h2>\n    <p>A pregnancy test can analyze the state of pregnancy by checking a sample of urine or blood for a specific hormone. The hormone is called human chorionic gonadotropin hCG. High levels of hCG are a sign of pregnancy.</p>\n  ",
  "Cancer Screening": "\n    <h2>Cancer Screening</h2>\n    <p>Cancer screening is a test that looks for early signs of cancer in people without symptoms. It can help spot cancer at an early stage when treatment is more likely to be successful. Cervical screening can even prevent cancer from developing. Cancer screening is for people with no symptoms at all.</p>\n  ",
  "Parental Screening Tests": "\n    <h2>Parental Screening Tests</h2>\n    <p>Parental screening test helps to identify genetic disorders, assess the risk of inherited conditions, prevent transmission of infectious diseases, and prepare parents for the care of their children.</p>\n    <p>Parental screening empowers parents to take proactive steps to safeguard the health and well-being of their family. Reproductive genetic carrier screening describes a screening test carried out before pregnancy or in early pregnancy. It is used to identify a couple’s chance of having a child with a serious genetic disorder.</p>\n  ",
  "13.7 Genetics": "\n    <h2>13.7 Genetics</h2>\n    <p>Genetics is the branch of biology that studies genes, heredity, and variation in living organisms. It includes understanding how traits are passed from parents to offspring through the transmission of genetic information fixed in DNA.</p>\n    <p>It plays an essential role in various fields such as medicine, agriculture, and evolutionary biology, contributing to advancements in understanding and manipulating genetic information for practical applications.</p>\n    <p>A gene is a unit of DNA usually located on a chromosome that controls the development of one or more traits. It is the basic unit by which genetic information is passed from parent to offspring and ultimately determines the growth and function of the organism.</p>\n  ",
  "13.7.1 Genetic Engineering": "\n    <h2>13.7.1 Genetic Engineering</h2>\n    <p>Genetic engineering is a process that uses laboratory-based technologies to modify the DNA structure of an organism. Genetic engineering aims to alter the genes to enhance the capabilities of the organism.</p>\n    <p>The principle of genetic engineering is to manipulate and modify the genetic material of an organism by adding, removing or repairing part of the genetic material DNA and to incorporate desirable traits.</p>\n    <p>Genetic engineering aims to produce vaccines against disease and life-saving drugs.</p>\n  ",
  "13.7.2 Gene Therapy": "\n    <h2>13.7.2 Gene Therapy</h2>\n    <p>Gene therapy is a medical technique that involves modifying or manipulating a person’s genes to treat or prevent disease. It typically involves the introduction, alteration, or removal of genes within a patient’s cells to correct genetic disorders, fight diseases, or improve the body’s ability to fight or resist a specific condition.</p>\n    <p>It does not change the DNA in all your body; it targets a single faulty cell. This method involves inserting a healthy copy of a defective gene into a patient’s cells. This is often used for conditions caused by a single gene defect.</p>\n    <p>In some cases, gene therapy introduces a new or modified gene into the body to help treat a disease. For example, researchers may introduce a gene that helps the body fight cancer more effectively.</p>\n  ",
  "13.7.3 Cloning": "\n    <h2>13.7.3 Cloning</h2>\n    <p>Cloning is the act of rearranging a cell by replacing its nucleus with that of another cell so it becomes the genetic equivalent of the original. In general, cloning means the creation of a perfect replica. Typically, the word is used to describe the creation of a genetically identical copy.</p>\n\n    <h3>Types of cloning</h3>\n    <ol>\n      <li><strong>Reproductive cloning:</strong> Creates genetically identical organisms. It is widely used in agriculture, conservation, and the production of genetically identical animals for research purposes.</li>\n      <li><strong>Therapeutic cloning:</strong> Produces embryonic stem cells for medical research. Cloning new organs from stem cells is another way stem cells can aid people waiting for donor organs. It is used in treating conditions such as spinal cord injuries, Parkinson’s disease, diabetes, and heart disease.</li>\n      <li><strong>Gene cloning:</strong> Involves copying specific genes or DNA segments for various purposes, including research, medicine, agriculture, and industry. It is used in biotechnology, genetic engineering, pharmaceuticals, agriculture, vaccines, and genetically modified organisms GMOs.</li>\n    </ol>\n  ",
  "Stem Cells": "\n    <h2>Do You Know? Stem Cells</h2>\n    <p>Stem cells are unique cells in the body that have an amazing ability to transform into different types of cells. They serve as a repair system for the body and can divide and renew themselves over long periods.</p>\n    <p>They act as repair, division and differentiation systems to complement other cells and maintain the function of various tissues. Stem cells are found in the brain, blood, bone marrow, muscle, skin, heart, and liver tissues.</p>\n\n    <h3>Concept Assessment Exercise 13.1</h3>\n    <ol>\n      <li>Discuss the interconnectedness between amino acids, proteins, lipids, and carbohydrates within living organisms.</li>\n      <li>Evaluate the effectiveness and usefulness of vitamins in maintaining overall health and preventing nutrient deficiencies.</li>\n    </ol>\n  ",
  "Key Points": "\n    <h2>KEY POINTS</h2>\n    <ul>\n      <li>A gene is the basic physical and functional unit of heredity. Genes are made up of DNA.</li>\n      <li>Biotechnology is the use of artificial methods to modify the genetic material of living organisms or cells to produce novel compounds or perform new functions.</li>\n      <li>Cloning is the production of an exact copy, specifically an exact genetic copy of a gene, cell, or organism.</li>\n      <li>Genetic engineering is alteration of the genetic makeup of an organism using the molecular methods of biotechnology.</li>\n      <li>Monomers are simple molecules that bond together to form more complex structures called polymers.</li>\n      <li>Amino acids act as the building blocks or monomers for proteins.</li>\n      <li>When multiple amino acids link together through peptide bonds, they form a protein molecule.</li>\n    </ul>\n  ",
  "Exercise": "\n    <h2>EXERCISE</h2>\n\n    <h3>1. Multiple Choice Questions (MCQs)</h3>\n    <ol type=\"i\">\n      <li>Which of the following is not a function of proteins in the body?<br>a) Acting as enzymes<br>b) Storing genetic information<br>c) Providing structural support<br>d) Transporting molecules</li>\n      <li>Which of the following best describes proteins?<br>a) Polysaccharides<br>b) Polymers of amino acids<br>c) Chains of fatty acids<br>d) Simple sugars</li>\n      <li>Which bond is responsible for linking amino acids together in a protein?<br>a) Hydrogen bond<br>b) Ionic bond<br>c) Peptide bond<br>d) Covalent bond</li>\n      <li>Which of the following is a component of nucleic acids?<br>a) Amino acid<br>b) Fatty acid<br>c) Phosphate group<br>d) Glucose</li>\n      <li>Which of the following is a characteristic of vitamins?<br>a) They provide energy directly.<br>b) They are essential for normal body function.<br>c) They are inorganic molecules.<br>d) They are a primary source of protein.</li>\n      <li>Which vitamin is important for vision and immune function and is fat-soluble?<br>a) Vitamin C<br>b) Vitamin B12<br>c) Vitamin A<br>d) Vitamin K</li>\n      <li>Which acid carries genetic information?<br>a) Amino acid<br>b) Nucleic acid<br>c) Sulphuric acid<br>d) Ascorbic acid</li>\n      <li>Which vitamin helps the body absorb calcium and is fat-soluble?<br>a) Vitamin B12<br>b) Vitamin C<br>c) Vitamin D<br>d) Vitamin E</li>\n      <li>Which of the following is a primary function of lipids in the body?<br>a) Providing immediate energy<br>b) Storing genetic information<br>c) Long-term energy storage<br>d) Catalyzing biochemical reactions</li>\n      <li>How might a diet lacking in lipids affect the absorption of certain vitamins?<br>a) It would have no effect since vitamins are not related to lipids.<br>b) It would increase absorption because lipids compete with vitamins for absorption.<br>c) It would decrease the absorption of fat-soluble vitamins, such as A, D, E, and K.<br>d) It would decrease the absorption of water-soluble vitamins, such as C and B.</li>\n      <li>Which vitamin is essential for blood clotting?<br>a) Vitamin A<br>b) Vitamin C<br>c) Vitamin D<br>d) Vitamin E</li>\n      <li>Which biochemistry application is used to determine parentage?<br>a) Pregnancy test<br>b) Genetic engineering<br>c) Cancer screening<br>d) Parental genetic testing</li>\n    </ol>\n\n    <h3>2. Short Questions</h3>\n    <ol type=\"i\">\n      <li>How does the body make protein?</li>\n      <li>What do vitamins do for our body?</li>\n      <li>How do parents protect their children from genetic disorders?</li>\n      <li>Differentiate between genetic engineering and gene therapy.</li>\n      <li>How is gene cloning different from therapeutic cloning?</li>\n      <li>Explain why proteins are considered natural polyamides.</li>\n      <li>How do pregnancy tests use biochemical principles to detect pregnancy?</li>\n      <li>Evaluate the role of nucleic acids in heredity and cell function.</li>\n    </ol>\n\n    <h3>3. Long Questions</h3>\n    <ol type=\"i\">\n      <li>What is the significance of nucleic acids as information-carrying molecules?</li>\n      <li>Compare and contrast the functions and properties of lipids and carbohydrates.</li>\n      <li>Why is protein structure important?</li>\n      <li>Explain the significance of amino acids in living organisms.</li>\n      <li>Explain the process of cloning in biochemistry.</li>\n      <li>What is the difference between genetic engineering and gene therapy?</li>\n      <li>Why are vitamins essential to human health? Provide two examples with their functions.</li>\n      <li>Compare and contrast the uses and functions of proteins, carbohydrates, and lipids.</li>\n    </ol>\n  ",
  "Think Tank": "\n    <h2>THINK TANK</h2>\n    <ol>\n      <li>What is the importance of carbohydrates in maintaining energy levels?</li>\n      <li>What is the difference between genetic engineering and gene therapy?</li>\n    </ol>\n  "
};

const DATA = {
  classes: [
    { id: "9", title: "Class 9", icon: "9", active: false },
    { id: "10", title: "Class 10", icon: "10", active: true },
    { id: "11", title: "Class 11", icon: "11", active: false },
    { id: "12", title: "Class 12", icon: "12", active: false }
  ],
  subjects: [
    { id: "chemistry", title: "Chemistry", icon: "🧪", active: true },
    { id: "physics", title: "Physics", icon: "⚡", active: true },
    { id: "computer", title: "Computer", icon: "💻", active: false },
    { id: "maths", title: "Maths", icon: "➗", active: false },
    { id: "pakistan", title: "Pakistan Studies", icon: "🇵🇰", active: false },
    { id: "biology", title: "Biology", icon: "🧬", active: false },
    { id: "quran", title: "Quran", icon: "📖", active: false },
    { id: "urdu", title: "اردو", icon: "✍️", active: false, urdu: true }
  ],
  chapters: {
    chemistry: [
      { title: "History of Chemistry", page: "7", endPage: "13", topics: ["Student Learning Outcomes (SLOs)","1.1 Principles and Methods in Chemistry","1.2 Evolution of Scientific Ideas (Paradigms)","1.3 Scientific Paradigms in Chemistry","1.4 Confidence and Uncertainty in Chemistry","1.5 Repeatability and Reproducibility","Exercise"] },
      { title: "Matter", page: "14", endPage: "25", topics: ["Student Learning Outcomes (SLOs)","2.1 Changes of states of matter","2.2 Heating and cooling curves","2.2.1 Heating Curve","2.2.2 Cooling Curve","2.2.3 Kinetic Theory Interpretation","2.3 Evaporation and Boiling","2.3.1 Effect of pressure on evaporation and boiling","2.4 Kinetic Particle Theory and Gas Laws","2.4.1 Boyle's Law","2.4.2 Charles's Law","2.4.3 Avogadro's Law","2.5 Diffusion of gases","2.5.1 Diffusion Process Explained by Kinetic Particle Theory","2.5.2 Factors affecting diffusion","2.6 Sublimation","2.6.1 Importance of Diffusion Rates in Medicine","Key Points","Exercise","Think Tank"] },
      { title: "Stoichiometry", page: "26", endPage: "45", topics: ["Student Learning Outcomes (SLOs)","Introduction to Stoichiometry","3.1 Mole","Mole ratios in Stoichiometric Calculations","Molar Volume","3.2 Percentage Composition","3.3 Limiting and Non-Limiting Reactants","3.3.1 Identification of a Limiting Reactant in a Reaction","3.4 Theoretical Yield, Actual yield and Percent yield","3.5 Determining Empirical and Molecular Formulas","Percentage purity","3.6 Concentration Units","3.6.1 Problems Involving the Molarity of a Solution","Strength of a Solution","3.6.2 Problems Involving Interconversion of Molarity and Strength","3.6.3 Dilution of Solutions","3.6.4 Calculating the concentration of a solution through titration","Key Points","Exercise","Think Tank"] },
      { title: "Electrochemistry", page: "46", endPage: "62", topics: ["Student Learning Outcomes (SLOs)","Introduction to Electrochemistry","4.1 Electrochemical cells","4.1.1 Nature of Electrochemical Process","4.1.2 Concept of Electrolytes and Electrolysis","4.1.3 Electrolytic Cells","4.2 Electrolysis","4.2.1 Electrolysis of molten electrolyte","4.2.2 Electrolysis of concentrated aqueous solution","4.2.3 Electrolysis of dilute aqueous solution","4.3 Electrolysis of halide compound","4.4 Electroplating","4.4.1 Applications of Electroplating","4.5 Galvanic Cells (Daniel Cells)","4.5.1 Reactions in a Daniel Cell","4.6 Electrochemical Series","4.7 Battery-A Source of Electrical Energy","Fuel Cell","4.7.1 Advantages and disadvantages of fuel cells","Key Points","Exercise","Think Tank"] },
      { title: "Reaction Kinetics", page: "63", endPage: "73", topics: ["Student Learning Outcomes (SLOs)","Introduction to Reaction Kinetics","5.1 Rates of Reactions","Average Rate of Reaction","Interpreting Data","5.2 Collision Theory and Activation Energy","5.3 Catalysts and their Role in Reaction Kinetics","5.3.1 Physical Parameters that Affect the Rate of Reaction","5.3.2 Factors Affecting Rate of Reactions","5.3.4 Enzymes","5.4 Role of Chemical Kinetics in the Food Industry","Key Points","Exercise","Think Tank"] },
      { title: "Salts", page: "74", endPage: "81", topics: ["Student Learning Outcomes (SLOs)","6.1 Salts","6.2 Physical State and Melting Points","6.2.1 Solids at STP","6.2.2 Lattice Structure of Ionic Compounds","6.2.3 Electrical Conductivity","6.2.4 High melting points and boiling points","6.2.5 Hardness and brittleness","6.3 Preparation, Separation, and Purification of Soluble Salts","6.3.1 Preparation by Titration (Acid and Alkali)","6.3.2 Preparation with Excess Metal","6.3.3 Preparation with Excess Insoluble Base","6.3.4 Preparation with Excess Insoluble Carbonate","6.4 Soluble and insoluble salts","Key Points","Exercise","Think Tank"] },
      { title: "Nitrogen, Sulphur and Metals", page: "82", endPage: "94", topics: ["Student Learning Outcomes (SLOs)","Introduction to Nitrogen, Sulphur and Metals","7.1 Photochemical Smog","7.2 Acid rain","7.2.1 Role of nitric oxide and nitrogen dioxide in the formation of acid rain","7.2.2 Direct Role in Acid Rain Formation","Catalytic role in the oxidation of sulphur dioxide","7.3.3 Overall Impact on Acid Rain","7.3 Contact Process","Different Steps involved in the contact process","7.4 Haber Process","7.5 Oxides","7.5 General characteristics of metals","7.5.1 Reactivity series","Activity 7.1 Exploring Metal Reactivity","Key Points","Exercise","Think Tank"] },
      { title: "Organic Chemistry", page: "95", endPage: "108", topics: ["Student Learning Outcomes (SLOs)","Introduction to Organic Chemistry","8.1 Structural Formula","8.1.1 The normal way to draw a structural formula","8.1.2 Structural formulae for alkenes","8.1.3 Structural formulae for alkynes","8.2 Naming Organic Compounds","8.2.1 Naming Alkanes","8.2.2 Naming Alkenes","8.2.3 Naming Alkynes","8.2.3 Naming Alcohols","8.2.4 Naming Carboxylic Acids","8.3 Esters","Key Points","Exercise","Think Tank"] },
      { title: "Hydrocarbons", page: "109", endPage: "122", topics: ["Student Learning Outcomes (SLOs)","Introduction to Hydrocarbons","9.1 Saturated and Unsaturated Hydrocarbons","9.2 Alkenes","9.2.1 Preparation of Alkene","9.2.2 Properties of Alkenes","9.3 Alkyne","Commercial Importance of Ethyne","9.4 Distinguishing saturated and unsaturated hydrocarbons","Baeyer’s Test","Activity 9.1","9.5 Fossil Fuels","9.5.1 Coal","9.5.2 Natural Gas","9.5.3 Petroleum","9.6 Separating crude oil","Key Points","Exercise","Think Tank"] },
      { title: "Hydroxy Compounds", page: "123", endPage: "128", topics: ["Student Learning Outcomes (SLOs)","Introduction to Hydroxy Compounds","10.1 Manufacture of Ethanol","Making ethanol by fermentation","Making ethanol by the hydration of ethene","10.2 Combustion of Alcohols","10.2.1 Application of Alcohols as Fuels","10.3 Role of alcohols in the pharmaceutical industry","10.4 Role of alcohols in the cosmetic industry","10.5 Impact of alcohols on Everyday Life Public Health","Key Points","Exercise","Think Tank"] },
      { title: "Carboxylic Compounds", page: "129", endPage: "136", topics: ["Student Learning Outcomes (SLOs)","Introduction to Carboxylic Compounds","11.1 Formation of Ethanoic acid","By the Oxidation of Alcohols","By the Bacterial Oxidation of Ethanol","11.2 Reactions of Carboxylic Acids","Reaction with bases","Reaction with carbonates and bicarbonates","Reactions with metals","Preparation of Esters","Activity 11.1","11.3 Industrial Applications of Carboxylic acids and Esters","11.4 Everyday uses of Carboxylic acids","11.5 Everyday uses of Esters","Key Points","Exercise","Think Tank"] },
      { title: "Polymers", page: "137", endPage: "146", topics: ["Student Learning Outcomes (SLOs)","12.1 Polymers","12.1.1 Addition polymers","12.1.2 Condensation polymers","PET Recycling and Re-polymerisation","12.2 Plastics","12.2.1 Properties of Plastics","12.2.2 Environmental Impact of plastics","12.3 Importance of Polymers in the Textile Industry","12.4 Properties of Plastics and Their Implications for Disposal","12.4.1 Environmental Challenges Caused by Plastics","Key Points","Exercise","Think Tank"] },
      { title: "Biochemistry", page: "147", endPage: "159", topics: ["Student Learning Outcomes (SLOs)","13.1 Proteins","13.1.1 Classification of Protein","13.2 Carbohydrates","13.3 Lipids","Proteins, Lipids and Carbohydrates Table","13.4 Nucleic Acid","13.4.1 Significance of Nucleic Acid","13.5 Vitamins Sources and Importance","13.5.1 Sources and functions of vitamins","13.6 Applications of Biochemistry","Blood Tests","Pregnancy test","Cancer Screening","Parental Screening Tests","13.7 Genetics","13.7.1 Genetic Engineering","13.7.2 Gene Therapy","13.7.3 Cloning","Stem Cells","Key Points","Exercise","Think Tank"] }
    ],
    physics: [
      {
        title: "Chapter 1: Heat Capacity and Modes of Heat Transfer",
        topics: ["Specific Heat Capacity", "Transfer of Heat", "Applications of Heat Transfer", "Greenhouse Effect and Global Warming", "Flow of Heat in Geothermal Activities"]
      },
      {
        title: "Chapter 2: Thermal Expansion and Change of State",
        topics: ["Kinetic Theory of Matter", "Thermal Expansion", "Evaporation", "Latent Heat", "Pressure Exerted by Gas Particles", "Superconductivity"]
      },
      {
        title: "Chapter 3: Waves",
        topics: ["Wave Motion", "Wave Propagation", "Characteristic Wave Parameters", "Waves and their Types", "Types of Waves On the Basis of Medium", "Types of Waves On the Basis of Propagation", "Wave Characteristics", "Properties of Waves", "Tsunamis"]
      },
      {
        title: "Chapter 4: Sound",
        topics: ["Source of Sound", "Nature of Sound Waves", "Ultrasound", "Infrasound", "Characteristics of Sound Waves", "Analysing Sound Waves", "Speed of Sound", "Noise", "Reflection, Refraction and Diffraction of Sound Waves", "Echo", "Acoustics", "Human Hearing System"]
      },
      {
        title: "Chapter 5: Optics",
        topics: ["Reflection of Light", "Refraction of Light", "Total Internal Reflection", "Thin Lenses", "Application of Lenses", "Visible Spectrum", "Human Eye and Colour Perception", "Gravitational Lensing", "Acoustic Lenses"]
      },
      {
        title: "Chapter 6: Electrostatics",
        topics: ["Static Charge", "Conductors and Insulators", "Charging and Discharging", "Electroscope", "Electric Field", "Applications of Electrostatics", "Electrical Breakdown"]
      },
      {
        title: "Chapter 7: Current Electricity",
        topics: ["Electric Current", "Alternating and Direct Current", "Potential Difference", "EMF", "Ohm's Law", "Resistance", "Resistivity", "Electrical Measuring Instruments", "Experiment for Demonstration of Resistance"]
      },
      {
        title: "Chapter 8: Electric Circuits",
        topics: ["Circuit Elements and Diagram", "Resistors", "Types of Resistors", "Combination of Resistors", "Combination of EMF Sources", "Electricity and Its Uses", "Electrical Energy", "Electric Power", "Household Circuits and Electric Safety"]
      },
      {
        title: "Chapter 9: Electronics",
        topics: ["Semiconductors", "N and P Type Semiconductors", "PN Junction", "Characteristics of Diode Under Biasing", "Light Emitting Diode", "Transistor", "Relays and Switching Circuits", "Transistor as a Switch", "Digital Electronics", "Fundamental Logic Gates", "Universal Logic Gates", "Uses of Logic Gates", "Analogue and Digital Electronics", "Quantum Computers"]
      },
      {
        title: "Chapter 10: Electromagnetism",
        topics: ["Magnetic Field Due to Current Carrying Wire", "Magnetic Field Due to Current Carrying Solenoid", "Earth's Magnetic Field", "Application of Magnetic Effect of Current", "Force On a Current Carrying Conductor Place in a Magnetic Field", "Current Carrying Coil in a Magnetic Field", "Electric Motor", "Electromagnetic Induction", "Lenz's Law", "Electric Generator", "Transformer", "Deflection of Electron Beam", "Cathode Ray Oscilloscope"]
      },
      {
        title: "Chapter 11: Electromagnetic Waves",
        topics: ["Electromagnetic Spectrum", "Applications of Electromagnetic Waves", "Risks Associated with Electromagnetic Waves", "Scattering of Light", "Nature of Light"]
      },
      {
        title: "Chapter 12: Nuclear Physics",
        topics: ["Discovery of Nucleus", "Nuclear Representations", "Isotopes and Radioisotopes", "Radioactivity", "Nuclear Decay", "Half-Life", "Ionizing Nuclear Radiations", "Applications of Radiation", "Background Radiation", "Nuclear Fission", "Nuclear Fusion", "Dark Matter", "Falsifiability"]
      }
    ]
  }
};

let state = {
  authMode: "login",
  user: JSON.parse(localStorage.getItem("examPrepCurrentUser") || "null"),
  screen: "auth",
  selectedClass: null,
  selectedSubject: "chemistry",
  selectedChapter: 0,
  selectedTopic: ""
};

function users(){
  return JSON.parse(localStorage.getItem("examPrepUsers") || "{}");
}

function setUsers(obj){
  localStorage.setItem("examPrepUsers", JSON.stringify(obj));
}

function saveCurrentUser(user){
  localStorage.setItem("examPrepCurrentUser", JSON.stringify(user));
}

function toast(text){
  const old = document.querySelector(".toast");
  if(old) old.remove();

  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = text;
  document.body.appendChild(t);

  setTimeout(() => t.classList.add("show"), 20);
  setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => t.remove(), 250);
  }, 1600);
}

function render(){
  if(!state.user){
    state.screen = "auth";
    renderAuth();
    return;
  }

  if(state.screen === "classes") renderClasses();
  if(state.screen === "subjects") renderSubjects();
  if(state.screen === "workspace") renderWorkspace();
}

function renderAuth(){
  app.innerHTML = `
    <div class="auth-wrap">
      <div class="auth-card">
        <div class="auth-hero">
          <h1>AI Exam Prep</h1>
          <p>Login or create your account to start studying with AI.</p>
        </div>

        <div class="auth-body">
          <div class="auth-tabs">
            <button class="${state.authMode === "login" ? "active" : ""}" onclick="setAuthMode('login')">Login</button>
            <button class="${state.authMode === "register" ? "active" : ""}" onclick="setAuthMode('register')">Register</button>
          </div>

          <form onsubmit="handleAuth(event)">
            ${state.authMode === "register" ? `
              <div class="field">
                <label>Full Name</label>
                <input id="fullName" placeholder="Enter your name" required />
              </div>
            ` : ""}

            <div class="field">
              <label>Username</label>
              <input id="username" placeholder="Enter username" required />
            </div>

            <div class="field">
              <label>Password</label>
              <input id="password" type="password" placeholder="Enter password" required />
            </div>

            <button class="main-btn" type="submit">${state.authMode === "login" ? "Login" : "Create Account"}</button>
          </form>

          <div class="note">Local account for this computer only.</div>

          <button class="config-ai-btn" type="button" onclick="openAiConfig()">⚙ Configure AI</button>

          <div class="ai-config-box" id="aiConfigBox">
            <div class="ai-config-card">
              <h2>Configure AI</h2>
              <p>Add your own AI provider details. These settings stay on this computer.</p>

              <form onsubmit="saveAiConfig(event)">
                <div class="field">
                  <label>AI Provider</label>
                  <select id="aiProvider">
                    <option value="ollama">Ollama Local</option>
                    <option value="openai">OpenAI API</option>
                    <option value="custom">Custom API</option>
                  </select>
                </div>

                <div class="field">
                  <label>API URL</label>
                  <input id="aiApiUrl" placeholder="Example: http://localhost:11434/api/generate" />
                </div>

                <div class="field">
                  <label>Model Name</label>
                  <input id="aiModel" placeholder="Example: llama3.2 or gpt-4o-mini" />
                </div>

                <div class="field">
                  <label>API Key</label>
                  <input id="aiApiKey" type="password" placeholder="Paste API key if needed" />
                </div>

                <button class="main-btn" type="submit">Save AI Configuration</button>
                <button class="config-cancel" type="button" onclick="closeAiConfig()">Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setAuthMode(mode){
  state.authMode = mode;
  renderAuth();
}

function handleAuth(e){
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const all = users();

  if(state.authMode === "register"){
    const fullName = document.getElementById("fullName").value.trim();

    if(all[username]){
      toast("Username already exists");
      return;
    }

    all[username] = { username, password, fullName };
    setUsers(all);

    state.user = { username, fullName };
    saveCurrentUser(state.user);
    state.screen = "classes";
    render();
    return;
  }

  if(!all[username] || all[username].password !== password){
    toast("Wrong username or password");
    return;
  }

  state.user = { username, fullName: all[username].fullName };
  saveCurrentUser(state.user);
  state.screen = "classes";
  render();
}

function renderTopbar(){
  return `
    <div class="topbar">
      <div class="brand">
        <div class="logo">AI</div>
        <div>
          <h2>AI Exam Prep</h2>
          <p>Welcome, ${state.user.fullName || state.user.username}</p>
        </div>
      </div>
      <button class="logout" onclick="goToFirstScreen()">Login / Register</button>
    </div>
  `;
}

function renderClasses(){
  const cards = DATA.classes.map(c => `
    <button class="app-card" onclick="selectClass('${c.id}')">
      <div class="icon">${c.icon}</div>
      <div class="card-text">
        <div class="card-title">${c.title}</div>
        <div class="card-sub">${c.active ? "Active now" : "Coming soon"}</div>
      </div>
      <div class="badge ${c.active ? "" : "soon"}">${c.active ? "Active" : "Soon"}</div>
    </button>
  `).join("");

  app.innerHTML = `
    <div class="app-shell">
      ${renderTopbar()}
      <main class="page">
        <button class="class-back-login" onclick="goToFirstScreen()">← Back to Login / Register</button>
        <section class="hero">
          <h1>Choose Your Class</h1>
          <p>Start with Class 10 now. Other classes will be added soon.</p>
        </section>
        <section class="card-list">${cards}</section>
      </main>
    </div>
  `;
}

function selectClass(id){
  const cls = DATA.classes.find(c => c.id === id);

  if(!cls.active){
    toast(`${cls.title} coming soon`);
    return;
  }

  state.selectedClass = id;
  state.screen = "subjects";
  render();
}

function renderSubjects(){
  const cards = DATA.subjects.map(s => `
    <button class="app-card ${s.urdu ? "urdu" : ""}" onclick="selectSubject('${s.id}')">
      <div class="icon">${s.icon}</div>
      <div class="card-text">
        <div class="card-title">${s.title}</div>
        <div class="card-sub">${s.active ? "Open study workspace" : "Coming soon"}</div>
      </div>
      <div class="badge ${s.active ? "" : "soon"}">${s.active ? "Active" : "Soon"}</div>
    </button>
  `).join("");

  app.innerHTML = `
    <div class="app-shell">
      ${renderTopbar()}
      <main class="page">
        <button class="class-back-login" onclick="backToClasses()">← Back to Classes</button>
        <section class="hero">
          <h1>Choose Subject</h1>
          <p>Select a subject first. Then you will enter the study workspace with chapters and topics.</p>
        </section>
        <section class="card-list">${cards}</section>
      </main>
    </div>
  `;
}
function renderWorkspace(){
  const subjects = DATA.subjects.map(s => `
    <button class="subject-pill ${state.selectedSubject === s.id ? "active" : ""} ${s.urdu ? "urdu" : ""}" onclick="selectSubject('${s.id}')">
      <span>${s.icon}</span>
      <strong>${s.title}</strong>
      <em>${s.active ? "Active" : "Soon"}</em>
    </button>
  `).join("");

  const chapters = DATA.chapters[state.selectedSubject] || [];
  const currentChapter = chapters[state.selectedChapter] || chapters[0];
  if(currentChapter && !state.selectedTopic) state.selectedTopic = currentChapter.topics[0];

  const chapterList = chapters.map((ch, index) => `
    <div class="chapter-box ${state.selectedChapter === index ? "active" : ""}">
      <button class="chapter-title-btn" onclick="selectChapter(${index})">
        <span>${index + 1}</span>
        <strong>${ch.title}</strong>
      </button>

      <select onchange="selectTopic(${index}, this.value)">
        ${ch.topics.map(t => `<option value="${t}" ${(state.selectedChapter === index && state.selectedTopic === t) ? "selected" : ""}>${t}</option>`).join("")}
      </select>
    </div>
  `).join("");

  app.innerHTML = `
    <div class="app-shell workspace-shell">
      ${renderTopbar()}

      <main class="study-layout">
        <section class="study-main">
          <div class="study-hero">
            <button class="small-back" onclick="backToSubjects()">← Subjects</button>
            <h1>${currentSubjectIcon()} ${currentSubjectTitle()}</h1>
            <p>Study workspace with chapters, topics, practice, notes, and AI tutor.</p>
          </div>

          <div class="subject-row">
            ${subjects}
          </div>

          <div class="content-card">
            <div class="content-label">Current Topic</div>
            <h2>${currentChapter ? currentChapter.title : "Coming Soon"}</h2>
            <h3>${state.selectedTopic || "Select a topic"}</h3>
            <p>This area shows the digital textbook content for the selected Chemistry chapter and topic.</p>

            ${renderDigitalBookContent(currentChapter)}

            <div class="action-grid">
              <button onclick="askTopicAI('Explain this topic in simple words')">Explain Topic</button>
              <button onclick="askTopicAI('Give me important exam questions')">Important Questions</button>
              <button onclick="askTopicAI('Generate MCQs with answers')">MCQs</button>
              <button onclick="askTopicAI('Give me short notes')">Short Notes</button>
            </div>

            <div class="ai-output-card" id="studyAiOutput">
              <strong>AI Study Output</strong>
              <p>Choose a topic and click any AI study button to generate notes here.</p>
            </div>
          </div>
        </section>

        <aside class="chapter-dashboard">
          <div class="dash-head">
            <h2>Chapters</h2>
            <p>Select chapter and topic</p>
          </div>
          <div class="chapter-scroll">
            ${chapterList || `<div class="soon-box">This subject is coming soon.</div>`}
          </div>
        </aside>
      </main>

      ${renderAI()}
    </div>
  `;

  startAIMessage();
}

function currentSubjectTitle(){
  const s = DATA.subjects.find(x => x.id === state.selectedSubject);
  return s ? s.title : "Subject";
}

function currentSubjectIcon(){
  const s = DATA.subjects.find(x => x.id === state.selectedSubject);
  return s ? s.icon : "📘";
}

function selectSubject(id){
  const subject = DATA.subjects.find(s => s.id === id);

  if(!subject.active){
    toast(`${subject.title} coming soon`);
    return;
  }

  state.selectedSubject = id;
  state.selectedChapter = 0;
  state.selectedTopic = DATA.chapters[id][0].topics[0];
  state.screen = "workspace";
  render();
}

function selectChapter(index){
  const chapters = DATA.chapters[state.selectedSubject] || [];
  state.selectedChapter = index;
  state.selectedTopic = chapters[index].topics[0];
  render();
}

function selectTopic(index, topic){
  state.selectedChapter = index;
  state.selectedTopic = topic;
  render();
}

function backToClasses(){
  state.screen = "classes";
  render();
}

function backToSubjects(){
  state.screen = "subjects";
  render();
}

function logout(){
  localStorage.removeItem("examPrepCurrentUser");
  state.user = null;
  state.screen = "auth";
  render();
}

function renderAI(){
  return `
    <button class="ai-btn" onclick="toggleAI()">🤖 Ask AI</button>

    <section class="ai-panel" id="aiPanel">
      <div class="ai-head">
        <strong>AI Exam Tutor</strong>
        <button class="ai-close" onclick="toggleAI(false)">Close</button>
      </div>
      <div class="ai-body" id="aiBody"></div>
      <form class="ai-form" onsubmit="askAI(event)">
        <input id="aiInput" placeholder="Ask anything about your exam..." autocomplete="off" />
        <button>Send</button>
      </form>
    </section>
  `;
}

function toggleAI(force){
  const panel = document.getElementById("aiPanel");
  if(!panel) return;

  if(force === true) panel.classList.add("open");
  else if(force === false) panel.classList.remove("open");
  else panel.classList.toggle("open");

  startAIMessage();
}

function startAIMessage(){
  const body = document.getElementById("aiBody");
  if(!body || body.dataset.started) return;

  body.dataset.started = "yes";
  addAIMessage("Hi, I am your AI Exam Tutor. Select any chapter/topic and ask me for notes, MCQs, short questions, or explanations.", "bot");
}

function addAIMessage(text, who){
  const body = document.getElementById("aiBody");
  if(!body) return null;

  const msg = document.createElement("div");
  msg.className = `msg ${who}`;
  msg.textContent = text;
  body.appendChild(msg);
  body.scrollTop = body.scrollHeight;
  return msg;
}

async function askTopicAI(task){
  const output = document.getElementById("studyAiOutput");
  const q = `${task} for ${currentSubjectTitle()} > ${getCurrentChapterTitle()} > ${state.selectedTopic}`;

  if(output){
    output.innerHTML = `<strong>AI Study Output</strong><p>Thinking...</p>`;
  }

  toggleAI(true);
  addAIMessage(q, "user");
  const chatWait = addAIMessage("Thinking...", "bot");

  const prompt = `You are an AI exam prep tutor. Give clear, simple, exam-focused help.\n\nSubject: ${currentSubjectTitle()}\nChapter: ${getCurrentChapterTitle()}\nTopic: ${state.selectedTopic}\nTask: ${task}`;

  try{
    const res = await fetch("/api/ask", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body:JSON.stringify({ prompt, question:q, message:q, aiConfig:getAiConfig() })
    });

    const data = await res.json();
    const answer = data.answer || data.response || data.message || data.text || "AI replied, but response format was not clear.";

    if(output){
      output.innerHTML = `<strong>AI Study Output</strong><pre>${answer.replace(/[<>&]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]))}</pre>`;
    }

    if(chatWait) chatWait.textContent = answer;
  }catch(err){
    const fail = "AI server is not responding. Start the server and make sure Ollama is running.";
    if(output) output.innerHTML = `<strong>AI Study Output</strong><p>${fail}</p>`;
    if(chatWait) chatWait.textContent = fail;
  }
}

function getCurrentChapterTitle(){
  const chapters = DATA.chapters[state.selectedSubject] || [];
  return chapters[state.selectedChapter] ? chapters[state.selectedChapter].title : "";
}

async function askAI(e){
  e.preventDefault();

  const input = document.getElementById("aiInput");
  const question = input.value.trim();
  if(!question) return;

  input.value = "";
  addAIMessage(question, "user");

  const wait = addAIMessage("Thinking...", "bot");

  const context = `
Class: ${state.selectedClass}
Subject: ${currentSubjectTitle()}
Chapter: ${getCurrentChapterTitle()}
Topic: ${state.selectedTopic}
Screen text: ${document.body.innerText.replace(/\s+/g, " ").slice(0, 1800)}
  `;

  const prompt = `You are an AI exam prep tutor. Give simple exam-focused answers. Use headings and bullet points when helpful.\n\n${context}\n\nStudent question: ${question}`;

  try{
    const res = await fetch("/api/ask", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body:JSON.stringify({ prompt, question, message:question, aiConfig:getAiConfig() })
    });

    const data = await res.json();
    wait.textContent = data.answer || data.response || data.message || data.text || "AI replied, but response format was not clear.";
  }catch(err){
    wait.textContent = "AI server is not responding. Start the server and make sure Ollama is running.";
  }
}

if(state.user){
  state.screen = "classes";
}

render();



function getAiConfig(){
  return JSON.parse(localStorage.getItem("examPrepAiConfig") || "{}");
}

function openAiConfig(){
  const box = document.getElementById("aiConfigBox");
  const cfg = getAiConfig();

  document.getElementById("aiProvider").value = cfg.provider || "ollama";
  document.getElementById("aiApiUrl").value = cfg.apiUrl || "http://localhost:11434/api/generate";
  document.getElementById("aiModel").value = cfg.model || "llama3.2";
  document.getElementById("aiApiKey").value = cfg.apiKey || "";

  box.classList.add("open");
}

function closeAiConfig(){
  const box = document.getElementById("aiConfigBox");
  if(box) box.classList.remove("open");
}

function saveAiConfig(e){
  e.preventDefault();

  const cfg = {
    provider: document.getElementById("aiProvider").value,
    apiUrl: document.getElementById("aiApiUrl").value.trim(),
    model: document.getElementById("aiModel").value.trim(),
    apiKey: document.getElementById("aiApiKey").value.trim()
  };

  localStorage.setItem("examPrepAiConfig", JSON.stringify(cfg));
  closeAiConfig();
  toast("AI configuration saved");
}



function goToFirstScreen(){
  localStorage.removeItem("examPrepCurrentUser");
  state.user = null;
  state.screen = "auth";
  render();
}






function renderDigitalBookContent(chapter){
  if(state.selectedSubject === "physics" && chapter && typeof renderPhysicsPdfContentClean === "function"){
    return renderPhysicsPdfContentClean(chapter);
  }
  if(state.selectedSubject !== "chemistry" || !chapter){
    return "";
  }

  const key = chapter.title;
  const topic = state.selectedTopic || "";
  const content = CHEMISTRY_DIGITAL_BOOK[key] || {};
  const topicContent = content[topic] || content["__chapterIntro"] || "";

  if(!topicContent){
    return `
      <div class="digital-book-area">
        <div class="digital-book-head">
          <strong>Digital Book Content</strong>
          <span>${chapter.title}</span>
        </div>
        <div class="digital-book-empty">
          Exact textbook wording for this chapter will be added here next.
        </div>
      </div>
    `;
  }

  return `
    <div class="digital-book-area">
      <div class="digital-book-head">
        <strong>Digital Book Content</strong>
        <span>${chapter.title}</span>
      </div>
      <article class="digital-book-text">${topicContent}</article>
    </div>
  `;
}

// ONLINE_AI_RENDER_FIX_V1
(function(){
  try{
    const cfg = JSON.parse(localStorage.getItem("examPrepAiConfig") || "{}");
    if(!cfg.provider || cfg.provider === "ollama"){
      cfg.provider = "server";
      cfg.model = "gpt-4o-mini";
      cfg.apiUrl = "/api/ask";
      localStorage.setItem("examPrepAiConfig", JSON.stringify(cfg));
    }
  }catch(e){}

  const oldFetch = window.fetch.bind(window);

  window.fetch = function(input, init){
    const url = typeof input === "string" ? input : (input && input.url ? input.url : "");

    if(url.includes("localhost:11434") || url.includes("127.0.0.1:11434") || url.includes("/api/generate")){
      let body = {};
      try{ body = JSON.parse((init && init.body) || "{}"); }catch(e){}

      const question = body.prompt || body.question || body.message || "";
      const context = document.querySelector(".digital-book-text")?.innerText || document.querySelector(".content-card")?.innerText || "";

      return oldFetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          context,
          aiConfig: { provider: "server", model: "gpt-4o-mini" }
        })
      }).then(function(r){
        return r.json();
      }).then(function(data){
        const answer = data.answer || data.response || "AI Tutor connected.";
        return new Response(JSON.stringify({ response: answer, answer: answer }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      });
    }

    return oldFetch(input, init);
  };
})();


// AI_FORCE_RENDER_BACKEND_V2
(function(){
  function forceConfig(){
    const cfg = {
      provider: "server",
      apiUrl: "/api/ask",
      model: "gpt-4o-mini",
      apiKey: ""
    };
    localStorage.setItem("examPrepAiConfig", JSON.stringify(cfg));
    return cfg;
  }

  forceConfig();

  window.getAiConfig = function(){
    return forceConfig();
  };

  const originalFetch = window.fetch.bind(window);

  window.fetch = function(input, init){
    const url = typeof input === "string" ? input : (input && input.url ? input.url : "");

    const looksLikeAi =
      url.includes("localhost:11434") ||
      url.includes("127.0.0.1:11434") ||
      url.includes("/api/generate") ||
      url.includes("/api/ask") ||
      url.includes("openai.com");

    if(looksLikeAi){
      let oldBody = {};
      try { oldBody = JSON.parse((init && init.body) || "{}"); } catch(e){}

      let question =
        oldBody.question ||
        oldBody.message ||
        oldBody.prompt ||
        oldBody.q ||
        "";

      if(!question && Array.isArray(oldBody.messages)){
        question = oldBody.messages.map(m => m.content || "").join("\n");
      }

      const context =
        document.querySelector(".digital-book-text")?.innerText ||
        document.querySelector(".content-card")?.innerText ||
        document.querySelector("main")?.innerText ||
        "";

      return originalFetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: question || "Explain this topic simply",
          context,
          aiConfig: forceConfig()
        })
      }).then(r => r.json()).then(data => {
        const answer = data.answer || data.response || "AI Tutor connected.";
        return new Response(JSON.stringify({
          answer,
          response: answer
        }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      });
    }

    return originalFetch(input, init);
  };
})();


// ALL_SUBJECTS_STUDY_PACK_V1
(function(){
  const STUDY_PACKS = {
    physics: {
      label: "Physics",
      chapters: [
        ["Simple Harmonic Motion and Waves", ["Simple Harmonic Motion", "Wave Motion", "Types of Waves", "Frequency and Time Period", "Speed of Wave", "Important Short Questions"]],
        ["Sound", ["Sound Waves", "Characteristics of Sound", "Echo", "Ultrasound", "Noise Pollution", "Important Short Questions"]],
        ["Geometrical Optics", ["Reflection of Light", "Refraction of Light", "Lenses", "Image Formation", "Optical Instruments", "Important Short Questions"]],
        ["Electrostatics", ["Electric Charge", "Coulomb's Law", "Electric Field", "Electric Potential", "Capacitors", "Important Short Questions"]],
        ["Current Electricity", ["Electric Current", "Ohm's Law", "Resistance", "Series and Parallel Circuits", "Electric Power", "Important Short Questions"]],
        ["Electromagnetism", ["Magnetic Field", "Force on Current Carrying Conductor", "Electromagnetic Induction", "Transformer", "Important Short Questions"]],
        ["Basic Electronics", ["Semiconductors", "Diode", "Rectification", "Transistor", "Logic Gates", "Important Short Questions"]],
        ["Information and Communication Technology", ["Analogue and Digital Signals", "Communication System", "Internet", "Mobile Communication", "Important Short Questions"]],
        ["Atomic and Nuclear Physics", ["Structure of Atom", "Radioactivity", "Nuclear Fission", "Nuclear Fusion", "Uses of Radiation", "Important Short Questions"]]
      ]
    },
    maths: {
      label: "Maths",
      chapters: [
        ["Quadratic Equations", ["Standard Form", "Factorization Method", "Formula Method", "Discriminant", "Word Problems"]],
        ["Theory of Quadratic Equations", ["Nature of Roots", "Sum and Product of Roots", "Forming Equations", "Important Questions"]],
        ["Variations", ["Direct Variation", "Inverse Variation", "Joint Variation", "Word Problems"]],
        ["Partial Fractions", ["Proper Fractions", "Repeated Linear Factors", "Quadratic Factors", "Practice Questions"]],
        ["Sets and Functions", ["Sets", "Union and Intersection", "Functions", "Domain and Range"]],
        ["Basic Statistics", ["Mean", "Median", "Mode", "Frequency Table", "Graphs"]],
        ["Introduction to Trigonometry", ["Trigonometric Ratios", "Angles", "Identities", "Heights and Distances"]],
        ["Projection of a Side of a Triangle", ["Projection Formula", "Right Triangle Use", "Exercise Questions"]],
        ["Chords of a Circle", ["Circle Terms", "Chord Properties", "Theorems", "Practice"]],
        ["Tangent to a Circle", ["Tangent Properties", "Theorems", "Construction", "Practice"]]
      ]
    },
    computer: {
      label: "Computer Science",
      chapters: [
        ["Problem Solving", ["Problem Analysis", "Algorithm", "Flowchart", "Pseudocode", "Dry Run"]],
        ["Data Types and Operators", ["Constants and Variables", "Data Types", "Arithmetic Operators", "Relational Operators", "Logical Operators"]],
        ["Input Output and Control Structures", ["Input Output", "Sequence", "Selection", "If Else", "Loops"]],
        ["Arrays", ["One Dimensional Array", "Array Declaration", "Array Traversal", "Searching", "Sorting"]],
        ["Functions", ["Built-in Functions", "User-defined Functions", "Parameters", "Return Value"]],
        ["File Handling", ["Text Files", "Read File", "Write File", "Append File"]],
        ["Database", ["Database Concepts", "Tables", "Records", "Primary Key", "SQL Basics"]],
        ["Computer Networks", ["Network Types", "Internet", "IP Address", "Network Devices", "Cyber Safety"]]
      ]
    },
    biology: {
      label: "Biology",
      chapters: [
        ["Gaseous Exchange", ["Respiration", "Human Respiratory System", "Gas Exchange in Lungs", "Breathing Problems"]],
        ["Homeostasis", ["Excretion", "Kidneys", "Urinary System", "Skin and Temperature Control"]],
        ["Coordination and Control", ["Nervous System", "Neuron", "Brain", "Reflex Action", "Endocrine Glands"]],
        ["Support and Movement", ["Skeleton", "Bones", "Joints", "Muscles"]],
        ["Reproduction", ["Reproduction in Plants", "Reproduction in Humans", "Important Terms"]],
        ["Inheritance", ["DNA", "Genes", "Chromosomes", "Mendel's Work", "Variation"]],
        ["Man and Environment", ["Ecosystem", "Food Chain", "Pollution", "Conservation"]],
        ["Biotechnology", ["Fermentation", "Genetic Engineering", "Uses of Biotechnology"]],
        ["Pharmacology", ["Medicines", "Antibiotics", "Vaccines", "Drug Abuse"]]
      ]
    },
    pakistan: {
      label: "Pakistan Studies",
      chapters: [
        ["Ideological Basis of Pakistan", ["Two Nation Theory", "Ideology of Pakistan", "Role of Islam", "Important Questions"]],
        ["Making of Pakistan", ["Sir Syed Ahmad Khan", "Allama Iqbal", "Quaid-e-Azam", "Lahore Resolution", "Creation of Pakistan"]],
        ["Land and Environment", ["Location", "Physical Features", "Climate", "Natural Resources"]],
        ["History of Pakistan", ["Constitutional Development", "Major Events", "Democracy", "Important Personalities"]],
        ["Pakistan and World Affairs", ["Foreign Policy", "Muslim World", "UNO", "Regional Organizations"]],
        ["Economic Development", ["Agriculture", "Industry", "Trade", "Problems and Solutions"]],
        ["Population and Society", ["Population Growth", "Education", "Health", "Culture"]]
      ]
    },
    quran: {
      label: "Quran",
      chapters: [
        ["Quranic Guidance", ["Importance of Quran", "Respect of Quran", "Recitation", "Understanding"]],
        ["Faith and Worship", ["Tauheed", "Risalat", "Akhirah", "Prayer", "Fasting"]],
        ["Good Character", ["Truthfulness", "Patience", "Gratitude", "Justice", "Kindness"]],
        ["Rights and Responsibilities", ["Rights of Parents", "Rights of Neighbours", "Helping Others", "Avoiding Harm"]],
        ["Selected Surahs", ["Main Message", "Vocabulary", "Short Questions", "Translation Practice"]]
      ]
    },
    urdu: {
      label: "Urdu",
      chapters: [
        ["نثر", ["خلاصہ", "مرکزی خیال", "سوال جواب", "الفاظ معانی"]],
        ["نظم", ["تشریح", "مرکزی خیال", "شاعر کا تعارف", "مشکل الفاظ"]],
        ["غزل", ["اشعار کی تشریح", "قافیہ ردیف", "مرکزی خیال"]],
        ["خط نویسی", ["رسمی خط", "غیر رسمی خط", "درخواست"]],
        ["مضمون نویسی", ["تعارف", "اہم نکات", "اختتام"]],
        ["گرامر", ["اسم", "فعل", "صفت", "محاورے", "ضرب الامثال"]]
      ]
    }
  };

  function makeContent(subjectId, chapterTitle, topic){
    const subject = STUDY_PACKS[subjectId]?.label || subjectId;
    const isUrdu = subjectId === "urdu";

    if(isUrdu){
      return `
        <h2>${chapterTitle}</h2>
        <h3>${topic}</h3>
        <p><b>امتحانی تیاری:</b> اس حصے میں خلاصہ، اہم نکات، سوال جواب، اور تشریح کی مشق شامل ہے۔</p>
        <ul>
          <li>مرکزی خیال کو آسان الفاظ میں یاد کریں۔</li>
          <li>اہم الفاظ کے معانی لکھیں۔</li>
          <li>مختصر سوالات کی مشق کریں۔</li>
          <li>تشریح میں حوالہ، سیاق و سباق، اور وضاحت لکھیں۔</li>
        </ul>
        <h3>Practice</h3>
        <ol>
          <li>اس موضوع کا خلاصہ لکھیں۔</li>
          <li>مرکزی خیال بیان کریں۔</li>
          <li>دو اہم سوالات کے جواب لکھیں۔</li>
        </ol>
      `;
    }

    return `
      <h2>${chapterTitle}</h2>
      <h3>${topic}</h3>
      <p><b>Subject:</b> ${subject}</p>
      <p>This topic is added for fast exam preparation. Use it for notes, short questions, MCQs, and Ask AI practice.</p>

      <h3>Easy Notes</h3>
      <ul>
        <li>Understand the definition of <b>${topic}</b>.</li>
        <li>Learn the key terms used in this topic.</li>
        <li>Practice short questions because they are common in exams.</li>
        <li>Make 3 to 5 MCQs from this topic.</li>
        <li>Revise examples, formulas, dates, diagrams, or definitions if this topic has them.</li>
      </ul>

      <h3>Exam Questions</h3>
      <ol>
        <li>Define ${topic}.</li>
        <li>Write two important points about ${topic}.</li>
        <li>Explain ${topic} in simple words.</li>
        <li>Give one example related to ${topic}.</li>
        <li>Why is ${topic} important in ${subject}?</li>
      </ol>

      <h3>Ask AI Prompts</h3>
      <div class="prompt-chip">Explain this topic simply</div>
      <div class="prompt-chip">Make 10 MCQs from this topic</div>
      <div class="prompt-chip">Make short questions with answers</div>
      <div class="prompt-chip">Give me exam notes</div>
    `;
  }

  try{
    DATA.subjects = [
      { id:"chemistry", title:"Chemistry", icon:"🧪", active:true },
      { id:"physics", title:"Physics", icon:"⚡", active:true },
      { id:"computer", title:"Computer", icon:"💻", active:true },
      { id:"maths", title:"Maths", icon:"➗", active:true },
      { id:"biology", title:"Biology", icon:"🧬", active:true },
      { id:"pakistan", title:"Pakistan Studies", icon:"🇵🇰", active:true },
      { id:"quran", title:"Quran", icon:"📖", active:true },
      { id:"urdu", title:"اردو", icon:"✍️", active:true, urdu:true }
    ];

    Object.keys(STUDY_PACKS).forEach(function(subjectId){
      DATA.chapters[subjectId] = STUDY_PACKS[subjectId].chapters.map(function(c){
        return { title: c[0], topics: c[1] };
      });
    });
  }catch(e){
    console.log("Subject pack setup error", e);
  }

  window.__STUDY_PACKS__ = STUDY_PACKS;
  window.__makeSubjectContent__ = makeContent;

  renderDigitalBookContent = function(chapter){
    if(!chapter){
      return "";
    }

    const subjectId = state.selectedSubject;
    const topic = state.selectedTopic || (chapter.topics && chapter.topics[0]) || "Overview";

    if(subjectId === "chemistry"){
      const key = chapter.title;
      const content = typeof CHEMISTRY_DIGITAL_BOOK !== "undefined" ? (CHEMISTRY_DIGITAL_BOOK[key] || {}) : {};
      const topicContent = content[topic] || content["__chapterIntro"] || "";
      if(topicContent){
        return `
          <div class="digital-book-area">
            <div class="digital-book-head">
              <strong>Digital Book Content</strong>
              <span>${chapter.title}</span>
            </div>
            <article class="digital-book-text">${topicContent}</article>
          </div>
        `;
      }
    }

    return `
      <div class="digital-book-area subject-pack-area">
        <div class="digital-book-head">
          <strong>${STUDY_PACKS[subjectId]?.label || "Subject"} Study Pack</strong>
          <span>${chapter.title}</span>
        </div>
        <article class="digital-book-text">${makeContent(subjectId, chapter.title, topic)}</article>
      </div>
    `;
  };
})();

// PHYSICS_DIGITAL_BOOK_V1
(function(){
  const PHYSICS_UNITS = [
    {
      title: "Unit 10: Heat Capacity and Modes of Heat Transfer",
      topics: ["Specific Heat Capacity", "Transfer of Heat", "Applications of Heat Transfer", "Greenhouse Effect and Global Warming", "Flow of Heat in Geothermal Activities", "Summary", "Exercise"],
      overview: "This unit explains how heat is stored and transferred. It covers specific heat capacity, conduction, convection, radiation, greenhouse effect, global warming, and geothermal heat flow.",
      formulas: ["c = Q / mΔT", "Q = mcΔT"],
      keyPoints: ["Specific heat capacity means heat needed to raise temperature of 1 kg by 1 K or 1°C.", "Water has high specific heat capacity, so it heats and cools slowly.", "Heat transfer happens by conduction, convection, and radiation.", "Conduction mainly occurs in solids, convection in fluids, and radiation through electromagnetic waves."]
    },
    {
      title: "Unit 11: Thermal Expansion and Change of State",
      topics: ["Kinetic Theory of Matter", "Thermal Expansion", "Evaporation", "Latent Heat", "Pressure Exerted by Gas Particles", "Superconductivity", "Summary", "Exercise"],
      overview: "This unit explains kinetic theory, expansion of solids/liquids/gases, evaporation, latent heat, gas pressure, and superconductivity.",
      formulas: ["ΔL = αLΔT", "Q = mL", "p = F / A"],
      keyPoints: ["Particles of matter are always in motion.", "Thermal expansion happens when particles move farther apart on heating.", "Latent heat changes state without changing temperature.", "Gas pressure is due to gas particles colliding with container walls."]
    },
    {
      title: "Unit 12: Waves",
      topics: ["Wave Motion", "Wave Propagation", "Characteristic Wave Parameters", "Waves and their Types", "Types of Waves On the Basis of Medium", "Types of Waves On the Basis of Propagation", "Wave Characteristics", "Properties of Waves", "Tsunamis", "Summary", "Exercise"],
      overview: "This unit explains wave motion, propagation, amplitude, wavelength, frequency, time period, speed, mechanical/electromagnetic waves, transverse/longitudinal waves, reflection, refraction, diffraction, and tsunamis.",
      formulas: ["v = fλ", "f = 1 / T"],
      keyPoints: ["A wave transfers energy without transferring matter permanently.", "Amplitude is maximum displacement from mean position.", "Wavelength is distance between two consecutive similar points.", "Frequency is number of waves per second.", "Wave speed depends on frequency and wavelength."]
    },
    {
      title: "Unit 13: Sound",
      topics: ["Source of Sound", "Nature of Sound Waves", "Ultrasound", "Infrasound", "Characteristics of Sound Waves", "Analysing Sound Waves", "Speed of Sound", "Noise", "Reflection, Refraction and Diffraction of Sound Waves", "Echo", "Acoustics", "Human Hearing System", "Summary", "Exercise"],
      overview: "This unit explains sound production, sound waves, ultrasound, infrasound, pitch, loudness, quality, speed of sound, noise, echo, acoustics, and human hearing.",
      formulas: ["v = fλ", "Speed = Distance / Time"],
      keyPoints: ["Sound is produced by vibrating bodies.", "Sound needs a material medium to travel.", "Sound waves are longitudinal waves.", "Pitch depends on frequency, while loudness depends on amplitude.", "Echo is reflected sound heard after a short delay."]
    },
    {
      title: "Unit 14: Optics",
      topics: ["Reflection of Light", "Refraction of Light", "Total Internal Reflection", "Thin Lenses", "Application of Lenses", "Visible Spectrum", "Human Eye and Colour Perception", "Gravitational Lensing", "Acoustic Lenses", "Summary", "Exercise"],
      overview: "This unit explains reflection, refraction, total internal reflection, lenses, visible spectrum, human eye, colour perception, gravitational lensing, and acoustic lenses.",
      formulas: ["1/f = 1/do + 1/di", "n = sin i / sin r", "Power of lens = 1/f"],
      keyPoints: ["Reflection is bouncing back of light from a surface.", "Refraction is bending of light when it passes from one medium to another.", "Total internal reflection occurs when light reflects completely inside a denser medium.", "A lens forms images by refraction."]
    },
    {
      title: "Unit 15: Electrostatics",
      topics: ["Static Charge", "Conductors and Insulators", "Charging and Discharging", "Electroscope", "Electric Field", "Applications of Electrostatics", "Electrical Breakdown", "Summary", "Exercise"],
      overview: "This unit explains static charges, conductors, insulators, charging, discharging, electroscope, electric field, applications of electrostatics, and electrical breakdown.",
      formulas: ["F = kq1q2 / r²", "E = F / q"],
      keyPoints: ["Static electricity is produced by accumulation of charges.", "Like charges repel and unlike charges attract.", "Conductors allow charge movement, while insulators resist charge movement.", "An electric field is the region where a charge experiences force."]
    },
    {
      title: "Unit 16: Current Electricity",
      topics: ["Electric Current", "Alternating and Direct Current", "Potential Difference", "EMF", "Ohm's Law", "Resistance", "Resistivity", "Electrical Measuring Instruments", "Experiment for Demonstration of Resistance", "Summary", "Exercise"],
      overview: "This unit explains electric current, AC, DC, potential difference, EMF, Ohm's law, resistance, resistivity, and electrical measuring instruments.",
      formulas: ["I = Q / t", "V = IR", "R = ρL / A", "P = VI"],
      keyPoints: ["Electric current is rate of flow of charge.", "Potential difference is work done per unit charge.", "Ohm's law states that current is directly proportional to voltage if temperature remains constant.", "Resistance opposes current flow."]
    },
    {
      title: "Unit 17: Electric Circuits",
      topics: ["Circuit Elements and Diagram", "Resistors", "Types of Resistors", "Combination of Resistors", "Combination of EMF Sources", "Electricity and Its Uses", "Electrical Energy", "Electric Power", "Household Circuits and Electric Safety", "Summary", "Exercise"],
      overview: "This unit explains circuit symbols, resistors, fixed and variable resistors, series and parallel combinations, EMF sources, electrical energy, power, household wiring, and safety.",
      formulas: ["Rs = R1 + R2 + R3", "1/Rp = 1/R1 + 1/R2 + 1/R3", "E = Pt", "P = VI"],
      keyPoints: ["In series, total resistance increases.", "In parallel, total resistance decreases.", "Electrical energy depends on power and time.", "Fuse, circuit breaker, and earthing protect household circuits."]
    },
    {
      title: "Unit 18: Electronics",
      topics: ["Semiconductors", "N and P Type Semiconductors", "PN Junction", "Characteristics of Diode Under Biasing", "Light Emitting Diode", "Transistor", "Relays and Switching Circuits", "Transistor as a Switch", "Digital Electronics", "Fundamental Logic Gates", "Universal Logic Gates", "Uses of Logic Gates", "Analogue and Digital Electronics", "Quantum Computers", "Summary", "Exercise"],
      overview: "This unit explains semiconductors, N-type and P-type materials, PN junction, diode, LED, transistor, relays, logic gates, analogue/digital electronics, and quantum computers.",
      formulas: ["AND: output is 1 only when all inputs are 1", "OR: output is 1 when any input is 1", "NOT: output is opposite of input"],
      keyPoints: ["Semiconductors have conductivity between conductors and insulators.", "A diode allows current mainly in one direction.", "A transistor can work as an amplifier or switch.", "Logic gates are building blocks of digital circuits."]
    },
    {
      title: "Unit 19: Electromagnetism",
      topics: ["Magnetic Field Due to Current Carrying Wire", "Magnetic Field Due to Current Carrying Solenoid", "Earth's Magnetic Field", "Application of Magnetic Effect of Current", "Force On a Current Carrying Conductor Place in a Magnetic Field", "Current Carrying Coil in a Magnetic Field", "Electric Motor", "Electromagnetic Induction", "Lenz's Law", "Electric Generator", "Transformer", "Deflection of Electron Beam", "Cathode Ray Oscilloscope", "Summary", "Exercise"],
      overview: "This unit explains magnetic field due to current, solenoid, Earth's magnetic field, motor effect, electric motor, electromagnetic induction, Lenz's law, generator, transformer, electron beam deflection, and CRO.",
      formulas: ["F = BIL", "Vp / Vs = Np / Ns", "Induced EMF depends on rate of change of magnetic flux"],
      keyPoints: ["Current produces a magnetic field.", "A solenoid behaves like a bar magnet.", "A current-carrying conductor in a magnetic field experiences force.", "Electromagnetic induction produces current due to changing magnetic field."]
    },
    {
      title: "Unit 20: Electromagnetic Waves",
      topics: ["Electromagnetic Spectrum", "Applications of Electromagnetic Waves", "Risks Associated with Electromagnetic Waves", "Scattering of Light", "Nature of Light", "Summary", "Exercise"],
      overview: "This unit explains electromagnetic spectrum, applications and risks of EM waves, scattering of light, and nature of light.",
      formulas: ["c = fλ", "Energy of photon = hf"],
      keyPoints: ["Electromagnetic waves do not need a material medium.", "They travel at speed of light in vacuum.", "Radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays are part of EM spectrum.", "Scattering explains the blue colour of sky."]
    },
    {
      title: "Unit 21: Nuclear Physics",
      topics: ["Discovery of Nucleus", "Nuclear Representations", "Isotopes and Radioisotopes", "Radioactivity", "Nuclear Decay", "Half-Life", "Ionizing Nuclear Radiations", "Applications of Radiation", "Background Radiation", "Nuclear Fission", "Nuclear Fusion", "Dark Matter", "Falsifiability", "Summary", "Exercise"],
      overview: "This unit explains atomic nucleus, isotopes, radioactivity, nuclear decay, half-life, ionizing radiations, applications of radiation, background radiation, fission, fusion, dark matter, and falsifiability.",
      formulas: ["N = N0 / 2ⁿ", "Half-life is time for half of radioactive nuclei to decay", "E = mc²"],
      keyPoints: ["The nucleus contains protons and neutrons.", "Isotopes have same proton number but different neutron number.", "Radioactivity is spontaneous emission of radiation.", "Fission splits a heavy nucleus, while fusion combines light nuclei."]
    }
  ];

  const TOPIC_EXTRA = {
    "Specific Heat Capacity": ["Specific heat capacity tells how much heat a substance needs to change its temperature.", "Water has large specific heat capacity, so it is useful in cooling systems, climate moderation, and body temperature regulation."],
    "Transfer of Heat": ["Heat transfers from hot body to cold body until thermal equilibrium is reached.", "The three transfer methods are conduction, convection, and radiation."],
    "Ohm's Law": ["Ohm's Law connects voltage, current, and resistance.", "If resistance is constant, increasing voltage increases current."],
    "Combination of Resistors": ["Series resistors add directly.", "Parallel resistors give a smaller equivalent resistance."],
    "Thin Lenses": ["Convex lenses can converge light and concave lenses diverge light.", "Lens formula connects focal length, object distance, and image distance."],
    "Static Charge": ["Static charge is charge at rest.", "It is often produced by friction between materials."],
    "Electric Field": ["Electric field shows the force effect around a charge.", "Field lines go away from positive charge and towards negative charge."],
    "Nuclear Fission": ["Fission is splitting of a heavy nucleus into lighter nuclei.", "It releases a large amount of energy."],
    "Nuclear Fusion": ["Fusion is combining of light nuclei into a heavier nucleus.", "The Sun gets energy mainly from nuclear fusion."]
  };

  function findPhysicsUnit(chapterTitle){
    return PHYSICS_UNITS.find(u => u.title === chapterTitle) || PHYSICS_UNITS[0];
  }

  function physicsContent(unit, topic){
    const extra = TOPIC_EXTRA[topic] || [];
    const extraHtml = extra.map(x => `<li>${x}</li>`).join("");
    const keyHtml = unit.keyPoints.map(x => `<li>${x}</li>`).join("");
    const formulaHtml = unit.formulas.map(x => `<li><code>${x}</code></li>`).join("");

    return `
      <div class="physics-book">
        <h2>${unit.title}</h2>
        <h3>${topic}</h3>

        <div class="physics-box">
          <b>Chapter Overview</b>
          <p>${unit.overview}</p>
        </div>

        <h3>Easy Exam Notes</h3>
        <ul>
          ${extraHtml}
          ${keyHtml}
        </ul>

        <h3>Important Formulas / Rules</h3>
        <ul class="physics-formula-list">${formulaHtml}</ul>

        <h3>Short Questions</h3>
        <ol>
          <li>Define ${topic}.</li>
          <li>Write two important points about ${topic}.</li>
          <li>Explain ${topic} with one real-life example.</li>
          <li>Write the important formula or rule related to ${topic}.</li>
          <li>Why is ${topic} important in Physics?</li>
        </ol>

        <h3>MCQ Practice</h3>
        <ol>
          <li>${topic} belongs to which unit? <b>${unit.title}</b></li>
          <li>The main idea of this topic is related to <b>${unit.overview.split(".")[0]}</b>.</li>
          <li>One important exam point is: <b>${unit.keyPoints[0]}</b></li>
        </ol>

        <h3>Ask AI Prompts</h3>
        <div class="prompt-chip">Explain ${topic} simply</div>
        <div class="prompt-chip">Make 10 MCQs from ${topic}</div>
        <div class="prompt-chip">Make short questions with answers</div>
        <div class="prompt-chip">Give me formulas from this unit</div>
      </div>
    `;
  }

  try{
    DATA.subjects = DATA.subjects.map(s => s.id === "physics" ? { ...s, active:true } : s);
    DATA.chapters.physics = PHYSICS_UNITS.map(u => ({ title:u.title, topics:u.topics }));
  }catch(e){
    console.log("Physics data load error", e);
  }

  const oldRenderDigitalBookContent = renderDigitalBookContent;

  renderDigitalBookContent = function(chapter){
    if(state.selectedSubject === "physics" && chapter){
      const unit = findPhysicsUnit(chapter.title);
      const topic = state.selectedTopic || unit.topics[0] || "Overview";

      return `
        <div class="digital-book-area physics-digital-area">
          <div class="digital-book-head">
            <strong>Physics Digital Book</strong>
            <span>${unit.title}</span>
          </div>
          <article class="digital-book-text">${physicsContent(unit, topic)}</article>
        </div>
      `;
    }

    return oldRenderDigitalBookContent ? oldRenderDigitalBookContent(chapter) : "";
  };

  window.PHYSICS_UNITS = PHYSICS_UNITS;
})();

// PHYSICS_TEXTBOOK_CONTENT_V2
(function(){
  const PHYSICS_TEXTBOOK_UNITS = [
    { title:"Unit 10: Heat Capacity and Modes of Heat Transfer", topics:["Specific Heat Capacity","Transfer of Heat","Applications of Heat Transfer","Greenhouse Effect and Global Warming","Flow of Heat in Geothermal Activities","Summary","Exercise"] },
    { title:"Unit 11: Thermal Expansion and Change of State", topics:["Kinetic Theory of Matter","Thermal Expansion","Evaporation","Latent Heat","Pressure Exerted by Gas Particles","Superconductivity","Summary","Exercise"] },
    { title:"Unit 12: Waves", topics:["Wave Motion","Wave Propagation","Characteristic Wave Parameters","Waves and their Types","Types of Waves On the Basis of Medium","Types of Waves On the Basis of Propagation","Wave Characteristics","Properties of Waves","Tsunamis","Summary","Exercise"] },
    { title:"Unit 13: Sound", topics:["Source of Sound","Nature of Sound Waves","Ultrasound","Infrasound","Characteristics of Sound Waves","Analysing Sound Waves","Speed of Sound","Noise","Reflection, Refraction and Diffraction of Sound Waves","Echo","Acoustics","Human Hearing System","Summary","Exercise"] },
    { title:"Unit 14: Optics", topics:["Reflection of Light","Refraction of Light","Total Internal Reflection","Thin Lenses","Application of Lenses","Visible Spectrum","Human Eye and Colour Perception","Gravitational Lensing","Acoustic Lenses","Summary","Exercise"] },
    { title:"Unit 15: Electrostatics", topics:["Static Charge","Conductors and Insulators","Charging and Discharging","Electroscope","Electric Field","Applications of Electrostatics","Electrical Breakdown","Summary","Exercise"] },
    { title:"Unit 16: Current Electricity", topics:["Electric Current","Alternating and Direct Current","Potential Difference","EMF","Ohm's Law","Resistance","Resistivity","Electrical Measuring Instruments","Experiment for Demonstration of Resistance","Summary","Exercise"] },
    { title:"Unit 17: Electric Circuits", topics:["Circuit Elements and Diagram","Resistors","Types of Resistors","Combination of Resistors","Combination of EMF Sources","Electricity and Its Uses","Electrical Energy","Electric Power","Household Circuits and Electric Safety","Summary","Exercise"] },
    { title:"Unit 18: Electronics", topics:["Semiconductors","N and P Type Semiconductors","PN Junction","Characteristics of Diode Under Biasing","Light Emitting Diode","Transistor","Relays and Switching Circuits","Transistor as a Switch","Digital Electronics","Fundamental Logic Gates","Universal Logic Gates","Uses of Logic Gates","Analogue and Digital Electronics","Quantum Computers","Summary","Exercise"] },
    { title:"Unit 19: Electromagnetism", topics:["Magnetic Field Due to Current Carrying Wire","Magnetic Field Due to Current Carrying Solenoid","Earth's Magnetic Field","Application of Magnetic Effect of Current","Force On a Current Carrying Conductor Place in a Magnetic Field","Current Carrying Coil in a Magnetic Field","Electric Motor","Electromagnetic Induction","Lenz's Law","Electric Generator","Transformer","Deflection of Electron Beam","Cathode Ray Oscilloscope","Summary","Exercise"] },
    { title:"Unit 20: Electromagnetic Waves", topics:["Electromagnetic Spectrum","Applications of Electromagnetic Waves","Risks Associated with Electromagnetic Waves","Scattering of Light","Nature of Light","Summary","Exercise"] },
    { title:"Unit 21: Nuclear Physics", topics:["Discovery of Nucleus","Nuclear Representations","Isotopes and Radioisotopes","Radioactivity","Nuclear Decay","Half-Life","Ionizing Nuclear Radiations","Applications of Radiation","Background Radiation","Nuclear Fission","Nuclear Fusion","Dark Matter","Falsifiability","Summary","Exercise"] }
  ];

  const UNIT_NOTES = {
    "Unit 10: Heat Capacity and Modes of Heat Transfer": {
      intro:"This unit explains how heat is stored, measured, and transferred. It connects daily life examples such as coastal climate, cooling systems, cooking, conduction in metals, convection currents, radiation, greenhouse effect, and geothermal activity.",
      formulas:["c = Q / mΔT","Q = mcΔT"],
      exam:["Define specific heat capacity.","Why does water heat and cool slowly?","Differentiate conduction, convection, and radiation.","Explain greenhouse effect and global warming.","How does geothermal heat reach the surface?"]
    },
    "Unit 11: Thermal Expansion and Change of State": {
      intro:"This unit explains how matter behaves when heated or cooled. It covers kinetic theory, expansion of solids, liquids and gases, evaporation, latent heat, pressure of gases, and superconductivity.",
      formulas:["ΔL = αLΔT","Q = mL","Pressure = Force / Area"],
      exam:["State kinetic theory of matter.","Define thermal expansion.","Differentiate evaporation and boiling.","Define latent heat.","Why do gas particles exert pressure?"]
    },
    "Unit 12: Waves": {
      intro:"This unit explains wave motion and wave behaviour. It covers wave propagation, amplitude, wavelength, frequency, time period, transverse and longitudinal waves, mechanical and electromagnetic waves, reflection, refraction, diffraction and tsunamis.",
      formulas:["v = fλ","f = 1 / T","T = 1 / f"],
      exam:["Define wave motion.","What is wavelength?","Differentiate transverse and longitudinal waves.","Write properties of waves.","How are tsunamis formed?"]
    },
    "Unit 13: Sound": {
      intro:"This unit explains production, propagation, analysis and applications of sound. It covers sound waves, ultrasound, infrasound, pitch, loudness, quality, speed of sound, noise, echo, acoustics and human hearing.",
      formulas:["v = fλ","Speed = Distance / Time"],
      exam:["How is sound produced?","Why does sound need a medium?","Differentiate ultrasound and infrasound.","What is echo?","What is noise pollution?"]
    },
    "Unit 14: Optics": {
      intro:"This unit explains the behaviour of light. It covers reflection, refraction, total internal reflection, lenses, visible spectrum, human eye, colour perception, gravitational lensing and acoustic lenses.",
      formulas:["1/f = 1/do + 1/di","n = sin i / sin r","Power = 1/f"],
      exam:["State laws of reflection.","Define refraction.","What is total internal reflection?","Differentiate convex and concave lenses.","How does the human eye form images?"]
    },
    "Unit 15: Electrostatics": {
      intro:"This unit explains electric charges at rest. It covers static charge, conductors, insulators, charging, discharging, electroscope, electric field, applications of electrostatics and electrical breakdown.",
      formulas:["F = kq₁q₂ / r²","E = F / q"],
      exam:["Define static charge.","Differentiate conductors and insulators.","How does charging by friction occur?","What is an electroscope?","Define electric field."]
    },
    "Unit 16: Current Electricity": {
      intro:"This unit explains flow of electric charge. It covers electric current, AC, DC, potential difference, EMF, Ohm's law, resistance, resistivity and electrical measuring instruments.",
      formulas:["I = Q / t","V = IR","R = ρL / A","P = VI"],
      exam:["Define electric current.","Differentiate AC and DC.","Define potential difference.","State Ohm's law.","What is resistivity?"]
    },
    "Unit 17: Electric Circuits": {
      intro:"This unit explains circuit components and circuit design. It covers circuit elements, resistors, resistor types, series and parallel combinations, EMF sources, electrical energy, power, household wiring and electric safety.",
      formulas:["Rseries = R1 + R2 + R3","1/Rparallel = 1/R1 + 1/R2 + 1/R3","E = Pt","P = VI"],
      exam:["Draw common circuit symbols.","What is a resistor?","Differentiate series and parallel circuits.","Define electrical energy.","Write safety rules for household circuits."]
    },
    "Unit 18: Electronics": {
      intro:"This unit explains semiconductor devices and digital electronics. It covers semiconductors, N-type and P-type materials, PN junction, diode, LED, transistor, relay, switching circuits, logic gates, analogue/digital electronics and quantum computers.",
      formulas:["AND gate: output is 1 only when all inputs are 1","OR gate: output is 1 when at least one input is 1","NOT gate: output is opposite of input"],
      exam:["Define semiconductor.","Differentiate N-type and P-type semiconductors.","What is PN junction?","How does a diode work?","Write truth tables of basic logic gates."]
    },
    "Unit 19: Electromagnetism": {
      intro:"This unit explains the link between electricity and magnetism. It covers magnetic field around current-carrying wires and solenoids, Earth's magnetic field, motor effect, electric motor, induction, Lenz's law, generator, transformer, electron beam deflection and CRO.",
      formulas:["F = BIL","Vp / Vs = Np / Ns","Induced EMF depends on rate of change of magnetic flux"],
      exam:["What magnetic field is produced around a current-carrying wire?","How does a solenoid behave?","State Lenz's law.","Differentiate motor and generator.","What is a transformer?"]
    },
    "Unit 20: Electromagnetic Waves": {
      intro:"This unit explains electromagnetic waves and light behaviour. It covers electromagnetic spectrum, applications, risks, scattering of light and nature of light.",
      formulas:["c = fλ","E = hf"],
      exam:["Name the electromagnetic spectrum in order.","Write uses of electromagnetic waves.","Write risks of electromagnetic waves.","Why is the sky blue?","Explain wave-particle nature of light."]
    },
    "Unit 21: Nuclear Physics": {
      intro:"This unit explains atomic nucleus and nuclear reactions. It covers discovery of nucleus, nuclear representation, isotopes, radioisotopes, radioactivity, nuclear decay, half-life, ionizing radiations, radiation uses, background radiation, fission, fusion, dark matter and falsifiability.",
      formulas:["N = N₀ / 2ⁿ","E = mc²","Half-life = time for half the nuclei to decay"],
      exam:["Describe discovery of nucleus.","What are isotopes?","Define radioactivity.","What is half-life?","Differentiate nuclear fission and fusion."]
    }
  };

  const TOPIC_NOTES = {
    "Specific Heat Capacity":["Specific heat capacity is the heat required to raise the temperature of 1 kg of a substance by 1 K or 1°C.","Water has a high specific heat capacity, so it takes more heat to raise its temperature and also releases heat slowly.","This explains coastal moderate climate, car cooling systems, body temperature regulation and cooking uses."],
    "Transfer of Heat":["Heat naturally flows from a hotter body to a colder body until both reach thermal equilibrium.","Conduction occurs mainly in solids through particle collisions and free electrons.","Convection occurs in liquids and gases due to movement of hot and cold fluid layers.","Radiation transfers heat through electromagnetic waves and does not need a medium."],
    "Applications of Heat Transfer":["Heat transfer is used in radiators, cooking, sea breezes, ventilation, insulation, thermos flasks and cooling systems.","Good conductors transfer heat quickly; insulators reduce heat transfer.","Dark dull surfaces are good absorbers and emitters of heat radiation."],
    "Greenhouse Effect and Global Warming":["The greenhouse effect happens when gases trap infrared radiation from Earth.","It keeps Earth warm, but too much greenhouse gas causes global warming.","Global warming can increase extreme weather, melting of ice and sea level rise."],
    "Flow of Heat in Geothermal Activities":["Geothermal energy comes from heat inside Earth.","Heat moves from Earth's interior by conduction, convection of molten material and radiation.","It can cause volcanic activity, hot springs and geothermal power production."],

    "Kinetic Theory of Matter":["Matter is made of tiny particles that are always moving.","Heating increases kinetic energy of particles.","Solids vibrate about fixed positions, liquids flow, and gases move freely."],
    "Thermal Expansion":["Thermal expansion is increase in size of matter due to heating.","Particles move faster and occupy more space when heated.","Expansion must be considered in bridges, railway tracks, pipes and buildings."],
    "Evaporation":["Evaporation is conversion of liquid into vapour from the surface at any temperature.","It causes cooling because high-energy molecules escape first.","Evaporation increases with temperature, surface area and wind speed."],
    "Latent Heat":["Latent heat is heat absorbed or released during change of state without temperature change.","Latent heat of fusion is for solid-liquid change; latent heat of vaporization is for liquid-gas change.","During melting or boiling, supplied heat breaks intermolecular forces instead of raising temperature."],
    "Pressure Exerted by Gas Particles":["Gas pressure is caused by collisions of gas particles with container walls.","Higher temperature increases particle speed and pressure if volume remains constant.","Pressure also depends on number of particles and volume."],
    "Superconductivity":["Superconductivity is a state where electrical resistance becomes nearly zero below a critical temperature.","Superconductors can carry current without energy loss.","They are used in powerful magnets, MRI machines and advanced technology."],

    "Wave Motion":["Wave motion transfers energy from one place to another without permanent transfer of matter.","A disturbance travels through a medium or through space depending on wave type.","Examples include water waves, sound waves and light waves."],
    "Wave Propagation":["Wave propagation means the movement of a wave through a medium or space.","Mechanical waves need a material medium, while electromagnetic waves do not.","Wave speed depends on the medium and wave type."],
    "Characteristic Wave Parameters":["Important wave parameters include amplitude, wavelength, frequency, time period and speed.","Amplitude shows energy of wave; frequency is waves per second; wavelength is distance between matching points.","Wave speed equals frequency multiplied by wavelength."],
    "Waves and their Types":["Waves can be mechanical or electromagnetic.","They can also be transverse or longitudinal depending on particle motion.","Sound is longitudinal; light is electromagnetic."],
    "Types of Waves On the Basis of Medium":["Mechanical waves require a medium such as air, water or string.","Electromagnetic waves can travel through vacuum.","Sound cannot travel in vacuum, but light can."],
    "Types of Waves On the Basis of Propagation":["Transverse waves have vibrations perpendicular to direction of travel.","Longitudinal waves have vibrations parallel to direction of travel.","Water waves show mixed behaviour at the surface."],
    "Wave Characteristics":["Waves show reflection, refraction, diffraction and interference.","Reflection is bouncing back; refraction is bending; diffraction is spreading around obstacles.","These behaviours help explain water, sound and light waves."],
    "Properties of Waves":["Wave properties include speed, frequency, wavelength, amplitude and energy.","Higher amplitude usually means more energy.","The relationship v = fλ is very important for numerical questions."],
    "Tsunamis":["Tsunamis are huge sea waves usually caused by earthquakes, volcanic eruptions or landslides under the sea.","They carry large energy and can travel long distances.","Warning systems help reduce damage and save lives."],

    "Source of Sound":["Sound is produced by vibrating bodies.","Examples include vocal cords, tuning forks, speakers and musical instruments.","When vibration stops, sound production stops."],
    "Nature of Sound Waves":["Sound waves are mechanical longitudinal waves.","They travel by compressions and rarefactions in a medium.","Sound cannot travel through vacuum."],
    "Ultrasound":["Ultrasound has frequency above the upper limit of human hearing.","It is used in medical imaging, cleaning, detecting flaws and measuring depth.","Bats and dolphins use ultrasonic waves for navigation."],
    "Infrasound":["Infrasound has frequency below the lower limit of human hearing.","It can be produced by earthquakes, volcanoes, storms and large animals.","It is useful in monitoring natural events."],
    "Characteristics of Sound Waves":["Pitch depends on frequency; loudness depends on amplitude; quality helps distinguish different sources.","Higher frequency gives higher pitch.","Greater amplitude gives louder sound."],
    "Analysing Sound Waves":["Sound waves can be studied using waveforms.","Amplitude, frequency and wavelength help compare sounds.","Oscilloscope patterns show differences between sounds."],
    "Speed of Sound":["Speed of sound depends on medium and temperature.","Sound travels faster in solids than liquids and faster in liquids than gases.","In air, speed increases when temperature increases."],
    "Noise":["Noise is unwanted or unpleasant sound.","Noise pollution can cause stress, hearing damage and lack of concentration.","Reducing noise needs silencers, barriers, proper planning and awareness."],
    "Reflection, Refraction and Diffraction of Sound Waves":["Sound reflects from hard surfaces, bends when speed changes and diffracts around obstacles.","Reflection produces echo.","Diffraction explains why sound can be heard around corners."],
    "Echo":["Echo is repeated sound heard after reflection from a distant surface.","For clear echo, reflected sound must reach after a short noticeable time gap.","Echo is used in sonar and distance measurement."],
    "Acoustics":["Acoustics is the study of sound in rooms, halls and buildings.","Good acoustics means clear sound without too much echo or noise.","Auditoriums use sound absorbing and reflecting materials carefully."],
    "Human Hearing System":["The ear receives sound waves and converts them into nerve signals.","Outer ear collects sound, middle ear amplifies it, and inner ear changes it into electrical signals.","The brain interprets these signals as sound."],

    "Reflection of Light":["Reflection is bouncing back of light from a surface.","The angle of incidence equals the angle of reflection.","Mirrors form images using reflection."],
    "Refraction of Light":["Refraction is bending of light when it passes from one medium to another.","It occurs because light speed changes in different media.","Refraction explains apparent bending of objects in water and lens action."],
    "Total Internal Reflection":["Total internal reflection occurs when light travelling from denser to rarer medium reflects completely back.","It happens when angle of incidence is greater than critical angle.","It is used in optical fibres and prisms."],
    "Thin Lenses":["A thin lens forms images by refraction.","Convex lenses converge light; concave lenses diverge light.","Lens formula and ray diagrams are important for image problems."],
    "Application of Lenses":["Lenses are used in cameras, microscopes, telescopes, spectacles and projectors.","Convex lenses are useful for magnification and focusing.","Concave lenses help correct short-sightedness."],
    "Visible Spectrum":["Visible spectrum is the part of electromagnetic spectrum seen by human eye.","It includes colours from violet to red.","White light can split into colours by dispersion."],
    "Human Eye and Colour Perception":["The eye focuses light on the retina.","Rods help in dim light, while cones detect colours.","Defects of vision can be corrected using lenses."],
    "Gravitational Lensing":["Gravitational lensing is bending of light due to gravity of massive objects.","It supports the idea that gravity affects light path.","It helps astronomers study distant galaxies."],
    "Acoustic Lenses":["Acoustic lenses focus sound waves like optical lenses focus light.","They are used in ultrasound and sound-based imaging.","They help control direction and concentration of sound energy."],

    "Static Charge":["Static charge is electric charge at rest on an object.","It can be produced by friction, contact or induction.","Like charges repel and unlike charges attract."],
    "Conductors and Insulators":["Conductors allow charges to move easily; insulators do not.","Metals are good conductors because they have free electrons.","Rubber, plastic and glass are common insulators."],
    "Charging and Discharging":["Charging means gaining or losing electric charge.","Discharging is sudden movement of charge from one object to another.","Lightning is a natural example of electrical discharge."],
    "Electroscope":["An electroscope detects presence and type of electric charge.","Its leaves diverge when charged because like charges repel.","It can be used to test charging by contact or induction."],
    "Electric Field":["Electric field is region around a charge where another charge feels force.","Field lines show direction of force on a positive test charge.","Stronger field has closer field lines."],
    "Applications of Electrostatics":["Electrostatics is used in photocopiers, printers, spray painting and air purifiers.","Static electricity helps attract particles or droplets to surfaces.","It is also important for safety around fuel and electronics."],
    "Electrical Breakdown":["Electrical breakdown happens when insulating air or material becomes conducting due to high voltage.","Lightning and sparks are examples.","Breakdown can damage devices if not controlled."],

    "Electric Current":["Electric current is rate of flow of charge.","Its SI unit is ampere.","Current flows in a complete circuit due to potential difference."],
    "Alternating and Direct Current":["Direct current flows in one direction; alternating current changes direction repeatedly.","Batteries supply DC, while mains supply is AC.","AC is useful for power transmission."],
    "Potential Difference":["Potential difference is work done per unit charge.","It is measured in volts.","A voltmeter is connected in parallel to measure it."],
    "EMF":["EMF is energy supplied per unit charge by a source such as a cell or battery.","It is measured in volts.","It drives charges around a circuit."],
    "Ohm's Law":["Ohm's law states that current through a conductor is directly proportional to potential difference if physical conditions remain constant.","The formula is V = IR.","Resistance is the ratio of voltage to current."],
    "Resistance":["Resistance opposes flow of current.","It depends on material, length, area and temperature.","Longer wire has more resistance; thicker wire has less resistance."],
    "Resistivity":["Resistivity is resistance of a material of unit length and unit area.","It is a property of material.","Good conductors have low resistivity; insulators have high resistivity."],
    "Electrical Measuring Instruments":["Ammeter measures current and is connected in series.","Voltmeter measures potential difference and is connected in parallel.","Galvanometer detects small currents."],
    "Experiment for Demonstration of Resistance":["Resistance can be demonstrated by changing wire length, material or thickness.","Current changes when resistance changes.","This verifies relation between current, voltage and resistance."],

    "Circuit Elements and Diagram":["Circuit diagrams use symbols for cells, switches, resistors, lamps, ammeters and voltmeters.","Symbols make circuits easier to draw and understand.","A complete path is required for current to flow."],
    "Resistors":["A resistor is a component that limits current.","It can protect devices and control voltage/current.","Resistance is measured in ohms."],
    "Types of Resistors":["Fixed resistors have constant resistance.","Variable resistors can change resistance.","Thermistors and LDRs change resistance with temperature and light."],
    "Combination of Resistors":["In series, resistances add directly.","In parallel, reciprocal of total resistance equals sum of reciprocals.","Parallel circuits provide multiple paths for current."],
    "Combination of EMF Sources":["Cells can be connected in series or parallel.","Series connection increases total voltage.","Parallel connection can provide more current for longer time."],
    "Electricity and Its Uses":["Electricity is used for lighting, heating, communication, transport and machines.","It is easy to convert into other forms of energy.","Safe use of electricity is very important."],
    "Electrical Energy":["Electrical energy is energy used by electrical devices.","It depends on power and time.","Electric meters measure energy consumption in units/kWh."],
    "Electric Power":["Electric power is rate of using electrical energy.","Power can be calculated using P = VI.","Higher power devices use more energy per second."],
    "Household Circuits and Electric Safety":["Household wiring uses live, neutral and earth wires.","Fuse and circuit breakers protect against overcurrent.","Earthing protects users from electric shock."],

    "Semiconductors":["Semiconductors have conductivity between conductors and insulators.","Silicon and germanium are common semiconductors.","Their conductivity can be controlled by doping."],
    "N and P Type Semiconductors":["N-type semiconductors have extra electrons as majority carriers.","P-type semiconductors have holes as majority carriers.","They are formed by adding suitable impurities."],
    "PN Junction":["A PN junction is formed by joining P-type and N-type semiconductor.","It allows current mainly in one direction.","It is the basic structure of a diode."],
    "Characteristics of Diode Under Biasing":["Forward bias allows current to flow easily after threshold voltage.","Reverse bias allows only very small current until breakdown.","Diode characteristic graph shows current-voltage relation."],
    "Light Emitting Diode":["LED emits light when forward biased.","It is efficient, small and long lasting.","LEDs are used in displays, indicators and lighting."],
    "Transistor":["A transistor is a semiconductor device used as amplifier or switch.","It has three terminals.","Small input signal can control larger output current."],
    "Relays and Switching Circuits":["A relay is an electrically operated switch.","It allows a small current to control a larger current circuit.","Relays are used in protection and automation."],
    "Transistor as a Switch":["A transistor can turn a circuit ON or OFF.","It works in cutoff and saturation regions for switching.","It is used in digital electronics and control circuits."],
    "Digital Electronics":["Digital electronics uses binary values 0 and 1.","It is used in computers, calculators and communication systems.","Logic gates process digital signals."],
    "Fundamental Logic Gates":["AND, OR and NOT are basic logic gates.","AND gives 1 only when all inputs are 1.","OR gives 1 if any input is 1, and NOT reverses input."],
    "Universal Logic Gates":["NAND and NOR are universal gates.","Any logic circuit can be made using only NAND or only NOR gates.","They are important in digital circuit design."],
    "Uses of Logic Gates":["Logic gates are used in computers, calculators, alarms and control systems.","They make decisions based on binary input.","They are building blocks of processors and memory."],
    "Analogue and Digital Electronics":["Analogue signals vary continuously.","Digital signals have discrete levels usually 0 and 1.","Digital systems are more reliable for storage and processing."],
    "Quantum Computers":["Quantum computers use quantum bits or qubits.","They may solve some complex problems faster than classical computers.","They are still an advanced and developing technology."],

    "Magnetic Field Due to Current Carrying Wire":["A current-carrying wire produces magnetic field around it.","Field direction can be found using right hand rule.","Stronger current produces stronger magnetic field."],
    "Magnetic Field Due to Current Carrying Solenoid":["A solenoid carrying current behaves like a bar magnet.","Magnetic field inside solenoid is strong and nearly uniform.","Increasing turns or current increases field strength."],
    "Earth's Magnetic Field":["Earth behaves like a giant magnet.","Compass needles align with Earth's magnetic field.","Earth's magnetic field helps navigation and protects from solar particles."],
    "Application of Magnetic Effect of Current":["Magnetic effect of current is used in electromagnets, relays, bells, motors and speakers.","It allows electricity to produce controlled magnetic forces.","Electromagnets can be switched on and off."],
    "Force On a Current Carrying Conductor Place in a Magnetic Field":["A current-carrying conductor in a magnetic field experiences force.","Direction of force depends on current direction and magnetic field direction.","This is the working principle of electric motor."],
    "Current Carrying Coil in a Magnetic Field":["A coil in magnetic field experiences turning effect.","This turning effect produces rotation.","It is used in motors and moving coil instruments."],
    "Electric Motor":["An electric motor converts electrical energy into mechanical energy.","It works due to force on a current-carrying coil in magnetic field.","Commutator helps maintain rotation direction."],
    "Electromagnetic Induction":["Electromagnetic induction is production of EMF due to changing magnetic field.","Relative motion between magnet and coil can induce current.","It is the principle of generators."],
    "Lenz's Law":["Lenz's law states that induced current opposes the change that produces it.","It follows conservation of energy.","It tells direction of induced current."],
    "Electric Generator":["A generator converts mechanical energy into electrical energy.","It works on electromagnetic induction.","AC generators are used in power stations."],
    "Transformer":["A transformer changes AC voltage level.","Step-up transformer increases voltage; step-down decreases voltage.","It works by mutual induction between coils."],
    "Deflection of Electron Beam":["Electron beam can be deflected by electric or magnetic fields.","This shows electrons are charged particles.","It is used in display and measuring devices."],
    "Cathode Ray Oscilloscope":["CRO displays electrical signals as waveforms.","It can measure voltage, time period and frequency.","It uses electron beam deflection on a screen."],

    "Electromagnetic Spectrum":["Electromagnetic spectrum includes radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays.","All EM waves travel at speed of light in vacuum.","They differ in frequency, wavelength and energy."],
    "Applications of Electromagnetic Waves":["Radio waves are used in communication.","Microwaves are used in cooking and radar.","X-rays are used in medical imaging, while gamma rays can be used in cancer treatment."],
    "Risks Associated with Electromagnetic Waves":["High-energy EM waves can damage living tissues.","Ultraviolet can cause skin damage; X-rays and gamma rays are ionizing.","Safety shielding and controlled exposure are important."],
    "Scattering of Light":["Scattering is spreading of light in different directions by particles.","Blue light scatters more than red light in atmosphere.","This explains blue sky and reddish sunset."],
    "Nature of Light":["Light shows both wave and particle nature.","Wave nature explains interference and diffraction.","Particle nature explains photoelectric effect."],

    "Discovery of Nucleus":["Rutherford's experiment showed that atom has a small dense positive nucleus.","Most of the atom is empty space.","The nucleus contains most of the mass of atom."],
    "Nuclear Representations":["Nuclear notation shows atomic number and mass number.","Atomic number is number of protons.","Mass number is total number of protons and neutrons."],
    "Isotopes and Radioisotopes":["Isotopes have same atomic number but different mass number.","Radioisotopes are unstable isotopes that emit radiation.","They are used in medicine, industry and research."],
    "Radioactivity":["Radioactivity is spontaneous emission of radiation from unstable nuclei.","Alpha, beta and gamma radiations are common types.","Radioactive decay changes the nucleus."],
    "Nuclear Decay":["Nuclear decay is transformation of unstable nucleus into a more stable form.","It may emit alpha, beta or gamma radiation.","Decay is random but follows half-life pattern."],
    "Half-Life":["Half-life is time taken for half of radioactive nuclei to decay.","It is used to compare decay rates.","After each half-life, remaining nuclei become half."],
    "Ionizing Nuclear Radiations":["Ionizing radiation can remove electrons from atoms.","Alpha, beta, gamma and X-rays can ionize matter.","It can damage cells, so safety precautions are needed."],
    "Applications of Radiation":["Radiation is used in cancer treatment, sterilization, tracers, imaging and industry.","Controlled use is helpful, but overexposure is dangerous.","Radiation badges and shielding protect workers."],
    "Background Radiation":["Background radiation is natural radiation around us.","Sources include cosmic rays, rocks, soil, food and building materials.","Low levels are usually present everywhere."],
    "Nuclear Fission":["Nuclear fission is splitting of a heavy nucleus into smaller nuclei.","It releases large energy and neutrons.","It is used in nuclear reactors and atomic bombs."],
    "Nuclear Fusion":["Nuclear fusion is joining of light nuclei to form heavier nucleus.","It releases huge energy.","The Sun and stars produce energy by fusion."],
    "Dark Matter":["Dark matter is matter that does not emit light but has gravitational effects.","It is detected indirectly by its effect on galaxies.","It remains an important unsolved topic in physics."],
    "Falsifiability":["Falsifiability means a scientific idea can be tested and potentially proven wrong.","It separates scientific claims from non-scientific claims.","A good theory must make testable predictions."]
  };

  function getPhysicsUnit(title){
    return PHYSICS_TEXTBOOK_UNITS.find(u => u.title === title) || PHYSICS_TEXTBOOK_UNITS[0];
  }

  function unitMeta(unit){
    return UNIT_NOTES[unit.title] || { intro:"This unit is part of Grade 10 Physics.", formulas:[], exam:[] };
  }

  function topicNotes(topic){
    return TOPIC_NOTES[topic] || [
      topic + " is an important textbook topic from this unit.",
      "Learn its definition, main concept, formula if any, examples and diagrams.",
      "Practice short questions and MCQs from this topic for exam preparation."
    ];
  }

  function renderPhysicsTopic(unit, topic){
    const meta = unitMeta(unit);
    const notes = topicNotes(topic);
    const notesHtml = notes.map(n => `<li>${n}</li>`).join("");
    const formulaHtml = (meta.formulas || []).map(f => `<li><code>${f}</code></li>`).join("");
    const examHtml = (meta.exam || []).map(q => `<li>${q}</li>`).join("");

    return `
      <div class="physics-textbook-v2">
        <h2>${unit.title}</h2>
        <h3>${topic}</h3>

        <div class="physics-source-note">
          Digital study content aligned with the uploaded Grade 10 Physics PDF.
        </div>

        <section>
          <h3>Chapter Idea</h3>
          <p>${meta.intro}</p>
        </section>

        <section>
          <h3>Textbook Content</h3>
          <ul>${notesHtml}</ul>
        </section>

        <section>
          <h3>Important Formulas / Rules</h3>
          <ul class="physics-formulas-v2">${formulaHtml || "<li>No main numerical formula for this topic. Focus on definition and explanation.</li>"}</ul>
        </section>

        <section>
          <h3>Exam Short Questions</h3>
          <ol>
            <li>Define ${topic}.</li>
            <li>Explain ${topic} in simple words.</li>
            <li>Write two important points about ${topic}.</li>
            <li>Give one daily-life or textbook example of ${topic}.</li>
            ${examHtml}
          </ol>
        </section>

        <section>
          <h3>MCQs</h3>
          <ol>
            <li>${topic} is studied in <b>${unit.title}</b>.</li>
            <li>The main focus of this topic is <b>${notes[0]}</b></li>
            <li>An important exam point is <b>${notes[1] || meta.intro}</b></li>
          </ol>
        </section>

        <section>
          <h3>Ask AI Prompts</h3>
          <div class="prompt-chip">Explain ${topic} like I am weak in Physics</div>
          <div class="prompt-chip">Make 10 MCQs from ${topic}</div>
          <div class="prompt-chip">Make short questions with answers</div>
          <div class="prompt-chip">Give formula-based numericals</div>
        </section>
      </div>
    `;
  }

  try{
    DATA.subjects = DATA.subjects.map(s => s.id === "physics" ? { ...s, active:true } : s);
    DATA.chapters.physics = PHYSICS_TEXTBOOK_UNITS.map(u => ({ title:u.title, topics:u.topics }));
  }catch(e){}

  const previousPhysicsRenderV2 = renderDigitalBookContent;

  renderDigitalBookContent = function(chapter){
    if(state.selectedSubject === "physics" && chapter){
      const unit = getPhysicsUnit(chapter.title);
      const topic = state.selectedTopic || unit.topics[0];

      return `
        <div class="digital-book-area physics-digital-area physics-textbook-area-v2">
          <div class="digital-book-head">
            <strong>Physics Digital Book</strong>
            <span>${unit.title}</span>
          </div>
          <article class="digital-book-text">${renderPhysicsTopic(unit, topic)}</article>
        </div>
      `;
    }

    return previousPhysicsRenderV2 ? previousPhysicsRenderV2(chapter) : "";
  };

  window.PHYSICS_TEXTBOOK_UNITS = PHYSICS_TEXTBOOK_UNITS;
  window.PHYSICS_TOPIC_NOTES = TOPIC_NOTES;
})();


// PHYSICS_CONTENT_FROM_PDF_CLEAN_V1
const PHYSICS_CONTENT_FROM_PDF = {
  "Specific Heat Capacity": "Specific heat capacity is the heat required to raise the temperature of 1 kg of a substance by 1 K or 1°C. Formula: c = Q / mΔT. Water has high specific heat capacity, so it heats and cools slowly.",
  "Transfer of Heat": "Heat transfers from a hotter body to a colder body until thermal equilibrium is reached. The three methods are conduction, convection, and radiation.",
  "Applications of Heat Transfer": "Heat transfer is used in cooking, radiators, cooling systems, heat exchangers, insulation, thermos flasks, ventilation, and sea breezes.",
  "Greenhouse Effect and Global Warming": "The greenhouse effect occurs when greenhouse gases trap infrared radiation from Earth. Too much greenhouse gas causes global warming and climate change.",
  "Flow of Heat in Geothermal Activities": "Geothermal heat comes from inside Earth. Heat moves through rocks and molten material and can cause hot springs, geysers, and volcanic activity.",

  "Kinetic Theory of Matter": "Matter is made of tiny particles that are always moving. Heating increases their kinetic energy.",
  "Thermal Expansion": "Thermal expansion is increase in size of matter when heated. It is important in bridges, railway tracks, pipes, and wires.",
  "Evaporation": "Evaporation is conversion of liquid into vapour from the surface at any temperature. It causes cooling.",
  "Latent Heat": "Latent heat is heat absorbed or released during change of state without change in temperature. Formula: Q = mL.",
  "Pressure Exerted by Gas Particles": "Gas pressure is caused by collisions of gas particles with the walls of a container.",
  "Superconductivity": "Superconductivity is a state where electrical resistance becomes almost zero below a critical temperature.",

  "Wave Motion": "Wave motion transfers energy from one place to another without permanent transfer of matter.",
  "Wave Propagation": "Wave propagation means movement of a wave through a medium or space.",
  "Characteristic Wave Parameters": "Important wave parameters include amplitude, wavelength, frequency, time period, and speed. Formula: v = fλ.",
  "Waves and their Types": "Waves can be mechanical or electromagnetic, and transverse or longitudinal.",
  "Types of Waves On the Basis of Medium": "Mechanical waves need a medium. Electromagnetic waves can travel through vacuum.",
  "Types of Waves On the Basis of Propagation": "Transverse waves vibrate perpendicular to direction of travel. Longitudinal waves vibrate parallel to direction of travel.",
  "Wave Characteristics": "Waves show reflection, refraction, diffraction, and interference.",
  "Properties of Waves": "Wave properties include speed, frequency, wavelength, amplitude, reflection, refraction, and diffraction.",
  "Tsunamis": "Tsunamis are huge sea waves caused by underwater earthquakes, volcanic eruptions, or landslides.",

  "Source of Sound": "Sound is produced by vibrating bodies.",
  "Nature of Sound Waves": "Sound is a mechanical longitudinal wave that needs a medium.",
  "Ultrasound": "Ultrasound has frequency above human hearing range and is used in medical imaging and cleaning.",
  "Infrasound": "Infrasound has frequency below human hearing range and is produced by earthquakes and volcanoes.",
  "Characteristics of Sound Waves": "Pitch depends on frequency, loudness depends on amplitude, and quality distinguishes sounds.",
  "Analysing Sound Waves": "Sound waves can be analysed using waveforms showing amplitude, frequency, and wavelength.",
  "Speed of Sound": "Sound travels fastest in solids, slower in liquids, and slowest in gases.",
  "Noise": "Noise is unwanted sound that can cause stress and hearing problems.",
  "Reflection, Refraction and Diffraction of Sound Waves": "Sound can reflect, refract, and diffract. Reflection produces echo.",
  "Echo": "Echo is reflected sound heard after a delay.",
  "Acoustics": "Acoustics is the study of sound in rooms, halls, and buildings.",
  "Human Hearing System": "The ear collects sound and converts it into nerve signals interpreted by the brain.",

  "Reflection of Light": "Reflection is bouncing back of light from a surface. Angle of incidence equals angle of reflection.",
  "Refraction of Light": "Refraction is bending of light when it passes from one medium to another.",
  "Total Internal Reflection": "Total internal reflection occurs when light reflects completely inside a denser medium.",
  "Thin Lenses": "Thin lenses form images by refraction. Convex lenses converge light and concave lenses diverge light.",
  "Application of Lenses": "Lenses are used in cameras, spectacles, microscopes, telescopes, and projectors.",
  "Visible Spectrum": "Visible spectrum is the part of electromagnetic spectrum visible to the human eye.",
  "Human Eye and Colour Perception": "The eye focuses light on the retina. Rods help in dim light and cones detect colour.",
  "Gravitational Lensing": "Gravitational lensing is bending of light due to gravity of massive objects.",
  "Acoustic Lenses": "Acoustic lenses focus sound waves and are used in ultrasound.",

  "Static Charge": "Static charge is electric charge at rest on an object.",
  "Conductors and Insulators": "Conductors allow charges to move easily. Insulators resist charge movement.",
  "Charging and Discharging": "Charging means gaining or losing charge. Discharging is sudden movement of charge.",
  "Electroscope": "An electroscope detects electric charge.",
  "Electric Field": "Electric field is a region where a charge experiences force. Formula: E = F/q.",
  "Applications of Electrostatics": "Electrostatics is used in photocopiers, printers, spray painting, and air purifiers.",
  "Electrical Breakdown": "Electrical breakdown occurs when an insulator becomes conducting due to high voltage.",

  "Electric Current": "Electric current is rate of flow of charge. Formula: I = Q/t.",
  "Alternating and Direct Current": "Direct current flows in one direction. Alternating current changes direction repeatedly.",
  "Potential Difference": "Potential difference is work done per unit charge.",
  "EMF": "EMF is energy supplied per unit charge by a source.",
  "Ohm's Law": "Ohm's law states that current is directly proportional to voltage if temperature remains constant. Formula: V = IR.",
  "Resistance": "Resistance opposes the flow of current.",
  "Resistivity": "Resistivity is a property of material. Formula: R = ρL/A.",
  "Electrical Measuring Instruments": "Ammeter measures current. Voltmeter measures potential difference.",
  "Experiment for Demonstration of Resistance": "Resistance can be demonstrated by changing wire length, thickness, or material.",

  "Circuit Elements and Diagram": "Circuit diagrams use symbols for cells, switches, resistors, lamps, ammeters, voltmeters, and wires.",
  "Resistors": "A resistor limits current in a circuit.",
  "Types of Resistors": "Resistors may be fixed, variable, thermistors, or light dependent resistors.",
  "Combination of Resistors": "In series, resistances add directly. In parallel, reciprocal of total resistance equals sum of reciprocals.",
  "Combination of EMF Sources": "Cells can be connected in series to increase voltage or in parallel for longer supply.",
  "Electricity and Its Uses": "Electricity is used for lighting, heating, communication, transport, machines, and electronics.",
  "Electrical Energy": "Electrical energy depends on power and time. Formula: E = Pt.",
  "Electric Power": "Electric power is rate of using electrical energy. Formula: P = VI.",
  "Household Circuits and Electric Safety": "Household safety uses fuses, circuit breakers, earthing, insulation, and proper wiring.",

  "Semiconductors": "Semiconductors have conductivity between conductors and insulators.",
  "N and P Type Semiconductors": "N-type has electrons as majority carriers. P-type has holes as majority carriers.",
  "PN Junction": "PN junction is formed by joining P-type and N-type semiconductors.",
  "Characteristics of Diode Under Biasing": "Forward bias allows current. Reverse bias blocks current except a small leakage current.",
  "Light Emitting Diode": "LED emits light when forward biased.",
  "Transistor": "A transistor is used as an amplifier or switch.",
  "Relays and Switching Circuits": "A relay is an electrically operated switch.",
  "Transistor as a Switch": "A transistor can turn a circuit ON or OFF.",
  "Digital Electronics": "Digital electronics uses binary values 0 and 1.",
  "Fundamental Logic Gates": "Basic logic gates are AND, OR, and NOT.",
  "Universal Logic Gates": "NAND and NOR are universal gates.",
  "Uses of Logic Gates": "Logic gates are used in computers, calculators, alarms, and control systems.",
  "Analogue and Digital Electronics": "Analogue signals vary continuously. Digital signals have discrete levels.",
  "Quantum Computers": "Quantum computers use qubits and are advanced computing systems.",

  "Magnetic Field Due to Current Carrying Wire": "A current-carrying wire produces a magnetic field around it.",
  "Magnetic Field Due to Current Carrying Solenoid": "A current-carrying solenoid behaves like a bar magnet.",
  "Earth's Magnetic Field": "Earth behaves like a giant magnet.",
  "Application of Magnetic Effect of Current": "Magnetic effect of current is used in electromagnets, bells, relays, speakers, and motors.",
  "Force On a Current Carrying Conductor Place in a Magnetic Field": "A current-carrying conductor in a magnetic field experiences force. Formula: F = BIL.",
  "Current Carrying Coil in a Magnetic Field": "A current-carrying coil in a magnetic field experiences turning effect.",
  "Electric Motor": "An electric motor converts electrical energy into mechanical energy.",
  "Electromagnetic Induction": "Electromagnetic induction is production of EMF due to changing magnetic field.",
  "Lenz's Law": "Lenz's law states that induced current opposes the change that produces it.",
  "Electric Generator": "A generator converts mechanical energy into electrical energy.",
  "Transformer": "A transformer changes AC voltage level. Formula: Vp/Vs = Np/Ns.",
  "Deflection of Electron Beam": "Electron beam can be deflected by electric or magnetic fields.",
  "Cathode Ray Oscilloscope": "CRO displays electrical signals as waveforms.",

  "Electromagnetic Spectrum": "Electromagnetic spectrum includes radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays.",
  "Applications of Electromagnetic Waves": "Electromagnetic waves are used in communication, cooking, remote controls, imaging, and treatment.",
  "Risks Associated with Electromagnetic Waves": "High-energy electromagnetic waves can damage living tissues.",
  "Scattering of Light": "Scattering is spreading of light in different directions by particles. Blue light scatters more, making the sky appear blue.",
  "Nature of Light": "Light shows both wave and particle nature.",

  "Discovery of Nucleus": "Rutherford's experiment showed atom has a small dense positive nucleus.",
  "Nuclear Representations": "Nuclear notation shows atomic number and mass number.",
  "Isotopes and Radioisotopes": "Isotopes have same atomic number but different mass number. Radioisotopes are unstable isotopes.",
  "Radioactivity": "Radioactivity is spontaneous emission of radiation from unstable nuclei.",
  "Nuclear Decay": "Nuclear decay changes an unstable nucleus into a more stable form.",
  "Half-Life": "Half-life is time taken for half of radioactive nuclei to decay.",
  "Ionizing Nuclear Radiations": "Ionizing radiation can remove electrons from atoms and damage living tissue.",
  "Applications of Radiation": "Radiation is used in medicine, sterilization, imaging, agriculture, and industry.",
  "Background Radiation": "Background radiation is natural radiation around us.",
  "Nuclear Fission": "Nuclear fission is splitting of a heavy nucleus into smaller nuclei with energy release.",
  "Nuclear Fusion": "Nuclear fusion is joining of light nuclei into a heavier nucleus with huge energy release.",
  "Dark Matter": "Dark matter does not emit light but has gravitational effects.",
  "Falsifiability": "Falsifiability means a scientific idea can be tested and potentially proven wrong."
};

function renderPhysicsPdfContentClean(chapter){
  const topic = state.selectedTopic || (chapter.topics && chapter.topics[0]) || "";
  const text = PHYSICS_CONTENT_FROM_PDF[topic] || "This topic is from the Grade 10 Physics textbook.";

  return `
    <div class="digital-book-area physics-clean-area">
      <div class="digital-book-head">
        <strong>Physics Digital Book</strong>
        <span>${chapter.title}</span>
      </div>
      <article class="digital-book-text physics-clean-text">
        <h2>${chapter.title}</h2>
        <h3>${topic}</h3>
        <p>${text}</p>

        <h3>Important Points</h3>
        <ul>
          <li>Learn the definition of ${topic}.</li>
          <li>Understand the concept in simple words.</li>
          <li>Revise formulas, examples, diagrams, and applications.</li>
          <li>Practice short questions and MCQs.</li>
        </ul>

        <h3>Exam Questions</h3>
        <ol>
          <li>Define ${topic}.</li>
          <li>Explain ${topic} with an example.</li>
          <li>Write two important points about ${topic}.</li>
          <li>Write the related formula if applicable.</li>
        </ol>
      </article>
    </div>
  `;
}

// PHYSICS_PDF_FINAL_OVERRIDE_V9
(function(){
  const PDF_PHYSICS_CHAPTERS = [
    { title:"Chapter 1: Heat Capacity and Modes of Heat Transfer", topics:["Specific Heat Capacity","Transfer of Heat","Applications of Heat Transfer","Greenhouse Effect and Global Warming","Flow of Heat in Geothermal Activities"] },
    { title:"Chapter 2: Thermal Expansion and Change of State", topics:["Kinetic Theory of Matter","Thermal Expansion","Evaporation","Latent Heat","Pressure Exerted by Gas Particles","Superconductivity"] },
    { title:"Chapter 3: Waves", topics:["Wave Motion","Wave Propagation","Characteristic Wave Parameters","Waves and their Types","Types of Waves On the Basis of Medium","Types of Waves On the Basis of Propagation","Wave Characteristics","Properties of Waves","Tsunamis"] },
    { title:"Chapter 4: Sound", topics:["Source of Sound","Nature of Sound Waves","Ultrasound","Infrasound","Characteristics of Sound Waves","Analysing Sound Waves","Speed of Sound","Noise","Reflection, Refraction and Diffraction of Sound Waves","Echo","Acoustics","Human Hearing System"] },
    { title:"Chapter 5: Optics", topics:["Reflection of Light","Refraction of Light","Total Internal Reflection","Thin Lenses","Application of Lenses","Visible Spectrum","Human Eye and Colour Perception","Gravitational Lensing","Acoustic Lenses"] },
    { title:"Chapter 6: Electrostatics", topics:["Static Charge","Conductors and Insulators","Charging and Discharging","Electroscope","Electric Field","Applications of Electrostatics","Electrical Breakdown"] },
    { title:"Chapter 7: Current Electricity", topics:["Electric Current","Alternating and Direct Current","Potential Difference","EMF","Ohm's Law","Resistance","Resistivity","Electrical Measuring Instruments","Experiment for Demonstration of Resistance"] },
    { title:"Chapter 8: Electric Circuits", topics:["Circuit Elements and Diagram","Resistors","Types of Resistors","Combination of Resistors","Combination of EMF Sources","Electricity and Its Uses","Electrical Energy","Electric Power","Household Circuits and Electric Safety"] },
    { title:"Chapter 9: Electronics", topics:["Semiconductors","N and P Type Semiconductors","PN Junction","Characteristics of Diode Under Biasing","Light Emitting Diode","Transistor","Relays and Switching Circuits","Transistor as a Switch","Digital Electronics","Fundamental Logic Gates","Universal Logic Gates","Uses of Logic Gates","Analogue and Digital Electronics","Quantum Computers"] },
    { title:"Chapter 10: Electromagnetism", topics:["Magnetic Field Due to Current Carrying Wire","Magnetic Field Due to Current Carrying Solenoid","Earth's Magnetic Field","Application of Magnetic Effect of Current","Force On a Current Carrying Conductor Place in a Magnetic Field","Current Carrying Coil in a Magnetic Field","Electric Motor","Electromagnetic Induction","Lenz's Law","Electric Generator","Transformer","Deflection of Electron Beam","Cathode Ray Oscilloscope"] },
    { title:"Chapter 11: Electromagnetic Waves", topics:["Electromagnetic Spectrum","Applications of Electromagnetic Waves","Risks Associated with Electromagnetic Waves","Scattering of Light","Nature of Light"] },
    { title:"Chapter 12: Nuclear Physics", topics:["Discovery of Nucleus","Nuclear Representations","Isotopes and Radioisotopes","Radioactivity","Nuclear Decay","Half-Life","Ionizing Nuclear Radiations","Applications of Radiation","Background Radiation","Nuclear Fission","Nuclear Fusion","Dark Matter","Falsifiability"] }
  ];

  const PDF_PHYSICS_CONTENT = {
    "Specific Heat Capacity":"Specific heat capacity is the heat required to raise the temperature of 1 kg of a substance by 1 K or 1°C. Formula: c = Q / mΔT. Water has high specific heat capacity, so it heats and cools slowly.",
    "Transfer of Heat":"Heat transfers from a hotter body to a colder body until thermal equilibrium is reached. The three methods are conduction, convection, and radiation.",
    "Applications of Heat Transfer":"Heat transfer is used in cooking, radiators, heat exchangers, cooling systems, thermos flasks, insulation, ventilation, and sea breezes.",
    "Greenhouse Effect and Global Warming":"Greenhouse gases trap infrared radiation from Earth. This is greenhouse effect. Too much greenhouse gas causes global warming and climate change.",
    "Flow of Heat in Geothermal Activities":"Geothermal heat comes from inside Earth. Heat moves through rocks and molten material and can cause hot springs, geysers, volcanoes, and geothermal energy.",

    "Kinetic Theory of Matter":"Matter is made of tiny particles that are always moving. Heating increases the kinetic energy of particles.",
    "Thermal Expansion":"Thermal expansion is increase in size of matter when heated. It is important in bridges, railway tracks, wires, and pipes.",
    "Evaporation":"Evaporation is conversion of liquid into vapour from the surface at any temperature. It causes cooling.",
    "Latent Heat":"Latent heat is heat absorbed or released during change of state without change in temperature. Formula: Q = mL.",
    "Pressure Exerted by Gas Particles":"Gas pressure is caused by collisions of gas particles with the walls of a container.",
    "Superconductivity":"Superconductivity is a state where electrical resistance becomes almost zero below a critical temperature.",

    "Wave Motion":"Wave motion transfers energy from one place to another without permanent transfer of matter.",
    "Wave Propagation":"Wave propagation means movement of a wave through a medium or space.",
    "Characteristic Wave Parameters":"Important wave parameters are amplitude, wavelength, frequency, time period, and speed. Formula: v = fλ.",
    "Waves and their Types":"Waves can be mechanical or electromagnetic. They can also be transverse or longitudinal.",
    "Types of Waves On the Basis of Medium":"Mechanical waves need a medium. Electromagnetic waves can travel through vacuum.",
    "Types of Waves On the Basis of Propagation":"Transverse waves vibrate perpendicular to wave direction. Longitudinal waves vibrate parallel to wave direction.",
    "Wave Characteristics":"Waves show reflection, refraction, diffraction, and interference.",
    "Properties of Waves":"Wave properties include speed, frequency, wavelength, amplitude, reflection, refraction, and diffraction.",
    "Tsunamis":"Tsunamis are huge sea waves caused by underwater earthquakes, volcanic eruptions, or landslides.",

    "Source of Sound":"Sound is produced by vibrating bodies.",
    "Nature of Sound Waves":"Sound is a mechanical longitudinal wave that travels by compressions and rarefactions.",
    "Ultrasound":"Ultrasound has frequency above human hearing range and is used in medical imaging, cleaning, and flaw detection.",
    "Infrasound":"Infrasound has frequency below human hearing range and is produced by earthquakes, volcanoes, and storms.",
    "Characteristics of Sound Waves":"Pitch depends on frequency, loudness depends on amplitude, and quality distinguishes different sounds.",
    "Analysing Sound Waves":"Sound waves can be analysed using waveforms showing amplitude, frequency, and wavelength.",
    "Speed of Sound":"Sound travels fastest in solids, slower in liquids, and slowest in gases.",
    "Noise":"Noise is unwanted sound that can cause stress and hearing damage.",
    "Reflection, Refraction and Diffraction of Sound Waves":"Sound can reflect, refract, and diffract. Reflection produces echo.",
    "Echo":"Echo is reflected sound heard after a delay.",
    "Acoustics":"Acoustics is the study of sound in rooms, halls, and buildings.",
    "Human Hearing System":"The ear collects sound and converts it into nerve signals interpreted by the brain.",

    "Reflection of Light":"Reflection is bouncing back of light from a surface. Angle of incidence equals angle of reflection.",
    "Refraction of Light":"Refraction is bending of light when it passes from one medium to another.",
    "Total Internal Reflection":"Total internal reflection occurs when light reflects completely inside a denser medium.",
    "Thin Lenses":"Thin lenses form images by refraction. Convex lenses converge light and concave lenses diverge light.",
    "Application of Lenses":"Lenses are used in cameras, spectacles, microscopes, telescopes, and projectors.",
    "Visible Spectrum":"Visible spectrum is the part of electromagnetic spectrum visible to the human eye.",
    "Human Eye and Colour Perception":"The eye focuses light on the retina. Rods help in dim light and cones detect colour.",
    "Gravitational Lensing":"Gravitational lensing is bending of light due to gravity of massive objects.",
    "Acoustic Lenses":"Acoustic lenses focus sound waves and are used in ultrasound.",

    "Static Charge":"Static charge is electric charge at rest on an object.",
    "Conductors and Insulators":"Conductors allow charges to move easily. Insulators resist charge movement.",
    "Charging and Discharging":"Charging means gaining or losing charge. Discharging is sudden movement of charge.",
    "Electroscope":"An electroscope detects electric charge.",
    "Electric Field":"Electric field is a region where a charge experiences force. Formula: E = F/q.",
    "Applications of Electrostatics":"Electrostatics is used in photocopiers, printers, spray painting, and air purifiers.",
    "Electrical Breakdown":"Electrical breakdown occurs when an insulator becomes conducting due to high voltage.",

    "Electric Current":"Electric current is rate of flow of charge. Formula: I = Q/t.",
    "Alternating and Direct Current":"Direct current flows in one direction. Alternating current changes direction repeatedly.",
    "Potential Difference":"Potential difference is work done per unit charge.",
    "EMF":"EMF is energy supplied per unit charge by a source.",
    "Ohm's Law":"Ohm's law states current is directly proportional to voltage if temperature remains constant. Formula: V = IR.",
    "Resistance":"Resistance opposes current flow.",
    "Resistivity":"Resistivity is a material property. Formula: R = ρL/A.",
    "Electrical Measuring Instruments":"Ammeter measures current. Voltmeter measures potential difference.",
    "Experiment for Demonstration of Resistance":"Resistance can be demonstrated by changing wire length, thickness, or material.",

    "Circuit Elements and Diagram":"Circuit diagrams use symbols for cells, switches, resistors, lamps, ammeters, voltmeters, and wires.",
    "Resistors":"A resistor limits current in a circuit.",
    "Types of Resistors":"Resistors may be fixed, variable, thermistors, or light dependent resistors.",
    "Combination of Resistors":"In series, resistances add directly. In parallel, reciprocal of total resistance equals sum of reciprocals.",
    "Combination of EMF Sources":"Cells can be connected in series to increase voltage or in parallel for longer supply.",
    "Electricity and Its Uses":"Electricity is used for lighting, heating, communication, transport, machines, and electronics.",
    "Electrical Energy":"Electrical energy depends on power and time. Formula: E = Pt.",
    "Electric Power":"Electric power is rate of using electrical energy. Formula: P = VI.",
    "Household Circuits and Electric Safety":"Household safety uses fuses, circuit breakers, earthing, insulation, and proper wiring.",

    "Semiconductors":"Semiconductors have conductivity between conductors and insulators.",
    "N and P Type Semiconductors":"N-type has electrons as majority carriers. P-type has holes as majority carriers.",
    "PN Junction":"PN junction is formed by joining P-type and N-type semiconductors.",
    "Characteristics of Diode Under Biasing":"Forward bias allows current. Reverse bias blocks current except small leakage current.",
    "Light Emitting Diode":"LED emits light when forward biased.",
    "Transistor":"A transistor is used as an amplifier or switch.",
    "Relays and Switching Circuits":"A relay is an electrically operated switch.",
    "Transistor as a Switch":"A transistor can turn a circuit ON or OFF.",
    "Digital Electronics":"Digital electronics uses binary values 0 and 1.",
    "Fundamental Logic Gates":"Basic logic gates are AND, OR, and NOT.",
    "Universal Logic Gates":"NAND and NOR are universal gates.",
    "Uses of Logic Gates":"Logic gates are used in computers, calculators, alarms, and control systems.",
    "Analogue and Digital Electronics":"Analogue signals vary continuously. Digital signals have discrete levels.",
    "Quantum Computers":"Quantum computers use qubits and are advanced computing systems.",

    "Magnetic Field Due to Current Carrying Wire":"A current-carrying wire produces a magnetic field around it.",
    "Magnetic Field Due to Current Carrying Solenoid":"A current-carrying solenoid behaves like a bar magnet.",
    "Earth's Magnetic Field":"Earth behaves like a giant magnet.",
    "Application of Magnetic Effect of Current":"Magnetic effect of current is used in electromagnets, bells, relays, speakers, and motors.",
    "Force On a Current Carrying Conductor Place in a Magnetic Field":"A current-carrying conductor in a magnetic field experiences force. Formula: F = BIL.",
    "Current Carrying Coil in a Magnetic Field":"A current-carrying coil in a magnetic field experiences turning effect.",
    "Electric Motor":"An electric motor converts electrical energy into mechanical energy.",
    "Electromagnetic Induction":"Electromagnetic induction is production of EMF due to changing magnetic field.",
    "Lenz's Law":"Lenz's law states that induced current opposes the change that produces it.",
    "Electric Generator":"A generator converts mechanical energy into electrical energy.",
    "Transformer":"A transformer changes AC voltage level. Formula: Vp/Vs = Np/Ns.",
    "Deflection of Electron Beam":"Electron beam can be deflected by electric or magnetic fields.",
    "Cathode Ray Oscilloscope":"CRO displays electrical signals as waveforms.",

    "Electromagnetic Spectrum":"Electromagnetic spectrum includes radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays.",
    "Applications of Electromagnetic Waves":"Electromagnetic waves are used in communication, cooking, remote controls, imaging, and treatment.",
    "Risks Associated with Electromagnetic Waves":"High-energy electromagnetic waves can damage living tissues.",
    "Scattering of Light":"Scattering is spreading of light in different directions by particles. Blue light scatters more, making the sky appear blue.",
    "Nature of Light":"Light shows both wave and particle nature.",

    "Discovery of Nucleus":"Rutherford's experiment showed atom has a small dense positive nucleus.",
    "Nuclear Representations":"Nuclear notation shows atomic number and mass number.",
    "Isotopes and Radioisotopes":"Isotopes have same atomic number but different mass number. Radioisotopes are unstable isotopes.",
    "Radioactivity":"Radioactivity is spontaneous emission of radiation from unstable nuclei.",
    "Nuclear Decay":"Nuclear decay changes an unstable nucleus into a more stable form.",
    "Half-Life":"Half-life is time taken for half of radioactive nuclei to decay.",
    "Ionizing Nuclear Radiations":"Ionizing radiation can remove electrons from atoms and damage living tissue.",
    "Applications of Radiation":"Radiation is used in medicine, sterilization, imaging, agriculture, and industry.",
    "Background Radiation":"Background radiation is natural radiation around us.",
    "Nuclear Fission":"Nuclear fission is splitting of a heavy nucleus into smaller nuclei with energy release.",
    "Nuclear Fusion":"Nuclear fusion is joining of light nuclei into a heavier nucleus with huge energy release.",
    "Dark Matter":"Dark matter does not emit light but has gravitational effects.",
    "Falsifiability":"Falsifiability means a scientific idea can be tested and potentially proven wrong."
  };

  function applyPdfPhysics(){
    try{
      DATA.subjects = DATA.subjects.map(s => s.id === "physics" ? { id:"physics", title:"Physics", icon:"⚡", active:true } : s);
      if(!DATA.subjects.some(s => s.id === "physics")){
        DATA.subjects.push({ id:"physics", title:"Physics", icon:"⚡", active:true });
      }
      DATA.chapters.physics = PDF_PHYSICS_CHAPTERS.map(c => ({ title:c.title, topics:c.topics }));
    }catch(e){}
  }

  function renderPdfPhysics(chapter){
    const realChapter = PDF_PHYSICS_CHAPTERS.find(c => c.title === chapter.title) || PDF_PHYSICS_CHAPTERS[0];
    const topic = state.selectedTopic || realChapter.topics[0];
    const text = PDF_PHYSICS_CONTENT[topic] || "This topic is from the Grade 10 Physics textbook.";

    return `
      <div class="digital-book-area">
        <div class="digital-book-head">
          <strong>Physics Digital Book</strong>
          <span>${realChapter.title}</span>
        </div>
        <article class="digital-book-text">
          <h2>${realChapter.title}</h2>
          <h3>${topic}</h3>
          <p>${text}</p>
          <h3>Important Points</h3>
          <ul>
            <li>Learn the definition of ${topic}.</li>
            <li>Understand the concept in simple words.</li>
            <li>Revise formulas, examples, diagrams, and applications.</li>
            <li>Practice short questions and MCQs.</li>
          </ul>
          <h3>Exam Questions</h3>
          <ol>
            <li>Define ${topic}.</li>
            <li>Explain ${topic} with an example.</li>
            <li>Write two important points about ${topic}.</li>
            <li>Write the related formula if applicable.</li>
          </ol>
        </article>
      </div>
    `;
  }

  applyPdfPhysics();

  const previousRenderDigitalBookContentV9 = renderDigitalBookContent;
  renderDigitalBookContent = function(chapter){
    if(state.selectedSubject === "physics" && chapter){
      return renderPdfPhysics(chapter);
    }
    return previousRenderDigitalBookContentV9 ? previousRenderDigitalBookContentV9(chapter) : "";
  };

  setTimeout(function(){
    applyPdfPhysics();
    try{
      if(state.selectedSubject === "physics"){
        state.selectedChapter = 0;
        state.selectedTopic = PDF_PHYSICS_CHAPTERS[0].topics[0];
      }
    }catch(e){}
    try{ if(typeof renderApp === "function") renderApp(); }catch(e){}
    try{ if(typeof render === "function") render(); }catch(e){}
  }, 300);

  window.PDF_PHYSICS_CHAPTERS = PDF_PHYSICS_CHAPTERS;
})();

// PHYSICS_CHAPTER_1_FLOW_CONTENT_V1
(function(){
  const PHYSICS_CH1_CONTENT = {
    "Specific Heat Capacity": `
      <h2>Chapter 1: Heat Capacity and Modes of Heat Transfer</h2>
      <h3>Specific Heat Capacity</h3>

      <p>Heat affects different substances in different ways. Some substances heat up quickly, while others need a large amount of heat before their temperature changes. This difference is explained by <b>specific heat capacity</b>.</p>

      <p><b>Specific heat capacity</b> is the amount of heat absorbed or lost by 1 kg of a substance to change its temperature by 1 kelvin or 1°C.</p>

      <div class="formula-box">c = Q / mΔT</div>

      <p>Here, <b>c</b> is specific heat capacity, <b>Q</b> is heat energy, <b>m</b> is mass, and <b>ΔT</b> is change in temperature. Its SI unit is joule per kilogram per kelvin, written as <b>J kg⁻¹ K⁻¹</b>.</p>

      <p>Metals such as aluminium, copper, iron, and silver usually have low specific heat capacity. They heat up quickly and cool down quickly. Water has a very high specific heat capacity, so it heats up slowly and cools down slowly.</p>

      <h3>Uses of Large Specific Heat of Water</h3>
      <ul>
        <li><b>Coastal climate:</b> Water changes temperature slowly, so areas near oceans have moderate temperature compared with inland areas.</li>
        <li><b>Oceans and lakes:</b> Large water bodies do not heat or cool quickly, which helps aquatic life survive.</li>
        <li><b>Human body:</b> The human body contains a large amount of water, which helps maintain body temperature.</li>
        <li><b>Cooling systems:</b> Water is used as coolant in car radiators and industrial systems because it can absorb a large amount of heat.</li>
        <li><b>Cooking:</b> Water heats food evenly and helps hot drinks stay warm for a longer time.</li>
      </ul>

      <h3>Measuring Specific Heat Capacity</h3>
      <p>The specific heat capacity of solids and liquids can be measured by experiments such as the <b>method of mixtures</b> and the <b>electrical heating method</b>.</p>

      <p>In the method of mixtures, a hot solid is placed into water in a calorimeter. Heat lost by the hot solid is gained by the water and calorimeter. Using conservation of energy, the unknown specific heat capacity can be calculated.</p>

      <p>In the electrical heating method, an immersion heater supplies heat to a solid or liquid. The heat supplied and the temperature rise are measured, and the formula <b>c = Q / mΔT</b> is used.</p>
    `,

    "Transfer of Heat": `
      <h2>Chapter 1: Heat Capacity and Modes of Heat Transfer</h2>
      <h3>Transfer of Heat</h3>

      <p>Heat transfer takes place when thermal energy moves from one object or region to another because of a temperature difference. Heat always flows from a hotter body to a colder body until both reach the same temperature. This final condition is called <b>thermal equilibrium</b>.</p>

      <p>There are three main methods of heat transfer:</p>

      <ul>
        <li><b>Conduction</b></li>
        <li><b>Convection</b></li>
        <li><b>Radiation</b></li>
      </ul>

      <h3>Thermal Conduction</h3>
      <p>Conduction is the transfer of heat through a substance from its hot part to its cold part without the movement of the substance as a whole. It mainly occurs in solids.</p>

      <p>In metals, heat is transferred quickly because metals have free electrons. These free electrons move through the metal and transfer energy from the hot region to the cold region. This is why metal objects feel hot quickly when heated.</p>

      <p>Materials such as copper and iron are good conductors. Materials such as wood, glass, rubber, and air are poor conductors or insulators.</p>

      <h3>Good and Bad Conductors</h3>
      <p>An experiment can be performed using different metal rods, wax, drawing pins, and a burner. When one end of each rod is heated, the wax melts and the pins fall. The rod whose pin falls first is the better conductor.</p>

      <h3>Convection</h3>
      <p>Convection is the transfer of heat by the bulk movement of molecules in liquids and gases. It does not occur in solids.</p>

      <p>When water is heated from below, the lower water becomes hot, expands, and becomes less dense. It rises upward. Cooler, denser water moves downward to take its place. This creates a continuous circular motion called a <b>convection current</b>.</p>

      <p>Convection currents also occur in air and oceans. They help distribute heat and are important for weather, sea breezes, and marine life.</p>

      <h3>Radiation</h3>
      <p>Radiation is the transfer of heat through electromagnetic waves. Unlike conduction and convection, radiation does not need a material medium. Heat from the Sun reaches Earth mainly by radiation.</p>

      <p>Dark and dull surfaces are good absorbers and emitters of heat radiation. Shiny and light-coloured surfaces are poor absorbers and emitters but good reflectors.</p>
    `,

    "Applications of Heat Transfer": `
      <h2>Chapter 1: Heat Capacity and Modes of Heat Transfer</h2>
      <h3>Applications of Heat Transfer</h3>

      <p>The ideas of conduction, convection, and radiation are used in many daily life and technological applications. Understanding heat transfer helps us design better cooling systems, cooking tools, insulation, buildings, and energy systems.</p>

      <h3>Cooking</h3>
      <p>In cooking, heat reaches food by conduction through the pan, convection through water or air, and radiation from flames or heating elements. Metals are used in cooking utensils because they conduct heat quickly.</p>

      <h3>Cooling Systems</h3>
      <p>Water is used in cooling systems because it has high specific heat capacity. It can absorb a large amount of heat without a large rise in temperature. This is why water is used in car radiators and industrial cooling systems.</p>

      <h3>Land and Sea Breezes</h3>
      <p>Land heats up faster than water during the day. Air over land becomes warm and rises, while cooler air from the sea moves toward land. This produces a sea breeze. At night, land cools faster than sea, and the wind direction can reverse.</p>

      <h3>Marine Life</h3>
      <p>Convection currents in oceans help move warm and cold water. This movement distributes heat, oxygen, and nutrients. It supports marine life by bringing nutrient-rich water to the surface and helping oxygen reach deeper water.</p>

      <h3>Insulation</h3>
      <p>Insulators reduce heat transfer. Materials such as wool, rubber, plastic, air, and foam are poor conductors. They are used in winter clothing, building insulation, thermos flasks, and handles of cooking utensils.</p>

      <h3>Radiation in Daily Life</h3>
      <p>Dark surfaces absorb more radiation and become hotter. Light and shiny surfaces reflect more radiation. This is why light-coloured clothes are preferred in hot weather and shiny surfaces are used in heat reflectors.</p>
    `,

    "Greenhouse Effect and Global Warming": `
      <h2>Chapter 1: Heat Capacity and Modes of Heat Transfer</h2>
      <h3>Greenhouse Effect and Global Warming</h3>

      <p>The Earth receives energy from the Sun mainly in the form of radiation. Some of this energy is absorbed by the Earth's surface, and some is reflected back. The warmed Earth emits infrared radiation.</p>

      <p>Certain gases in the atmosphere, called <b>greenhouse gases</b>, absorb and trap some of this infrared radiation. This process is called the <b>greenhouse effect</b>.</p>

      <p>The greenhouse effect is naturally important because it keeps Earth warm enough for life. Without it, Earth would be much colder.</p>

      <h3>Greenhouse Gases</h3>
      <ul>
        <li>Carbon dioxide</li>
        <li>Methane</li>
        <li>Water vapour</li>
        <li>Nitrous oxide</li>
        <li>Chlorofluorocarbons</li>
      </ul>

      <h3>Global Warming</h3>
      <p>When the amount of greenhouse gases increases due to human activities, more heat is trapped in the atmosphere. This causes the average temperature of Earth to rise. This rise in temperature is called <b>global warming</b>.</p>

      <h3>Effects of Global Warming</h3>
      <ul>
        <li>Melting of glaciers and polar ice</li>
        <li>Rise in sea level</li>
        <li>Extreme weather events</li>
        <li>Heat waves</li>
        <li>Changes in rainfall patterns</li>
        <li>Damage to ecosystems and agriculture</li>
      </ul>

      <p>Reducing pollution, saving energy, planting trees, and using renewable energy can help control global warming.</p>
    `,

    "Flow of Heat in Geothermal Activities": `
      <h2>Chapter 1: Heat Capacity and Modes of Heat Transfer</h2>
      <h3>Flow of Heat in Geothermal Activities</h3>

      <p>The inside of Earth is very hot. This internal heat is called <b>geothermal heat</b>. It comes from the original formation of Earth and from radioactive decay inside the Earth.</p>

      <p>Heat from inside Earth flows toward the surface. This heat transfer takes place mainly through conduction in solid rocks and convection in molten material under the Earth's crust.</p>

      <h3>Geothermal Activity</h3>
      <p>When underground water comes into contact with hot rocks, it can become heated and rise to the surface. This produces hot springs and geysers.</p>

      <p>In some regions, molten rock called magma moves under the crust. This movement transfers heat and can lead to volcanic activity.</p>

      <h3>Uses of Geothermal Energy</h3>
      <ul>
        <li>Generating electricity</li>
        <li>Heating buildings</li>
        <li>Hot water supply</li>
        <li>Industrial heating</li>
      </ul>

      <p>Geothermal energy is useful because it is a renewable energy source and can provide heat without burning fossil fuels.</p>

      <h3>Connection with Heat Transfer</h3>
      <p>Geothermal activity shows all three heat transfer ideas: conduction through rocks, convection in molten material and hot water, and radiation from hot surfaces.</p>
    `
  };

  function renderPhysicsChapter1Flow(chapter){
    const topic = state.selectedTopic || "Specific Heat Capacity";
    const html = PHYSICS_CH1_CONTENT[topic];

    if(!html) return null;

    return `
      <div class="digital-book-area physics-ch1-flow-area">
        <div class="digital-book-head">
          <strong>Physics Digital Book</strong>
          <span>Chapter 1</span>
        </div>
        <article class="digital-book-text physics-ch1-flow-text">
          ${html}
        </article>
      </div>
    `;
  }

  const oldPhysicsRenderCh1Flow = renderDigitalBookContent;

  renderDigitalBookContent = function(chapter){
    if(state.selectedSubject === "physics" && chapter && chapter.title === "Chapter 1: Heat Capacity and Modes of Heat Transfer"){
      const rendered = renderPhysicsChapter1Flow(chapter);
      if(rendered) return rendered;
    }
    return oldPhysicsRenderCh1Flow ? oldPhysicsRenderCh1Flow(chapter) : "";
  };

  window.PHYSICS_CH1_CONTENT = PHYSICS_CH1_CONTENT;
})();

// PHYSICS_CHAPTER_2_FLOW_CONTENT_V1
(function(){
  const PHYSICS_CH2_CONTENT = {
    "Kinetic Theory of Matter": `
      <h2>Chapter 2: Thermal Expansion and Change of State</h2>
      <h3>Kinetic Theory of Matter</h3>

      <p>The kinetic theory of matter explains the behaviour of solids, liquids, and gases by considering the motion of their particles. According to this theory, all matter is made up of tiny particles such as atoms, molecules, or ions.</p>

      <p>These particles are not completely at rest. They are always moving or vibrating. The type and amount of motion depends on the state of matter and its temperature.</p>

      <h3>Particles in Solids</h3>
      <p>In solids, particles are closely packed and have strong forces of attraction. They cannot move freely from one place to another, but they vibrate about fixed positions. This is why solids have fixed shape and fixed volume.</p>

      <h3>Particles in Liquids</h3>
      <p>In liquids, particles are still close together but have weaker forces of attraction than solids. They can slide over one another. This is why liquids have fixed volume but no fixed shape.</p>

      <h3>Particles in Gases</h3>
      <p>In gases, particles are far apart and the forces of attraction between them are very weak. They move freely in all directions and collide with each other and the walls of the container. This is why gases have no fixed shape and no fixed volume.</p>

      <h3>Effect of Heating</h3>
      <p>When a substance is heated, its particles gain kinetic energy. They move or vibrate faster. This increase in particle motion explains thermal expansion, evaporation, boiling, gas pressure, and change of state.</p>
    `,

    "Thermal Expansion": `
      <h2>Chapter 2: Thermal Expansion and Change of State</h2>
      <h3>Thermal Expansion</h3>

      <p>When most substances are heated, their particles gain kinetic energy and move faster. The particles move slightly farther apart, so the size of the substance increases. This increase in size due to heating is called <b>thermal expansion</b>.</p>

      <p>When the same substance is cooled, its particles lose kinetic energy, move slowly, and come closer together. The size of the substance decreases. This is called contraction.</p>

      <h3>Expansion in Solids</h3>
      <p>Solids expand when heated and contract when cooled. Since particles in solids are tightly packed, the expansion is usually small but still important in real life.</p>

      <p>Examples include railway tracks, bridges, metal pipes, and overhead wires. Gaps are left in railway tracks and bridges to allow expansion during hot weather.</p>

      <h3>Expansion in Liquids</h3>
      <p>Liquids also expand when heated. Liquid expansion is used in thermometers, where mercury or alcohol rises in a narrow tube when temperature increases.</p>

      <h3>Expansion in Gases</h3>
      <p>Gases expand much more than solids and liquids because gas particles are far apart and move freely. When heated, gas particles move faster and occupy more space.</p>

      <h3>Daily Life Importance</h3>
      <ul>
        <li>Expansion gaps are left in bridges and railway tracks.</li>
        <li>Electric wires sag more in summer because they expand.</li>
        <li>Thermometers work due to expansion of liquid.</li>
        <li>Hot air balloons rise because heated air expands and becomes less dense.</li>
      </ul>
    `,

    "Evaporation": `
      <h2>Chapter 2: Thermal Expansion and Change of State</h2>
      <h3>Evaporation</h3>

      <p>Evaporation is the process in which a liquid changes into vapour from its surface at any temperature. Unlike boiling, evaporation does not need the whole liquid to reach its boiling point.</p>

      <p>In a liquid, particles have different kinetic energies. Some particles at the surface have enough energy to escape into the air as vapour. When these high-energy particles leave, the average kinetic energy of the remaining liquid decreases. This causes cooling.</p>

      <h3>Why Evaporation Causes Cooling</h3>
      <p>When sweat evaporates from our skin, it takes heat from the body. This cools the body. Similarly, water in an earthen pot becomes cool because water slowly evaporates from its surface.</p>

      <h3>Factors Affecting Evaporation</h3>
      <ul>
        <li><b>Temperature:</b> Higher temperature increases evaporation.</li>
        <li><b>Surface area:</b> Larger surface area increases evaporation.</li>
        <li><b>Wind speed:</b> Moving air removes vapour and increases evaporation.</li>
        <li><b>Humidity:</b> Less humidity increases evaporation, while high humidity slows it down.</li>
      </ul>

      <h3>Examples</h3>
      <ul>
        <li>Wet clothes dry faster in sunlight.</li>
        <li>Water kept in a saucer evaporates faster than water kept in a glass.</li>
        <li>Sweating cools the human body.</li>
        <li>Perfume spreads because it evaporates easily.</li>
      </ul>
    `,

    "Latent Heat": `
      <h2>Chapter 2: Thermal Expansion and Change of State</h2>
      <h3>Latent Heat</h3>

      <p>When a substance changes its state, heat is absorbed or released without any change in temperature. This hidden heat is called <b>latent heat</b>.</p>

      <p>For example, when ice melts, it absorbs heat but its temperature remains 0 degree Celsius until all the ice has melted. Similarly, when water boils, it absorbs heat but its temperature remains 100 degree Celsius until all water changes into steam.</p>

      <div class="formula-box">Q = mL</div>

      <p>Here, <b>Q</b> is heat energy, <b>m</b> is mass, and <b>L</b> is latent heat.</p>

      <h3>Latent Heat of Fusion</h3>
      <p>The heat required to change a solid into liquid at its melting point without change in temperature is called latent heat of fusion.</p>

      <h3>Latent Heat of Vaporization</h3>
      <p>The heat required to change a liquid into vapour at its boiling point without change in temperature is called latent heat of vaporization.</p>

      <h3>Important Idea</h3>
      <p>During change of state, heat energy is used to overcome the forces between particles instead of increasing the temperature.</p>

      <h3>Examples</h3>
      <ul>
        <li>Ice cools drinks effectively because it absorbs latent heat while melting.</li>
        <li>Steam can cause severe burns because it releases latent heat when it condenses.</li>
        <li>Sweating cools the body because evaporation requires heat.</li>
      </ul>
    `,

    "Pressure Exerted by Gas Particles": `
      <h2>Chapter 2: Thermal Expansion and Change of State</h2>
      <h3>Pressure Exerted by Gas Particles</h3>

      <p>Gas particles are always moving randomly in all directions. They collide with each other and with the walls of their container. These collisions exert force on the walls. The force per unit area is called <b>pressure</b>.</p>

      <div class="formula-box">Pressure = Force / Area</div>

      <p>The pressure of a gas depends on the motion of its particles. If particles move faster or collide more often with the container walls, pressure increases.</p>

      <h3>Effect of Temperature</h3>
      <p>When a gas is heated, its particles gain kinetic energy and move faster. They collide with the container walls more forcefully and more frequently. If volume remains constant, pressure increases.</p>

      <h3>Effect of Volume</h3>
      <p>If the volume of a gas is decreased, the particles have less space to move. They collide with the walls more often, so pressure increases.</p>

      <h3>Effect of Number of Particles</h3>
      <p>If more gas particles are added to a container, more collisions occur with the walls. This increases the gas pressure.</p>

      <h3>Examples</h3>
      <ul>
        <li>A balloon expands when more air is added.</li>
        <li>A tyre becomes harder when more air is pumped into it.</li>
        <li>Aerosol cans can burst if heated because gas pressure increases.</li>
        <li>Pressure cookers work because pressure affects boiling and cooking.</li>
      </ul>
    `,

    "Superconductivity": `
      <h2>Chapter 2: Thermal Expansion and Change of State</h2>
      <h3>Superconductivity</h3>

      <p>Normally, every conductor offers some resistance to the flow of electric current. Due to this resistance, some electrical energy is lost as heat.</p>

      <p>However, some materials show a special behaviour at very low temperatures. Their electrical resistance suddenly becomes almost zero. This phenomenon is called <b>superconductivity</b>.</p>

      <h3>Critical Temperature</h3>
      <p>The temperature below which a material becomes superconducting is called its <b>critical temperature</b>. Different materials have different critical temperatures.</p>

      <h3>Main Features</h3>
      <ul>
        <li>Electrical resistance becomes nearly zero.</li>
        <li>Current can flow without energy loss.</li>
        <li>Strong magnetic effects can be produced.</li>
        <li>Superconductors usually need very low temperatures.</li>
      </ul>

      <h3>Applications</h3>
      <ul>
        <li>MRI machines in hospitals</li>
        <li>Powerful electromagnets</li>
        <li>Maglev trains</li>
        <li>Particle accelerators</li>
        <li>Future low-loss power transmission systems</li>
      </ul>

      <p>Superconductivity is important because it can help save energy and produce very strong magnetic fields for modern technology.</p>
    `
  };

  function renderPhysicsChapter2Flow(chapter){
    const topic = state.selectedTopic || "Kinetic Theory of Matter";
    const html = PHYSICS_CH2_CONTENT[topic];

    if(!html) return null;

    return `
      <div class="digital-book-area physics-ch2-flow-area">
        <div class="digital-book-head">
          <strong>Physics Digital Book</strong>
          <span>Chapter 2</span>
        </div>
        <article class="digital-book-text physics-ch2-flow-text">
          ${html}
        </article>
      </div>
    `;
  }

  const oldPhysicsRenderCh2Flow = renderDigitalBookContent;

  renderDigitalBookContent = function(chapter){
    if(state.selectedSubject === "physics" && chapter && chapter.title === "Chapter 2: Thermal Expansion and Change of State"){
      const rendered = renderPhysicsChapter2Flow(chapter);
      if(rendered) return rendered;
    }
    return oldPhysicsRenderCh2Flow ? oldPhysicsRenderCh2Flow(chapter) : "";
  };

  window.PHYSICS_CH2_CONTENT = PHYSICS_CH2_CONTENT;
})();

// PHYSICS_CHAPTER_3_FLOW_CONTENT_V1
(function(){
  const PHYSICS_CH3_CONTENT = {
    "Wave Motion": `
      <h2>Chapter 3: Waves</h2>
      <h3>Wave Motion</h3>

      <p>A wave is a disturbance that transfers energy from one place to another without transferring matter permanently. When a wave moves, particles of the medium may vibrate, but they do not travel with the wave from the source to the final point.</p>

      <p>For example, when a stone is dropped into water, circular ripples move outward. The water particles move up and down, but they do not move outward with the ripples. Energy is transferred through the water.</p>

      <h3>Main Idea</h3>
      <p>Wave motion is a way of transferring energy. It can occur in water, air, strings, springs, and even through empty space in the case of electromagnetic waves.</p>

      <h3>Examples of Waves</h3>
      <ul>
        <li>Water waves on the surface of water</li>
        <li>Sound waves travelling through air</li>
        <li>Light waves coming from the Sun</li>
        <li>Waves on a rope or spring</li>
        <li>Seismic waves during earthquakes</li>
      </ul>

      <h3>Important Point</h3>
      <p>In wave motion, <b>energy moves forward</b>, but the particles of the medium only vibrate about their mean positions.</p>
    `,

    "Wave Propagation": `
      <h2>Chapter 3: Waves</h2>
      <h3>Wave Propagation</h3>

      <p>Wave propagation means the movement or spreading of a wave through a medium or through space. When a disturbance is produced at one point, it passes energy to nearby particles, and the disturbance continues to move forward.</p>

      <p>In a mechanical wave, particles of the medium pass energy to neighbouring particles. This is how sound travels through air and waves travel through water or a string.</p>

      <h3>Mechanical Wave Propagation</h3>
      <p>Mechanical waves need a material medium. They cannot travel through vacuum. Sound is a mechanical wave, so sound cannot travel in empty space.</p>

      <h3>Electromagnetic Wave Propagation</h3>
      <p>Electromagnetic waves do not need a material medium. They can travel through vacuum. Light from the Sun reaches Earth through space because light is an electromagnetic wave.</p>

      <h3>Important Examples</h3>
      <ul>
        <li>Sound propagates through air by compressions and rarefactions.</li>
        <li>Water waves propagate through water surface.</li>
        <li>Light propagates through vacuum and transparent materials.</li>
      </ul>
    `,

    "Characteristic Wave Parameters": `
      <h2>Chapter 3: Waves</h2>
      <h3>Characteristic Wave Parameters</h3>

      <p>To describe a wave properly, we use some important quantities called wave parameters. These include amplitude, wavelength, frequency, time period, and wave speed.</p>

      <h3>Amplitude</h3>
      <p>Amplitude is the maximum displacement of a particle from its mean position. A wave with greater amplitude carries more energy.</p>

      <h3>Wavelength</h3>
      <p>Wavelength is the distance between two consecutive points of a wave that are in the same phase, such as crest to crest or compression to compression. It is represented by the Greek letter lambda, <b>λ</b>.</p>

      <h3>Frequency</h3>
      <p>Frequency is the number of complete waves passing a point in one second. Its SI unit is hertz, written as <b>Hz</b>.</p>

      <h3>Time Period</h3>
      <p>Time period is the time taken to complete one vibration or one wave. It is represented by <b>T</b>.</p>

      <div class="formula-box">f = 1 / T</div>

      <h3>Wave Speed</h3>
      <p>Wave speed is the distance travelled by a wave in one second. It depends on the medium and type of wave.</p>

      <div class="formula-box">v = fλ</div>

      <p>This formula is very important for numerical questions. Here, <b>v</b> is wave speed, <b>f</b> is frequency, and <b>λ</b> is wavelength.</p>
    `,

    "Waves and their Types": `
      <h2>Chapter 3: Waves</h2>
      <h3>Waves and their Types</h3>

      <p>Waves can be classified in different ways. The two most common classifications are based on the need for a medium and based on the direction of particle vibration.</p>

      <h3>On the Basis of Medium</h3>
      <ul>
        <li><b>Mechanical waves:</b> These waves need a material medium to travel.</li>
        <li><b>Electromagnetic waves:</b> These waves do not need a material medium and can travel through vacuum.</li>
      </ul>

      <h3>On the Basis of Propagation</h3>
      <ul>
        <li><b>Transverse waves:</b> Particles vibrate perpendicular to the direction of wave motion.</li>
        <li><b>Longitudinal waves:</b> Particles vibrate parallel to the direction of wave motion.</li>
      </ul>

      <h3>Examples</h3>
      <ul>
        <li>Water waves are mainly transverse at the surface.</li>
        <li>Sound waves in air are longitudinal.</li>
        <li>Light waves are electromagnetic and transverse.</li>
      </ul>

      <p>Understanding wave types is important because different waves behave differently and are used in different technologies.</p>
    `,

    "Types of Waves On the Basis of Medium": `
      <h2>Chapter 3: Waves</h2>
      <h3>Types of Waves On the Basis of Medium</h3>

      <p>On the basis of medium, waves are divided into two main types: mechanical waves and electromagnetic waves.</p>

      <h3>Mechanical Waves</h3>
      <p>Mechanical waves need a material medium for propagation. The medium can be solid, liquid, or gas. The particles of the medium vibrate and transfer energy from one point to another.</p>

      <h3>Examples of Mechanical Waves</h3>
      <ul>
        <li>Sound waves in air</li>
        <li>Water waves</li>
        <li>Waves on a rope</li>
        <li>Seismic waves</li>
      </ul>

      <p>Mechanical waves cannot travel through vacuum because there are no particles to transfer the energy.</p>

      <h3>Electromagnetic Waves</h3>
      <p>Electromagnetic waves do not need a material medium. They can travel through vacuum. They are produced by changing electric and magnetic fields.</p>

      <h3>Examples of Electromagnetic Waves</h3>
      <ul>
        <li>Radio waves</li>
        <li>Microwaves</li>
        <li>Infrared radiation</li>
        <li>Visible light</li>
        <li>Ultraviolet rays</li>
        <li>X-rays</li>
        <li>Gamma rays</li>
      </ul>

      <p>The most common example is sunlight, which reaches Earth through the vacuum of space.</p>
    `,

    "Types of Waves On the Basis of Propagation": `
      <h2>Chapter 3: Waves</h2>
      <h3>Types of Waves On the Basis of Propagation</h3>

      <p>On the basis of the direction in which particles vibrate, waves are divided into transverse waves and longitudinal waves.</p>

      <h3>Transverse Waves</h3>
      <p>In transverse waves, particles of the medium vibrate perpendicular to the direction of wave propagation.</p>

      <p>A transverse wave has crests and troughs. The highest point is called the crest, and the lowest point is called the trough.</p>

      <h3>Examples of Transverse Waves</h3>
      <ul>
        <li>Waves on a stretched string</li>
        <li>Water surface waves</li>
        <li>Light waves</li>
      </ul>

      <h3>Longitudinal Waves</h3>
      <p>In longitudinal waves, particles of the medium vibrate parallel to the direction of wave propagation.</p>

      <p>A longitudinal wave has compressions and rarefactions. Compression is the region where particles are close together. Rarefaction is the region where particles are spread apart.</p>

      <h3>Examples of Longitudinal Waves</h3>
      <ul>
        <li>Sound waves in air</li>
        <li>Waves in a spring when pushed and pulled</li>
      </ul>

      <p>Sound waves are one of the most important examples of longitudinal waves.</p>
    `,

    "Wave Characteristics": `
      <h2>Chapter 3: Waves</h2>
      <h3>Wave Characteristics</h3>

      <p>Waves have certain characteristics that help us understand their behaviour. These characteristics include amplitude, wavelength, frequency, time period, and speed.</p>

      <h3>Amplitude and Energy</h3>
      <p>Amplitude shows how far particles move from their mean position. A larger amplitude means the wave carries more energy.</p>

      <h3>Frequency and Pitch</h3>
      <p>Frequency is the number of vibrations per second. In sound waves, higher frequency means higher pitch.</p>

      <h3>Wavelength and Wave Speed</h3>
      <p>Wavelength is the distance between two consecutive similar points of a wave. Wave speed is related to wavelength and frequency.</p>

      <div class="formula-box">v = fλ</div>

      <h3>Phase</h3>
      <p>Two points on a wave are said to be in the same phase if they are moving in the same way at the same time. For example, two consecutive crests are in the same phase.</p>

      <p>These characteristics allow us to compare different waves and solve numerical problems.</p>
    `,

    "Properties of Waves": `
      <h2>Chapter 3: Waves</h2>
      <h3>Properties of Waves</h3>

      <p>Waves show several important properties when they meet surfaces, enter new media, or pass around obstacles. The main properties are reflection, refraction, diffraction, and interference.</p>

      <h3>Reflection</h3>
      <p>Reflection is the bouncing back of a wave when it strikes a surface. Echo is an example of reflection of sound.</p>

      <h3>Refraction</h3>
      <p>Refraction is the bending of a wave when it enters another medium and its speed changes. Light bends when it passes from air into glass or water.</p>

      <h3>Diffraction</h3>
      <p>Diffraction is the spreading of waves when they pass through a gap or around an obstacle. Sound can be heard around corners because of diffraction.</p>

      <h3>Interference</h3>
      <p>Interference occurs when two waves meet and combine. They may strengthen or cancel each other depending on how they meet.</p>

      <p>These properties are important in sound, light, water waves, communication, and many technologies.</p>
    `,

    "Tsunamis": `
      <h2>Chapter 3: Waves</h2>
      <h3>Tsunamis</h3>

      <p>A tsunami is a series of very large sea waves caused by a sudden disturbance under the ocean. The most common cause is an underwater earthquake, but tsunamis can also be caused by volcanic eruptions, landslides, or meteor impacts.</p>

      <p>Unlike ordinary sea waves produced by wind, tsunamis carry a huge amount of energy. In deep water, they may not look very high, but they can travel very fast across the ocean.</p>

      <h3>How Tsunamis Form</h3>
      <p>When the sea floor suddenly moves upward or downward, a large amount of water is displaced. This disturbance creates waves that spread outward in all directions.</p>

      <h3>Near the Coast</h3>
      <p>As a tsunami approaches shallow water near the coast, its speed decreases but its height increases greatly. This can cause destructive flooding and damage.</p>

      <h3>Safety and Warning</h3>
      <ul>
        <li>Move to higher ground if a tsunami warning is issued.</li>
        <li>Do not go near the shore to watch the waves.</li>
        <li>After a strong earthquake near the sea, leave coastal areas quickly.</li>
        <li>Tsunami warning systems help save lives.</li>
      </ul>

      <p>Tsunamis show how wave energy can travel over very long distances and produce powerful effects.</p>
    `
  };

  function renderPhysicsChapter3Flow(chapter){
    const topic = state.selectedTopic || "Wave Motion";
    const html = PHYSICS_CH3_CONTENT[topic];

    if(!html) return null;

    return `
      <div class="digital-book-area physics-ch3-flow-area">
        <div class="digital-book-head">
          <strong>Physics Digital Book</strong>
          <span>Chapter 3</span>
        </div>
        <article class="digital-book-text physics-ch3-flow-text">
          ${html}
        </article>
      </div>
    `;
  }

  const oldPhysicsRenderCh3Flow = renderDigitalBookContent;

  renderDigitalBookContent = function(chapter){
    if(state.selectedSubject === "physics" && chapter && chapter.title === "Chapter 3: Waves"){
      const rendered = renderPhysicsChapter3Flow(chapter);
      if(rendered) return rendered;
    }
    return oldPhysicsRenderCh3Flow ? oldPhysicsRenderCh3Flow(chapter) : "";
  };

  window.PHYSICS_CH3_CONTENT = PHYSICS_CH3_CONTENT;
})();

// PHYSICS_CHAPTER_4_5_FLOW_CONTENT_V1
(function(){
  const PHYSICS_CH4_CONTENT = {
    "Source of Sound": `
      <h2>Chapter 4: Sound</h2>
      <h3>Source of Sound</h3>

      <p>Sound is produced when an object vibrates. A vibrating object makes the particles of the surrounding medium vibrate, and these vibrations travel as sound waves.</p>

      <p>For example, when a tuning fork is struck, its prongs vibrate and produce sound. When a drum is beaten, its membrane vibrates. When we speak, our vocal cords vibrate and produce sound.</p>

      <h3>Important Examples</h3>
      <ul>
        <li>Vocal cords produce sound by vibration.</li>
        <li>Speakers produce sound by vibrating their cone.</li>
        <li>Musical instruments produce sound by vibrating strings, air columns, or membranes.</li>
        <li>A bell produces sound because its metal body vibrates.</li>
      </ul>

      <p>If vibration stops, sound also stops. So vibration is the basic source of sound.</p>
    `,

    "Nature of Sound Waves": `
      <h2>Chapter 4: Sound</h2>
      <h3>Nature of Sound Waves</h3>

      <p>Sound is a mechanical wave, which means it needs a material medium to travel. Sound cannot travel through vacuum because there are no particles to transfer vibrations.</p>

      <p>Sound waves are longitudinal waves. In a longitudinal wave, particles of the medium vibrate parallel to the direction of wave motion.</p>

      <h3>Compressions and Rarefactions</h3>
      <p>When sound travels through air, it creates regions where air particles are close together and regions where particles are spread apart.</p>

      <ul>
        <li><b>Compression:</b> Region of high pressure where particles are close together.</li>
        <li><b>Rarefaction:</b> Region of low pressure where particles are far apart.</li>
      </ul>

      <p>Sound travels by the continuous formation of compressions and rarefactions in the medium.</p>
    `,

    "Ultrasound": `
      <h2>Chapter 4: Sound</h2>
      <h3>Ultrasound</h3>

      <p>Ultrasound is sound with frequency greater than the upper limit of human hearing. Humans normally cannot hear frequencies above about 20,000 Hz.</p>

      <p>Although we cannot hear ultrasound, it is very useful in science, medicine, and technology.</p>

      <h3>Uses of Ultrasound</h3>
      <ul>
        <li><b>Medical imaging:</b> Ultrasound is used to see inside the human body.</li>
        <li><b>Pregnancy scans:</b> It is used to observe the growth of a baby before birth.</li>
        <li><b>Cleaning:</b> Ultrasound can clean delicate objects such as jewellery and instruments.</li>
        <li><b>Flaw detection:</b> It can detect cracks inside metal blocks.</li>
        <li><b>Navigation:</b> Bats and dolphins use ultrasound for locating objects.</li>
      </ul>

      <p>Ultrasound is useful because it can travel through materials and reflect from boundaries.</p>
    `,

    "Infrasound": `
      <h2>Chapter 4: Sound</h2>
      <h3>Infrasound</h3>

      <p>Infrasound is sound with frequency lower than the lower limit of human hearing. Humans normally cannot hear frequencies below about 20 Hz.</p>

      <p>Infrasound is produced by many natural events and some large machines. Even though we cannot hear it, it can travel long distances.</p>

      <h3>Sources of Infrasound</h3>
      <ul>
        <li>Earthquakes</li>
        <li>Volcanic eruptions</li>
        <li>Ocean waves</li>
        <li>Storms and thunder</li>
        <li>Large animals such as elephants</li>
      </ul>

      <h3>Uses</h3>
      <p>Infrasound can be used for monitoring earthquakes, volcanoes, storms, and explosions. Some animals use infrasound for long-distance communication.</p>
    `,

    "Characteristics of Sound Waves": `
      <h2>Chapter 4: Sound</h2>
      <h3>Characteristics of Sound Waves</h3>

      <p>Sound waves have different characteristics that help us describe and compare sounds. The main characteristics are pitch, loudness, and quality.</p>

      <h3>Pitch</h3>
      <p>Pitch depends on frequency. A high-frequency sound has a high pitch, while a low-frequency sound has a low pitch.</p>

      <h3>Loudness</h3>
      <p>Loudness depends on amplitude. A sound with greater amplitude is louder because it carries more energy.</p>

      <h3>Quality</h3>
      <p>Quality, also called timbre, helps us distinguish between sounds produced by different sources even if they have the same pitch and loudness.</p>

      <h3>Example</h3>
      <p>A flute and a violin may play the same note, but we can still identify them because their sound quality is different.</p>
    `,

    "Analysing Sound Waves": `
      <h2>Chapter 4: Sound</h2>
      <h3>Analysing Sound Waves</h3>

      <p>Sound waves can be analysed by studying their waveforms. A waveform shows how pressure or displacement changes with time.</p>

      <p>The shape of the waveform gives information about the sound. A larger amplitude means louder sound. More waves per second means higher frequency and higher pitch.</p>

      <h3>Waveform Features</h3>
      <ul>
        <li><b>Amplitude:</b> Shows loudness of sound.</li>
        <li><b>Frequency:</b> Shows pitch of sound.</li>
        <li><b>Wavelength:</b> Distance between similar points of the wave.</li>
        <li><b>Time period:</b> Time for one complete vibration.</li>
      </ul>

      <p>In laboratories, devices such as oscilloscopes can be used to display and analyse sound signals.</p>
    `,

    "Speed of Sound": `
      <h2>Chapter 4: Sound</h2>
      <h3>Speed of Sound</h3>

      <p>The speed of sound is the distance travelled by sound in one second. Sound speed depends on the medium and temperature.</p>

      <div class="formula-box">Speed = Distance / Time</div>

      <p>Sound travels fastest in solids, slower in liquids, and slowest in gases. This is because particles in solids are closer together and transfer vibrations more quickly.</p>

      <h3>Effect of Temperature</h3>
      <p>In air, the speed of sound increases when temperature increases. At higher temperature, air particles move faster and pass vibrations more quickly.</p>

      <h3>Important Order</h3>
      <ul>
        <li>Fastest: solids</li>
        <li>Medium: liquids</li>
        <li>Slowest: gases</li>
      </ul>
    `,

    "Noise": `
      <h2>Chapter 4: Sound</h2>
      <h3>Noise</h3>

      <p>Noise is unwanted, unpleasant, or disturbing sound. Sounds from traffic, machines, loudspeakers, construction work, and factories can become noise if they disturb people.</p>

      <h3>Effects of Noise Pollution</h3>
      <ul>
        <li>Headache and stress</li>
        <li>Loss of concentration</li>
        <li>Sleep disturbance</li>
        <li>Hearing problems</li>
        <li>High blood pressure in severe cases</li>
      </ul>

      <h3>Control of Noise</h3>
      <ul>
        <li>Use silencers in vehicles and machines.</li>
        <li>Plant trees near roads and buildings.</li>
        <li>Use soundproof materials in rooms.</li>
        <li>Avoid unnecessary loudspeakers and horns.</li>
        <li>Keep factories away from residential areas.</li>
      </ul>
    `,

    "Reflection, Refraction and Diffraction of Sound Waves": `
      <h2>Chapter 4: Sound</h2>
      <h3>Reflection, Refraction and Diffraction of Sound Waves</h3>

      <p>Sound waves show different behaviours when they meet surfaces, enter different media, or pass around obstacles.</p>

      <h3>Reflection of Sound</h3>
      <p>Reflection occurs when sound bounces back after striking a hard surface. Echo is an example of reflection of sound.</p>

      <h3>Refraction of Sound</h3>
      <p>Refraction is the bending of sound waves when they pass through regions where their speed changes. This can happen due to temperature differences in air.</p>

      <h3>Diffraction of Sound</h3>
      <p>Diffraction is the bending or spreading of sound waves around obstacles and through openings. Because of diffraction, we can hear sound around corners.</p>

      <p>These properties explain many daily life sound effects and are important in designing halls, rooms, and sound systems.</p>
    `,

    "Echo": `
      <h2>Chapter 4: Sound</h2>
      <h3>Echo</h3>

      <p>Echo is the repetition of sound caused by reflection from a distant surface. When sound waves strike a large hard surface, they reflect back and may be heard again.</p>

      <p>For a clear echo, the reflected sound must reach the ear after a small time gap. If the reflecting surface is too close, the reflected sound mixes with the original sound and no separate echo is heard.</p>

      <h3>Uses of Echo</h3>
      <ul>
        <li>Measuring distance</li>
        <li>SONAR systems</li>
        <li>Depth measurement in oceans</li>
        <li>Navigation by bats and dolphins</li>
      </ul>

      <p>Echo is a useful example of reflection of sound.</p>
    `,

    "Acoustics": `
      <h2>Chapter 4: Sound</h2>
      <h3>Acoustics</h3>

      <p>Acoustics is the study of sound and its behaviour in rooms, halls, auditoriums, and other spaces.</p>

      <p>A hall with good acoustics allows sound to be heard clearly by everyone. If there is too much reflection, sound may overlap and become unclear. If there is too much absorption, sound may become weak.</p>

      <h3>Good Acoustic Design</h3>
      <ul>
        <li>Use proper shape of walls and ceiling.</li>
        <li>Use sound absorbing materials where needed.</li>
        <li>Avoid excessive echo.</li>
        <li>Use proper speaker placement.</li>
        <li>Control outside noise.</li>
      </ul>

      <p>Acoustics is important in classrooms, mosques, cinemas, lecture halls, and concert halls.</p>
    `,

    "Human Hearing System": `
      <h2>Chapter 4: Sound</h2>
      <h3>Human Hearing System</h3>

      <p>The human ear detects sound waves and converts them into nerve signals that are sent to the brain. The brain interprets these signals as sound.</p>

      <h3>Outer Ear</h3>
      <p>The outer ear collects sound waves and directs them into the ear canal. These waves reach the eardrum.</p>

      <h3>Middle Ear</h3>
      <p>The eardrum vibrates when sound waves strike it. These vibrations are passed through small bones in the middle ear. These bones amplify the vibrations.</p>

      <h3>Inner Ear</h3>
      <p>The vibrations reach the cochlea in the inner ear. The cochlea converts vibrations into electrical signals. These signals travel to the brain through the auditory nerve.</p>

      <h3>Important Care</h3>
      <ul>
        <li>Avoid very loud sounds.</li>
        <li>Do not put sharp objects into the ear.</li>
        <li>Use ear protection in noisy areas.</li>
      </ul>
    `
  };

  const PHYSICS_CH5_CONTENT = {
    "Reflection of Light": `
      <h2>Chapter 5: Optics</h2>
      <h3>Reflection of Light</h3>

      <p>Reflection is the bouncing back of light when it strikes a surface. Smooth and shiny surfaces such as mirrors reflect light clearly.</p>

      <h3>Laws of Reflection</h3>
      <ul>
        <li>The incident ray, reflected ray, and normal all lie in the same plane.</li>
        <li>The angle of incidence is equal to the angle of reflection.</li>
      </ul>

      <p>The normal is an imaginary line drawn perpendicular to the reflecting surface at the point where the incident ray strikes.</p>

      <h3>Regular and Irregular Reflection</h3>
      <p>Regular reflection occurs from smooth surfaces and forms clear images. Irregular reflection occurs from rough surfaces and scatters light in different directions.</p>

      <p>Reflection is used in mirrors, periscopes, optical instruments, and many daily life applications.</p>
    `,

    "Refraction of Light": `
      <h2>Chapter 5: Optics</h2>
      <h3>Refraction of Light</h3>

      <p>Refraction is the bending of light when it passes from one transparent medium into another. It happens because the speed of light changes in different media.</p>

      <p>For example, when light travels from air into glass or water, it slows down and bends toward the normal. When it travels from glass or water into air, it speeds up and bends away from the normal.</p>

      <h3>Examples of Refraction</h3>
      <ul>
        <li>A pencil appears bent when placed in water.</li>
        <li>A swimming pool appears shallower than it really is.</li>
        <li>Lenses form images due to refraction.</li>
        <li>Atmospheric refraction changes the apparent position of stars.</li>
      </ul>

      <h3>Refractive Index</h3>
      <p>Refractive index tells how much a medium slows down light. A higher refractive index means light travels slower in that medium.</p>
    `,

    "Total Internal Reflection": `
      <h2>Chapter 5: Optics</h2>
      <h3>Total Internal Reflection</h3>

      <p>Total internal reflection occurs when light travelling from a denser medium to a rarer medium is completely reflected back into the denser medium.</p>

      <p>This happens only when the angle of incidence is greater than the critical angle.</p>

      <h3>Conditions</h3>
      <ul>
        <li>Light must travel from denser medium to rarer medium.</li>
        <li>The angle of incidence must be greater than the critical angle.</li>
      </ul>

      <h3>Applications</h3>
      <ul>
        <li>Optical fibres</li>
        <li>Endoscopes used in medicine</li>
        <li>Prisms in binoculars and periscopes</li>
        <li>Communication through fibre optic cables</li>
      </ul>

      <p>Total internal reflection allows light to travel inside optical fibres with very little loss.</p>
    `,

    "Thin Lenses": `
      <h2>Chapter 5: Optics</h2>
      <h3>Thin Lenses</h3>

      <p>A lens is a transparent optical device that bends light by refraction. A thin lens has small thickness compared with its focal length.</p>

      <h3>Types of Lenses</h3>
      <ul>
        <li><b>Convex lens:</b> Thicker at the centre and thinner at the edges. It converges light rays.</li>
        <li><b>Concave lens:</b> Thinner at the centre and thicker at the edges. It diverges light rays.</li>
      </ul>

      <h3>Important Terms</h3>
      <ul>
        <li><b>Principal axis:</b> The main line passing through the centre of the lens.</li>
        <li><b>Optical centre:</b> The centre point of the lens.</li>
        <li><b>Focus:</b> Point where parallel rays meet or appear to come from.</li>
        <li><b>Focal length:</b> Distance between optical centre and focus.</li>
      </ul>

      <div class="formula-box">1/f = 1/do + 1/di</div>

      <p>This lens formula relates focal length, object distance, and image distance.</p>
    `,

    "Application of Lenses": `
      <h2>Chapter 5: Optics</h2>
      <h3>Application of Lenses</h3>

      <p>Lenses are used in many optical devices because they can form images by bending light.</p>

      <h3>Common Uses</h3>
      <ul>
        <li><b>Spectacles:</b> Correct vision defects.</li>
        <li><b>Camera:</b> Focuses light to form an image on a sensor or film.</li>
        <li><b>Microscope:</b> Magnifies very small objects.</li>
        <li><b>Telescope:</b> Helps see distant objects clearly.</li>
        <li><b>Projector:</b> Produces enlarged images on a screen.</li>
        <li><b>Magnifying glass:</b> Produces a magnified image of nearby objects.</li>
      </ul>

      <h3>Vision Correction</h3>
      <p>Convex and concave lenses are used in spectacles to correct defects such as long-sightedness and short-sightedness.</p>
    `,

    "Visible Spectrum": `
      <h2>Chapter 5: Optics</h2>
      <h3>Visible Spectrum</h3>

      <p>The visible spectrum is the part of the electromagnetic spectrum that can be detected by the human eye.</p>

      <p>White light is made up of different colours. When white light passes through a prism, it splits into colours. This process is called dispersion.</p>

      <h3>Colours of Visible Spectrum</h3>
      <ul>
        <li>Violet</li>
        <li>Indigo</li>
        <li>Blue</li>
        <li>Green</li>
        <li>Yellow</li>
        <li>Orange</li>
        <li>Red</li>
      </ul>

      <p>Violet light has shorter wavelength and higher frequency than red light. Red light has longer wavelength and lower frequency.</p>
    `,

    "Human Eye and Colour Perception": `
      <h2>Chapter 5: Optics</h2>
      <h3>Human Eye and Colour Perception</h3>

      <p>The human eye is an optical instrument that forms images on the retina. Light enters the eye through the cornea and pupil, and the eye lens focuses the light on the retina.</p>

      <h3>Main Parts</h3>
      <ul>
        <li><b>Cornea:</b> Transparent front part that helps focus light.</li>
        <li><b>Iris:</b> Controls size of pupil.</li>
        <li><b>Pupil:</b> Opening through which light enters.</li>
        <li><b>Lens:</b> Focuses light on the retina.</li>
        <li><b>Retina:</b> Light-sensitive screen inside the eye.</li>
      </ul>

      <h3>Rods and Cones</h3>
      <p>Rods help us see in dim light. Cones help us see colours. The brain receives signals from the retina and interprets them as images.</p>

      <p>Colour perception depends on how different cones respond to different wavelengths of light.</p>
    `,

    "Gravitational Lensing": `
      <h2>Chapter 5: Optics</h2>
      <h3>Gravitational Lensing</h3>

      <p>Gravitational lensing is the bending of light due to the gravity of a massive object. According to modern physics, massive objects can curve space around them, and light follows this curved path.</p>

      <p>When light from a distant star or galaxy passes near a massive object, such as another galaxy or black hole, its path bends. This can make the distant object appear shifted, magnified, or distorted.</p>

      <h3>Importance</h3>
      <ul>
        <li>It helps astronomers study distant galaxies.</li>
        <li>It provides evidence that gravity affects light.</li>
        <li>It can help detect dark matter.</li>
      </ul>

      <p>Gravitational lensing is an advanced application of the behaviour of light.</p>
    `,

    "Acoustic Lenses": `
      <h2>Chapter 5: Optics</h2>
      <h3>Acoustic Lenses</h3>

      <p>An acoustic lens is a device that focuses sound waves in a way similar to how an optical lens focuses light waves.</p>

      <p>Sound waves can be controlled, focused, and directed using materials and shapes that change the path of sound.</p>

      <h3>Uses</h3>
      <ul>
        <li>Medical ultrasound imaging</li>
        <li>Sound focusing devices</li>
        <li>Underwater sound systems</li>
        <li>Acoustic research</li>
      </ul>

      <p>Acoustic lenses show that wave behaviour is not limited to light. Sound waves also show focusing, reflection, refraction, and diffraction.</p>
    `
  };

  function renderPhysicsFlowChapter(chapter, contentMap, chapterNumber){
    const topic = state.selectedTopic || Object.keys(contentMap)[0];
    const html = contentMap[topic];

    if(!html) return null;

    return `
      <div class="digital-book-area physics-ch45-flow-area">
        <div class="digital-book-head">
          <strong>Physics Digital Book</strong>
          <span>Chapter ${chapterNumber}</span>
        </div>
        <article class="digital-book-text physics-ch45-flow-text">
          ${html}
        </article>
      </div>
    `;
  }

  const oldPhysicsRenderCh45Flow = renderDigitalBookContent;

  renderDigitalBookContent = function(chapter){
    if(state.selectedSubject === "physics" && chapter && chapter.title === "Chapter 4: Sound"){
      const rendered = renderPhysicsFlowChapter(chapter, PHYSICS_CH4_CONTENT, 4);
      if(rendered) return rendered;
    }

    if(state.selectedSubject === "physics" && chapter && chapter.title === "Chapter 5: Optics"){
      const rendered = renderPhysicsFlowChapter(chapter, PHYSICS_CH5_CONTENT, 5);
      if(rendered) return rendered;
    }

    return oldPhysicsRenderCh45Flow ? oldPhysicsRenderCh45Flow(chapter) : "";
  };

  window.PHYSICS_CH4_CONTENT = PHYSICS_CH4_CONTENT;
  window.PHYSICS_CH5_CONTENT = PHYSICS_CH5_CONTENT;
})();

// PHYSICS_CHAPTER_6_7_FLOW_CONTENT_V1
(function(){
  const PHYSICS_CH6_CONTENT = {
    "Static Charge": `
      <h2>Chapter 6: Electrostatics</h2>
      <h3>Static Charge</h3>

      <p>Electrostatics is the branch of physics that deals with electric charges at rest. A body becomes charged when it gains or loses electrons.</p>

      <p>If a body gains electrons, it becomes negatively charged. If a body loses electrons, it becomes positively charged.</p>

      <h3>Types of Charges</h3>
      <ul>
        <li><b>Positive charge:</b> Produced when an object loses electrons.</li>
        <li><b>Negative charge:</b> Produced when an object gains electrons.</li>
      </ul>

      <h3>Basic Law of Charges</h3>
      <p>Like charges repel each other, while unlike charges attract each other.</p>

      <h3>Daily Life Examples</h3>
      <ul>
        <li>A plastic comb can attract small pieces of paper after rubbing with dry hair.</li>
        <li>A balloon rubbed with hair can stick to a wall.</li>
        <li>Clothes sometimes stick together after coming out of a dryer.</li>
      </ul>
    `,

    "Conductors and Insulators": `
      <h2>Chapter 6: Electrostatics</h2>
      <h3>Conductors and Insulators</h3>

      <p>Materials can be classified according to how easily electric charges move through them.</p>

      <h3>Conductors</h3>
      <p>Conductors are materials that allow electric charges to move easily. Metals are good conductors because they have free electrons.</p>

      <h3>Examples of Conductors</h3>
      <ul>
        <li>Copper</li>
        <li>Aluminium</li>
        <li>Iron</li>
        <li>Silver</li>
        <li>Graphite</li>
      </ul>

      <h3>Insulators</h3>
      <p>Insulators are materials that do not allow electric charges to move easily. Their electrons are tightly bound to atoms.</p>

      <h3>Examples of Insulators</h3>
      <ul>
        <li>Rubber</li>
        <li>Plastic</li>
        <li>Glass</li>
        <li>Wood</li>
        <li>Dry air</li>
      </ul>

      <p>Electrical wires are made of metal conductors covered with plastic insulation for safety.</p>
    `,

    "Charging and Discharging": `
      <h2>Chapter 6: Electrostatics</h2>
      <h3>Charging and Discharging</h3>

      <p>Charging means giving electric charge to an object. An object can be charged by friction, contact, or induction.</p>

      <h3>Charging by Friction</h3>
      <p>When two different materials are rubbed together, electrons may transfer from one material to the other. One object becomes positively charged and the other becomes negatively charged.</p>

      <h3>Charging by Contact</h3>
      <p>When a charged object touches an uncharged conductor, some charge is transferred to the conductor.</p>

      <h3>Charging by Induction</h3>
      <p>Charging by induction happens without direct contact. A charged body brought near a conductor causes separation of charges inside the conductor.</p>

      <h3>Discharging</h3>
      <p>Discharging is the sudden flow of charge from one object to another. Sparks and lightning are examples of electric discharge.</p>

      <p>Lightning occurs when a large charge difference develops between clouds or between a cloud and the ground.</p>
    `,

    "Electroscope": `
      <h2>Chapter 6: Electrostatics</h2>
      <h3>Electroscope</h3>

      <p>An electroscope is a simple device used to detect the presence of electric charge on an object.</p>

      <p>A common type is the gold leaf electroscope. It has a metal cap connected to a metal rod. At the lower end of the rod, two thin metal leaves are attached.</p>

      <h3>Working</h3>
      <p>When a charged object touches the metal cap, charge spreads through the rod and leaves. Both leaves get the same type of charge, so they repel each other and diverge.</p>

      <h3>Uses</h3>
      <ul>
        <li>To detect whether an object is charged.</li>
        <li>To compare the amount of charge.</li>
        <li>To test the type of charge by using a known charge.</li>
      </ul>

      <p>The greater the charge, the more the leaves diverge.</p>
    `,

    "Electric Field": `
      <h2>Chapter 6: Electrostatics</h2>
      <h3>Electric Field</h3>

      <p>An electric field is the region around a charged body where another charge experiences an electric force.</p>

      <div class="formula-box">E = F / q</div>

      <p>Here, <b>E</b> is electric field strength, <b>F</b> is force, and <b>q</b> is the test charge.</p>

      <h3>Direction of Electric Field</h3>
      <p>The direction of electric field is the direction in which a positive test charge would move.</p>

      <ul>
        <li>Field lines move away from positive charge.</li>
        <li>Field lines move toward negative charge.</li>
        <li>Closer field lines show a stronger electric field.</li>
      </ul>

      <p>Electric field helps explain attraction, repulsion, charging, lightning, and many electrostatic effects.</p>
    `,

    "Applications of Electrostatics": `
      <h2>Chapter 6: Electrostatics</h2>
      <h3>Applications of Electrostatics</h3>

      <p>Electrostatics is not only a theory. It has many useful applications in daily life, industry, and technology.</p>

      <h3>Photocopiers and Laser Printers</h3>
      <p>Photocopiers and laser printers use electrostatic charges to attract toner particles to selected areas of paper.</p>

      <h3>Spray Painting</h3>
      <p>In electrostatic spray painting, paint droplets are charged and attracted to the object being painted. This gives smooth coating and reduces waste.</p>

      <h3>Air Purifiers</h3>
      <p>Electrostatic air purifiers charge dust and smoke particles and then collect them on oppositely charged plates.</p>

      <h3>Industrial Use</h3>
      <p>Electrostatics is also used in removing dust from factory smoke, separating materials, and controlling pollution.</p>
    `,

    "Electrical Breakdown": `
      <h2>Chapter 6: Electrostatics</h2>
      <h3>Electrical Breakdown</h3>

      <p>Normally, air is an insulator. But when the electric field becomes very strong, air molecules can become ionized and air starts conducting electricity. This is called electrical breakdown.</p>

      <p>During electrical breakdown, charges move suddenly through air and may produce a spark.</p>

      <h3>Examples</h3>
      <ul>
        <li>Lightning during storms</li>
        <li>Sparks when touching a metal object after walking on a carpet</li>
        <li>Spark plugs in engines</li>
        <li>Electrical discharge in high-voltage equipment</li>
      </ul>

      <h3>Safety</h3>
      <p>Electrical breakdown can be dangerous in high-voltage systems. Proper insulation, grounding, and safe distance are used to avoid accidents.</p>
    `
  };

  const PHYSICS_CH7_CONTENT = {
    "Electric Current": `
      <h2>Chapter 7: Current Electricity</h2>
      <h3>Electric Current</h3>

      <p>Electric current is the rate of flow of electric charge through a conductor. When charges move through a wire, an electric current is produced.</p>

      <div class="formula-box">I = Q / t</div>

      <p>Here, <b>I</b> is current, <b>Q</b> is charge, and <b>t</b> is time. The SI unit of current is ampere, written as <b>A</b>.</p>

      <h3>Direction of Current</h3>
      <p>Conventional current flows from positive terminal to negative terminal of a battery. Electron flow is opposite to conventional current because electrons are negatively charged.</p>

      <h3>Conditions for Current</h3>
      <ul>
        <li>There must be a source of energy, such as a cell or battery.</li>
        <li>The circuit must be complete.</li>
        <li>There must be conducting path for charges to move.</li>
      </ul>
    `,

    "Alternating and Direct Current": `
      <h2>Chapter 7: Current Electricity</h2>
      <h3>Alternating and Direct Current</h3>

      <p>Electric current is of two main types: direct current and alternating current.</p>

      <h3>Direct Current</h3>
      <p>Direct current, or DC, flows in one direction only. Cells and batteries provide direct current.</p>

      <h3>Alternating Current</h3>
      <p>Alternating current, or AC, changes its direction again and again with time. Household electricity supply is usually AC.</p>

      <h3>Comparison</h3>
      <ul>
        <li>DC flows in one direction; AC changes direction.</li>
        <li>Batteries give DC; power stations usually supply AC.</li>
        <li>AC can be transmitted over long distances more easily using transformers.</li>
      </ul>

      <p>Both AC and DC are useful in different electrical devices.</p>
    `,

    "Potential Difference": `
      <h2>Chapter 7: Current Electricity</h2>
      <h3>Potential Difference</h3>

      <p>Potential difference is the work done in moving unit positive charge from one point to another in an electric circuit.</p>

      <div class="formula-box">V = W / Q</div>

      <p>Here, <b>V</b> is potential difference, <b>W</b> is work done, and <b>Q</b> is charge. The SI unit of potential difference is volt.</p>

      <h3>Voltmeter</h3>
      <p>A voltmeter is used to measure potential difference. It is connected in parallel with the component across which potential difference is measured.</p>

      <h3>Simple Idea</h3>
      <p>Potential difference acts like an electrical push that makes charges move through a circuit.</p>
    `,

    "EMF": `
      <h2>Chapter 7: Current Electricity</h2>
      <h3>EMF</h3>

      <p>EMF stands for electromotive force. It is the energy supplied by a source per unit charge to drive charges around a complete circuit.</p>

      <div class="formula-box">EMF = Energy supplied / Charge</div>

      <p>The SI unit of EMF is volt. A cell or battery provides EMF.</p>

      <h3>Difference between EMF and Potential Difference</h3>
      <p>EMF is related to the total energy supplied by the source, while potential difference is the energy used by charge between two points in a circuit.</p>

      <p>In simple circuits, EMF is the cause that produces current, while potential difference appears across circuit components.</p>
    `,

    "Ohm's Law": `
      <h2>Chapter 7: Current Electricity</h2>
      <h3>Ohm's Law</h3>

      <p>Ohm's law describes the relationship between current and potential difference in a conductor.</p>

      <p>It states that the current passing through a conductor is directly proportional to the potential difference across its ends, provided temperature and other physical conditions remain constant.</p>

      <div class="formula-box">V = IR</div>

      <p>Here, <b>V</b> is voltage, <b>I</b> is current, and <b>R</b> is resistance.</p>

      <h3>Meaning</h3>
      <p>If resistance is constant, increasing voltage increases current. If resistance increases, current decreases for the same voltage.</p>

      <h3>Graph</h3>
      <p>For an ohmic conductor, the voltage-current graph is a straight line passing through the origin.</p>
    `,

    "Resistance": `
      <h2>Chapter 7: Current Electricity</h2>
      <h3>Resistance</h3>

      <p>Resistance is the opposition offered by a conductor to the flow of electric current. It is measured in ohms, represented by the symbol Ω.</p>

      <div class="formula-box">R = V / I</div>

      <h3>Factors Affecting Resistance</h3>
      <ul>
        <li><b>Length:</b> Longer wire has greater resistance.</li>
        <li><b>Area:</b> Thicker wire has smaller resistance.</li>
        <li><b>Material:</b> Different materials have different resistance.</li>
        <li><b>Temperature:</b> Resistance of metals usually increases with temperature.</li>
      </ul>

      <p>Resistance is useful because it helps control current in circuits.</p>
    `,

    "Resistivity": `
      <h2>Chapter 7: Current Electricity</h2>
      <h3>Resistivity</h3>

      <p>Resistivity is a property of a material that tells how strongly it opposes electric current. It does not depend on the size or shape of the conductor, but it depends on the material.</p>

      <div class="formula-box">R = ρL / A</div>

      <p>Here, <b>R</b> is resistance, <b>ρ</b> is resistivity, <b>L</b> is length, and <b>A</b> is cross-sectional area.</p>

      <h3>Low and High Resistivity</h3>
      <ul>
        <li>Good conductors such as copper have low resistivity.</li>
        <li>Insulators such as rubber have high resistivity.</li>
        <li>Materials used in heating elements have relatively high resistivity.</li>
      </ul>

      <p>Resistivity helps us choose proper materials for wires, heaters, and insulators.</p>
    `,

    "Electrical Measuring Instruments": `
      <h2>Chapter 7: Current Electricity</h2>
      <h3>Electrical Measuring Instruments</h3>

      <p>Electrical measuring instruments are used to measure current, voltage, resistance, and other electrical quantities.</p>

      <h3>Ammeter</h3>
      <p>An ammeter measures electric current. It is connected in series with the circuit component.</p>

      <h3>Voltmeter</h3>
      <p>A voltmeter measures potential difference. It is connected in parallel with the component.</p>

      <h3>Galvanometer</h3>
      <p>A galvanometer detects small currents. It can be converted into an ammeter or voltmeter by using suitable resistors.</p>

      <h3>Multimeter</h3>
      <p>A multimeter can measure voltage, current, and resistance. It is useful in laboratories and electrical repair work.</p>
    `,

    "Experiment for Demonstration of Resistance": `
      <h2>Chapter 7: Current Electricity</h2>
      <h3>Experiment for Demonstration of Resistance</h3>

      <p>The resistance of a wire can be demonstrated by connecting a wire, cell, ammeter, voltmeter, and switch in a circuit.</p>

      <p>When current flows through the wire, the ammeter measures current and the voltmeter measures potential difference across the wire. The resistance can be calculated using Ohm's law.</p>

      <div class="formula-box">R = V / I</div>

      <h3>What the Experiment Shows</h3>
      <ul>
        <li>Increasing length of wire increases resistance.</li>
        <li>Increasing thickness of wire decreases resistance.</li>
        <li>Different materials have different resistance.</li>
        <li>Resistance controls the current in a circuit.</li>
      </ul>

      <p>This experiment helps understand how electrical devices and circuits control current.</p>
    `
  };

  function renderPhysicsFlowChapter67(chapter, contentMap, chapterNumber){
    const topic = state.selectedTopic || Object.keys(contentMap)[0];
    const html = contentMap[topic];

    if(!html) return null;

    return `
      <div class="digital-book-area physics-ch67-flow-area">
        <div class="digital-book-head">
          <strong>Physics Digital Book</strong>
          <span>Chapter ${chapterNumber}</span>
        </div>
        <article class="digital-book-text physics-ch67-flow-text">
          ${html}
        </article>
      </div>
    `;
  }

  const oldPhysicsRenderCh67Flow = renderDigitalBookContent;

  renderDigitalBookContent = function(chapter){
    if(state.selectedSubject === "physics" && chapter && chapter.title === "Chapter 6: Electrostatics"){
      const rendered = renderPhysicsFlowChapter67(chapter, PHYSICS_CH6_CONTENT, 6);
      if(rendered) return rendered;
    }

    if(state.selectedSubject === "physics" && chapter && chapter.title === "Chapter 7: Current Electricity"){
      const rendered = renderPhysicsFlowChapter67(chapter, PHYSICS_CH7_CONTENT, 7);
      if(rendered) return rendered;
    }

    return oldPhysicsRenderCh67Flow ? oldPhysicsRenderCh67Flow(chapter) : "";
  };

  window.PHYSICS_CH6_CONTENT = PHYSICS_CH6_CONTENT;
  window.PHYSICS_CH7_CONTENT = PHYSICS_CH7_CONTENT;
})();

// PHYSICS_CHAPTER_8_9_FLOW_CONTENT_V1
(function(){
  const PHYSICS_CH8_CONTENT = {
    "Circuit Elements and Diagram": `
      <h2>Chapter 8: Electric Circuits</h2>
      <h3>Circuit Elements and Diagram</h3>

      <p>An electric circuit is a closed path through which electric current flows. A simple circuit usually contains a source of electrical energy, connecting wires, a switch, and an electrical component such as a bulb or resistor.</p>

      <p>Instead of drawing real pictures of components, we use standard symbols in circuit diagrams. These symbols make circuits easier to draw, read, and understand.</p>

      <h3>Common Circuit Elements</h3>
      <ul>
        <li><b>Cell:</b> Provides electrical energy.</li>
        <li><b>Battery:</b> Combination of cells.</li>
        <li><b>Switch:</b> Opens or closes the circuit.</li>
        <li><b>Bulb:</b> Converts electrical energy into light and heat.</li>
        <li><b>Resistor:</b> Controls or limits current.</li>
        <li><b>Ammeter:</b> Measures current and is connected in series.</li>
        <li><b>Voltmeter:</b> Measures potential difference and is connected in parallel.</li>
      </ul>

      <p>A circuit must be closed for current to flow. If the path is broken, current stops flowing.</p>
    `,

    "Resistors": `
      <h2>Chapter 8: Electric Circuits</h2>
      <h3>Resistors</h3>

      <p>A resistor is an electrical component that opposes or limits the flow of electric current in a circuit. Resistance is measured in ohms, represented by the symbol Ω.</p>

      <p>Resistors are used to control current, divide voltage, protect components, and produce heat where needed.</p>

      <h3>Why Resistors Are Used</h3>
      <ul>
        <li>To reduce current in a circuit.</li>
        <li>To protect sensitive components.</li>
        <li>To control brightness of bulbs or LEDs.</li>
        <li>To divide voltage in circuits.</li>
        <li>To produce heat in heaters and irons.</li>
      </ul>

      <div class="formula-box">R = V / I</div>

      <p>Here, <b>R</b> is resistance, <b>V</b> is potential difference, and <b>I</b> is current.</p>
    `,

    "Types of Resistors": `
      <h2>Chapter 8: Electric Circuits</h2>
      <h3>Types of Resistors</h3>

      <p>Different circuits need different kinds of resistors. Some resistors have fixed resistance, while others can change their resistance.</p>

      <h3>Fixed Resistor</h3>
      <p>A fixed resistor has a constant resistance value. It is used when a circuit needs a definite resistance.</p>

      <h3>Variable Resistor</h3>
      <p>A variable resistor allows resistance to be changed. It is used for controlling current, such as in volume controls and dimmer circuits.</p>

      <h3>Thermistor</h3>
      <p>A thermistor is a resistor whose resistance changes with temperature. It is used in temperature sensors and protection circuits.</p>

      <h3>Light Dependent Resistor</h3>
      <p>An LDR changes resistance with light intensity. In bright light, its resistance decreases. In darkness, its resistance increases. It is used in automatic street lights and light sensors.</p>
    `,

    "Combination of Resistors": `
      <h2>Chapter 8: Electric Circuits</h2>
      <h3>Combination of Resistors</h3>

      <p>Resistors can be connected in two main ways: series combination and parallel combination.</p>

      <h3>Series Combination</h3>
      <p>In series, resistors are connected end to end, so the same current passes through each resistor. The total resistance is equal to the sum of all resistances.</p>

      <div class="formula-box">Rs = R1 + R2 + R3</div>

      <p>Series combination increases total resistance. If one component breaks, the whole circuit stops working.</p>

      <h3>Parallel Combination</h3>
      <p>In parallel, resistors are connected across the same two points, so each resistor has the same potential difference across it. Current divides into different branches.</p>

      <div class="formula-box">1/Rp = 1/R1 + 1/R2 + 1/R3</div>

      <p>Parallel combination decreases total resistance and gives more than one path for current. Household circuits are connected in parallel so appliances can work independently.</p>
    `,

    "Combination of EMF Sources": `
      <h2>Chapter 8: Electric Circuits</h2>
      <h3>Combination of EMF Sources</h3>

      <p>Cells or batteries are sources of EMF. They can be connected in series or parallel depending on the requirement of the circuit.</p>

      <h3>Cells in Series</h3>
      <p>When cells are connected in series, the positive terminal of one cell is connected to the negative terminal of the next cell. The total EMF increases.</p>

      <p>Series connection is used when higher voltage is required.</p>

      <h3>Cells in Parallel</h3>
      <p>When cells are connected in parallel, all positive terminals are connected together and all negative terminals are connected together. The voltage remains the same as one cell, but the battery can supply current for a longer time.</p>

      <h3>Use</h3>
      <ul>
        <li>Series cells are used in torches and remote controls where more voltage is needed.</li>
        <li>Parallel cells are useful when longer operation time is needed.</li>
      </ul>
    `,

    "Electricity and Its Uses": `
      <h2>Chapter 8: Electric Circuits</h2>
      <h3>Electricity and Its Uses</h3>

      <p>Electricity is one of the most important forms of energy in modern life. It can easily be converted into light, heat, sound, motion, and magnetic effects.</p>

      <h3>Daily Life Uses</h3>
      <ul>
        <li>Lighting homes, schools, and streets</li>
        <li>Running fans, motors, and machines</li>
        <li>Heating in irons, heaters, and ovens</li>
        <li>Communication through phones, radio, TV, and internet devices</li>
        <li>Medical equipment and hospital machines</li>
        <li>Computers and electronic devices</li>
      </ul>

      <p>Electricity is useful because it can be transmitted over long distances and controlled easily by switches and circuits.</p>
    `,

    "Electrical Energy": `
      <h2>Chapter 8: Electric Circuits</h2>
      <h3>Electrical Energy</h3>

      <p>Electrical energy is the energy used by electrical appliances when current flows through them. The amount of energy used depends on the power of the appliance and the time for which it is used.</p>

      <div class="formula-box">E = Pt</div>

      <p>Here, <b>E</b> is electrical energy, <b>P</b> is power, and <b>t</b> is time.</p>

      <h3>Commercial Unit</h3>
      <p>The commercial unit of electrical energy is kilowatt-hour, written as kWh. It is commonly called one unit of electricity.</p>

      <div class="formula-box">1 kWh = 3.6 × 10⁶ J</div>

      <p>Electricity bills are calculated using the number of units consumed by appliances.</p>
    `,

    "Electric Power": `
      <h2>Chapter 8: Electric Circuits</h2>
      <h3>Electric Power</h3>

      <p>Electric power is the rate at which electrical energy is used or converted into another form of energy. Its SI unit is watt.</p>

      <div class="formula-box">P = VI</div>

      <p>Here, <b>P</b> is power, <b>V</b> is potential difference, and <b>I</b> is current.</p>

      <h3>Other Forms</h3>
      <div class="formula-box">P = I²R</div>
      <div class="formula-box">P = V² / R</div>

      <p>A high-power appliance uses more energy in the same time compared with a low-power appliance.</p>

      <h3>Examples</h3>
      <ul>
        <li>A heater has high power because it converts much electrical energy into heat.</li>
        <li>An LED bulb has low power and uses less energy.</li>
        <li>The longer an appliance is used, the more energy it consumes.</li>
      </ul>
    `,

    "Household Circuits and Electric Safety": `
      <h2>Chapter 8: Electric Circuits</h2>
      <h3>Household Circuits and Electric Safety</h3>

      <p>Household circuits are designed to supply electricity safely to different appliances. Appliances in homes are usually connected in parallel so each appliance receives the same voltage and can work independently.</p>

      <h3>Main Wires</h3>
      <ul>
        <li><b>Live wire:</b> Carries current from the supply.</li>
        <li><b>Neutral wire:</b> Completes the circuit.</li>
        <li><b>Earth wire:</b> Provides safety path for current in case of fault.</li>
      </ul>

      <h3>Fuse and Circuit Breaker</h3>
      <p>A fuse or circuit breaker protects the circuit when current becomes too large. A fuse melts and breaks the circuit. A circuit breaker switches off automatically.</p>

      <h3>Safety Rules</h3>
      <ul>
        <li>Do not touch switches with wet hands.</li>
        <li>Do not overload sockets.</li>
        <li>Use proper insulation on wires.</li>
        <li>Always use fuses and circuit breakers.</li>
        <li>Repair damaged wires immediately.</li>
      </ul>
    `
  };

  const PHYSICS_CH9_CONTENT = {
    "Semiconductors": `
      <h2>Chapter 9: Electronics</h2>
      <h3>Semiconductors</h3>

      <p>Semiconductors are materials whose electrical conductivity lies between conductors and insulators. They are very important in modern electronics.</p>

      <p>Silicon and germanium are common semiconductor materials. Their conductivity can be controlled by adding small amounts of impurities. This process is called doping.</p>

      <h3>Important Properties</h3>
      <ul>
        <li>They conduct better than insulators but worse than metals.</li>
        <li>Their conductivity increases with temperature.</li>
        <li>Their conductivity can be changed by doping.</li>
        <li>They are used to make diodes, transistors, and integrated circuits.</li>
      </ul>

      <p>Almost all modern electronic devices depend on semiconductors.</p>
    `,

    "N and P Type Semiconductors": `
      <h2>Chapter 9: Electronics</h2>
      <h3>N and P Type Semiconductors</h3>

      <p>Pure semiconductors are not very useful until impurities are added to them. Adding impurities is called doping. Doping produces two types of semiconductors: N-type and P-type.</p>

      <h3>N-Type Semiconductor</h3>
      <p>In N-type semiconductors, impurity atoms provide extra electrons. Electrons are the majority charge carriers.</p>

      <h3>P-Type Semiconductor</h3>
      <p>In P-type semiconductors, impurity atoms create holes. Holes act as positive charge carriers and are the majority carriers.</p>

      <h3>Comparison</h3>
      <ul>
        <li>N-type has electrons as majority carriers.</li>
        <li>P-type has holes as majority carriers.</li>
        <li>Both are electrically neutral overall.</li>
        <li>Both are used to make PN junctions and electronic devices.</li>
      </ul>
    `,

    "PN Junction": `
      <h2>Chapter 9: Electronics</h2>
      <h3>PN Junction</h3>

      <p>A PN junction is formed when P-type and N-type semiconductors are joined together. It is the basic structure of a semiconductor diode.</p>

      <p>At the junction, electrons from the N-side combine with holes from the P-side. This creates a region near the junction that has very few free charge carriers. This region is called the depletion region.</p>

      <h3>Importance</h3>
      <ul>
        <li>PN junction allows current mainly in one direction.</li>
        <li>It is used in diodes.</li>
        <li>It is the foundation of many electronic devices.</li>
      </ul>

      <p>The behaviour of a PN junction changes when external voltage is applied. This is called biasing.</p>
    `,

    "Characteristics of Diode Under Biasing": `
      <h2>Chapter 9: Electronics</h2>
      <h3>Characteristics of Diode Under Biasing</h3>

      <p>A diode is based on a PN junction. Its behaviour depends on how it is connected to a battery. This connection is called biasing.</p>

      <h3>Forward Bias</h3>
      <p>In forward bias, the P-side is connected to the positive terminal and the N-side to the negative terminal. The depletion region becomes thin and current flows easily after a certain voltage.</p>

      <h3>Reverse Bias</h3>
      <p>In reverse bias, the P-side is connected to the negative terminal and the N-side to the positive terminal. The depletion region becomes wider and current is almost blocked.</p>

      <h3>Diode Action</h3>
      <p>A diode allows current mainly in one direction. This property is used for rectification, protection, and switching.</p>
    `,

    "Light Emitting Diode": `
      <h2>Chapter 9: Electronics</h2>
      <h3>Light Emitting Diode</h3>

      <p>A light emitting diode, or LED, is a special type of diode that emits light when it is forward biased.</p>

      <p>When electrons and holes recombine inside the LED, energy is released in the form of light.</p>

      <h3>Advantages of LED</h3>
      <ul>
        <li>Uses less energy</li>
        <li>Produces less heat</li>
        <li>Long life</li>
        <li>Small size</li>
        <li>Fast switching</li>
      </ul>

      <h3>Uses</h3>
      <ul>
        <li>Indicator lights</li>
        <li>Digital displays</li>
        <li>Traffic signals</li>
        <li>Remote controls</li>
        <li>Lighting systems</li>
      </ul>
    `,

    "Transistor": `
      <h2>Chapter 9: Electronics</h2>
      <h3>Transistor</h3>

      <p>A transistor is a semiconductor device used to amplify signals or act as a switch. It is one of the most important components in electronics.</p>

      <p>A transistor usually has three terminals. In a bipolar transistor, these are emitter, base, and collector.</p>

      <h3>Uses of Transistor</h3>
      <ul>
        <li>Amplification of weak signals</li>
        <li>Switching circuits on and off</li>
        <li>Digital electronics</li>
        <li>Computers and mobile phones</li>
        <li>Radios and amplifiers</li>
      </ul>

      <p>A small current at the base can control a larger current between collector and emitter.</p>
    `,

    "Relays and Switching Circuits": `
      <h2>Chapter 9: Electronics</h2>
      <h3>Relays and Switching Circuits</h3>

      <p>A relay is an electrically operated switch. It allows a small current circuit to control a larger current circuit.</p>

      <p>A relay usually contains an electromagnet. When current flows through the coil, it magnetizes the core and pulls a contact to open or close another circuit.</p>

      <h3>Uses of Relays</h3>
      <ul>
        <li>Automatic switching systems</li>
        <li>Protection circuits</li>
        <li>Car electrical systems</li>
        <li>Control of motors</li>
        <li>Alarm circuits</li>
      </ul>

      <p>Relays are useful when low-power control signals need to control high-power devices.</p>
    `,

    "Transistor as a Switch": `
      <h2>Chapter 9: Electronics</h2>
      <h3>Transistor as a Switch</h3>

      <p>A transistor can work as an electronic switch. It can turn a circuit ON or OFF without using a mechanical switch.</p>

      <h3>OFF State</h3>
      <p>When there is no suitable base current, the transistor does not allow collector current to flow. The circuit is OFF.</p>

      <h3>ON State</h3>
      <p>When enough base current is applied, the transistor allows current to flow through the collector-emitter path. The circuit is ON.</p>

      <h3>Uses</h3>
      <ul>
        <li>Computer circuits</li>
        <li>Automatic control systems</li>
        <li>LED control</li>
        <li>Motor control</li>
        <li>Digital electronics</li>
      </ul>
    `,

    "Digital Electronics": `
      <h2>Chapter 9: Electronics</h2>
      <h3>Digital Electronics</h3>

      <p>Digital electronics deals with circuits that use only two states, usually represented by 0 and 1.</p>

      <p>These two states may represent OFF and ON, low and high voltage, or false and true.</p>

      <h3>Why Digital Electronics is Important</h3>
      <ul>
        <li>It is used in computers and calculators.</li>
        <li>It is reliable and accurate.</li>
        <li>Information can be stored and processed easily.</li>
        <li>It is used in mobile phones, digital watches, and control systems.</li>
      </ul>

      <p>Logic gates are the basic building blocks of digital electronics.</p>
    `,

    "Fundamental Logic Gates": `
      <h2>Chapter 9: Electronics</h2>
      <h3>Fundamental Logic Gates</h3>

      <p>Logic gates are electronic circuits that perform logical operations on binary inputs. The fundamental logic gates are AND, OR, and NOT.</p>

      <h3>AND Gate</h3>
      <p>The AND gate gives output 1 only when all inputs are 1.</p>

      <h3>OR Gate</h3>
      <p>The OR gate gives output 1 if at least one input is 1.</p>

      <h3>NOT Gate</h3>
      <p>The NOT gate has one input and gives the opposite output. If input is 1, output is 0. If input is 0, output is 1.</p>

      <h3>Importance</h3>
      <p>These gates are used to design digital circuits, calculators, computers, and control systems.</p>
    `,

    "Universal Logic Gates": `
      <h2>Chapter 9: Electronics</h2>
      <h3>Universal Logic Gates</h3>

      <p>NAND and NOR gates are called universal logic gates because any logic circuit can be made using only NAND gates or only NOR gates.</p>

      <h3>NAND Gate</h3>
      <p>A NAND gate is the opposite of an AND gate. It gives output 0 only when all inputs are 1.</p>

      <h3>NOR Gate</h3>
      <p>A NOR gate is the opposite of an OR gate. It gives output 1 only when all inputs are 0.</p>

      <h3>Why They Are Important</h3>
      <ul>
        <li>They can be used to make all other gates.</li>
        <li>They simplify digital circuit design.</li>
        <li>They are widely used in integrated circuits.</li>
      </ul>
    `,

    "Uses of Logic Gates": `
      <h2>Chapter 9: Electronics</h2>
      <h3>Uses of Logic Gates</h3>

      <p>Logic gates are used wherever electronic circuits need to make decisions using binary signals.</p>

      <h3>Applications</h3>
      <ul>
        <li>Computers and processors</li>
        <li>Calculators</li>
        <li>Digital clocks</li>
        <li>Automatic control systems</li>
        <li>Security alarms</li>
        <li>Traffic light systems</li>
        <li>Memory circuits</li>
      </ul>

      <p>Complex digital systems are built by combining many logic gates together.</p>
    `,

    "Analogue and Digital Electronics": `
      <h2>Chapter 9: Electronics</h2>
      <h3>Analogue and Digital Electronics</h3>

      <p>Electronics can be divided into analogue electronics and digital electronics.</p>

      <h3>Analogue Electronics</h3>
      <p>Analogue signals vary continuously with time. Examples include sound signals from a microphone and temperature signals from sensors.</p>

      <h3>Digital Electronics</h3>
      <p>Digital signals have fixed levels, usually 0 and 1. Digital systems are used in computers, calculators, and mobile phones.</p>

      <h3>Comparison</h3>
      <ul>
        <li>Analogue signals are continuous.</li>
        <li>Digital signals are discrete.</li>
        <li>Digital systems are easier to store and process.</li>
        <li>Analogue systems are useful for natural signals such as sound and light intensity.</li>
      </ul>
    `,

    "Quantum Computers": `
      <h2>Chapter 9: Electronics</h2>
      <h3>Quantum Computers</h3>

      <p>Quantum computers are advanced computers based on the principles of quantum physics. Unlike classical computers, they use quantum bits called qubits.</p>

      <p>A classical bit can be 0 or 1. A qubit can represent 0, 1, or a combination of both states due to a quantum property called superposition.</p>

      <h3>Why Quantum Computers Matter</h3>
      <ul>
        <li>They may solve some complex problems faster than classical computers.</li>
        <li>They can be useful in cryptography, chemistry, and advanced simulations.</li>
        <li>They are still developing technology.</li>
      </ul>

      <p>Quantum computers are an important future direction of electronics and computing.</p>
    `
  };

  function renderPhysicsFlowChapter89(chapter, contentMap, chapterNumber){
    const topic = state.selectedTopic || Object.keys(contentMap)[0];
    const html = contentMap[topic];

    if(!html) return null;

    return `
      <div class="digital-book-area physics-ch89-flow-area">
        <div class="digital-book-head">
          <strong>Physics Digital Book</strong>
          <span>Chapter ${chapterNumber}</span>
        </div>
        <article class="digital-book-text physics-ch89-flow-text">
          ${html}
        </article>
      </div>
    `;
  }

  const oldPhysicsRenderCh89Flow = renderDigitalBookContent;

  renderDigitalBookContent = function(chapter){
    if(state.selectedSubject === "physics" && chapter && chapter.title === "Chapter 8: Electric Circuits"){
      const rendered = renderPhysicsFlowChapter89(chapter, PHYSICS_CH8_CONTENT, 8);
      if(rendered) return rendered;
    }

    if(state.selectedSubject === "physics" && chapter && chapter.title === "Chapter 9: Electronics"){
      const rendered = renderPhysicsFlowChapter89(chapter, PHYSICS_CH9_CONTENT, 9);
      if(rendered) return rendered;
    }

    return oldPhysicsRenderCh89Flow ? oldPhysicsRenderCh89Flow(chapter) : "";
  };

  window.PHYSICS_CH8_CONTENT = PHYSICS_CH8_CONTENT;
  window.PHYSICS_CH9_CONTENT = PHYSICS_CH9_CONTENT;
})();

// PHYSICS_CHAPTER_10_11_FLOW_CONTENT_V1
(function(){
  const PHYSICS_CH10_CONTENT = {
    "Magnetic Field Due to Current Carrying Wire": `
      <h2>Chapter 10: Electromagnetism</h2>
      <h3>Magnetic Field Due to Current Carrying Wire</h3>

      <p>Electromagnetism explains the relationship between electricity and magnetism. When electric current flows through a wire, a magnetic field is produced around the wire.</p>

      <p>The magnetic field around a straight current-carrying wire forms circular field lines. These circles are centred on the wire.</p>

      <h3>Direction of Magnetic Field</h3>
      <p>The direction of the magnetic field can be found by the right hand rule. If the thumb of the right hand points in the direction of current, the curled fingers show the direction of magnetic field lines.</p>

      <h3>Strength of Magnetic Field</h3>
      <ul>
        <li>The magnetic field becomes stronger when current increases.</li>
        <li>The magnetic field becomes weaker as distance from the wire increases.</li>
        <li>Reversing current reverses the direction of magnetic field.</li>
      </ul>

      <p>This effect is the basic idea behind electromagnets, motors, relays, and many electrical devices.</p>
    `,

    "Magnetic Field Due to Current Carrying Solenoid": `
      <h2>Chapter 10: Electromagnetism</h2>
      <h3>Magnetic Field Due to Current Carrying Solenoid</h3>

      <p>A solenoid is a long coil of insulated wire wound in the form of a cylinder. When current passes through a solenoid, it produces a magnetic field.</p>

      <p>The magnetic field of a current-carrying solenoid is similar to the magnetic field of a bar magnet. One end behaves like a north pole and the other end behaves like a south pole.</p>

      <h3>Inside the Solenoid</h3>
      <p>The magnetic field inside a solenoid is strong and almost uniform. The field lines are close, straight, and parallel inside the coil.</p>

      <h3>Increasing the Magnetic Field</h3>
      <ul>
        <li>Increase the current through the solenoid.</li>
        <li>Increase the number of turns of wire.</li>
        <li>Place a soft iron core inside the solenoid.</li>
      </ul>

      <p>Solenoids are used in electromagnets, electric bells, relays, and switching devices.</p>
    `,

    "Earth's Magnetic Field": `
      <h2>Chapter 10: Electromagnetism</h2>
      <h3>Earth's Magnetic Field</h3>

      <p>The Earth behaves like a giant magnet. It has a magnetic field around it, and this field affects magnetic materials and compass needles.</p>

      <p>A freely suspended magnetic needle aligns itself approximately in the north-south direction because of Earth's magnetic field.</p>

      <h3>Magnetic Poles</h3>
      <p>The geographic north pole and magnetic north pole are not exactly at the same position. This is why compass direction may slightly differ from true geographic north.</p>

      <h3>Importance</h3>
      <ul>
        <li>It helps in navigation using a compass.</li>
        <li>It protects Earth from some charged particles coming from the Sun.</li>
        <li>It helps birds and some animals during migration.</li>
      </ul>

      <p>Earth's magnetic field is an important natural example of magnetism.</p>
    `,

    "Application of Magnetic Effect of Current": `
      <h2>Chapter 10: Electromagnetism</h2>
      <h3>Application of Magnetic Effect of Current</h3>

      <p>The magnetic effect of current is used in many electrical and electronic devices. Since current can produce magnetism, we can use electricity to create controlled magnetic fields.</p>

      <h3>Electromagnets</h3>
      <p>An electromagnet is made by passing current through a coil of wire, usually wound around a soft iron core. It acts like a magnet only when current flows.</p>

      <h3>Applications</h3>
      <ul>
        <li>Electric bells</li>
        <li>Relays</li>
        <li>Magnetic cranes for lifting iron scrap</li>
        <li>Loudspeakers</li>
        <li>Electric motors</li>
        <li>Magnetic locks</li>
      </ul>

      <p>The main advantage of an electromagnet is that it can be switched on and off by controlling the current.</p>
    `,

    "Force On a Current Carrying Conductor Place in a Magnetic Field": `
      <h2>Chapter 10: Electromagnetism</h2>
      <h3>Force On a Current Carrying Conductor Placed in a Magnetic Field</h3>

      <p>When a current-carrying conductor is placed in a magnetic field, it experiences a force. This happens because the magnetic field produced by the current interacts with the external magnetic field.</p>

      <div class="formula-box">F = BIL</div>

      <p>Here, <b>F</b> is force, <b>B</b> is magnetic field strength, <b>I</b> is current, and <b>L</b> is length of conductor inside the magnetic field.</p>

      <h3>Direction of Force</h3>
      <p>The direction of force depends on the direction of current and the direction of magnetic field. Reversing either current or magnetic field reverses the direction of force.</p>

      <h3>Important Use</h3>
      <p>This force is the working principle of electric motors and moving coil instruments.</p>
    `,

    "Current Carrying Coil in a Magnetic Field": `
      <h2>Chapter 10: Electromagnetism</h2>
      <h3>Current Carrying Coil in a Magnetic Field</h3>

      <p>When a current-carrying coil is placed in a magnetic field, opposite sides of the coil experience forces in opposite directions. These forces produce a turning effect on the coil.</p>

      <p>This turning effect is called torque. It can rotate the coil if the coil is free to move.</p>

      <h3>Why the Coil Rotates</h3>
      <p>One side of the coil experiences upward force while the other side experiences downward force. These two forces form a couple and rotate the coil.</p>

      <h3>Applications</h3>
      <ul>
        <li>Electric motors</li>
        <li>Galvanometers</li>
        <li>Moving coil meters</li>
      </ul>

      <p>The rotation of a current-carrying coil in a magnetic field is a very important idea in electromagnetism.</p>
    `,

    "Electric Motor": `
      <h2>Chapter 10: Electromagnetism</h2>
      <h3>Electric Motor</h3>

      <p>An electric motor is a device that converts electrical energy into mechanical energy. It works on the principle that a current-carrying conductor placed in a magnetic field experiences a force.</p>

      <h3>Main Parts</h3>
      <ul>
        <li>Rectangular coil</li>
        <li>Strong magnet</li>
        <li>Split-ring commutator</li>
        <li>Carbon brushes</li>
        <li>Battery or power supply</li>
      </ul>

      <h3>Working</h3>
      <p>When current passes through the coil, the two sides of the coil experience forces in opposite directions. These forces rotate the coil. The split-ring commutator reverses the current direction after every half turn, so the coil keeps rotating in the same direction.</p>

      <h3>Uses</h3>
      <ul>
        <li>Fans</li>
        <li>Washing machines</li>
        <li>Electric vehicles</li>
        <li>Pumps</li>
        <li>Drills and mixers</li>
      </ul>
    `,

    "Electromagnetic Induction": `
      <h2>Chapter 10: Electromagnetism</h2>
      <h3>Electromagnetic Induction</h3>

      <p>Electromagnetic induction is the production of induced EMF or current in a conductor when the magnetic field linked with it changes.</p>

      <p>If a magnet is moved toward or away from a coil, current is induced in the coil. Similarly, if a coil is moved in a magnetic field, induced current can be produced.</p>

      <h3>How to Increase Induced EMF</h3>
      <ul>
        <li>Move the magnet or coil faster.</li>
        <li>Use a stronger magnet.</li>
        <li>Increase the number of turns in the coil.</li>
        <li>Use a soft iron core inside the coil.</li>
      </ul>

      <p>Electromagnetic induction is the basic principle of electric generators and transformers.</p>
    `,

    "Lenz's Law": `
      <h2>Chapter 10: Electromagnetism</h2>
      <h3>Lenz's Law</h3>

      <p>Lenz's law gives the direction of induced current. It states that the direction of induced current is always such that it opposes the change that produces it.</p>

      <p>This means if a magnet is moved toward a coil, the induced current produces a magnetic field that opposes the approach of the magnet. If the magnet is moved away, the induced current tries to oppose that motion too.</p>

      <h3>Energy Conservation</h3>
      <p>Lenz's law follows the law of conservation of energy. Work must be done to move the magnet or coil, and this work is converted into electrical energy.</p>

      <h3>Important Point</h3>
      <p>Lenz's law does not tell the amount of induced current. It tells the direction of induced current.</p>
    `,

    "Electric Generator": `
      <h2>Chapter 10: Electromagnetism</h2>
      <h3>Electric Generator</h3>

      <p>An electric generator is a device that converts mechanical energy into electrical energy. It works on the principle of electromagnetic induction.</p>

      <h3>Main Parts</h3>
      <ul>
        <li>Coil of wire</li>
        <li>Magnet</li>
        <li>Slip rings or commutator</li>
        <li>Carbon brushes</li>
        <li>External circuit</li>
      </ul>

      <h3>Working</h3>
      <p>When the coil rotates in a magnetic field, the magnetic field linked with the coil changes continuously. This change induces EMF and current in the coil.</p>

      <h3>Uses</h3>
      <p>Generators are used in power stations to produce electricity. Mechanical energy may come from steam turbines, water turbines, wind turbines, or engines.</p>
    `,

    "Transformer": `
      <h2>Chapter 10: Electromagnetism</h2>
      <h3>Transformer</h3>

      <p>A transformer is a device used to increase or decrease AC voltage. It works on the principle of mutual induction.</p>

      <p>A transformer has two coils wound on a soft iron core. The input coil is called the primary coil, and the output coil is called the secondary coil.</p>

      <div class="formula-box">Vp / Vs = Np / Ns</div>

      <p>Here, <b>Vp</b> and <b>Vs</b> are primary and secondary voltages, while <b>Np</b> and <b>Ns</b> are number of turns in primary and secondary coils.</p>

      <h3>Types</h3>
      <ul>
        <li><b>Step-up transformer:</b> Increases voltage.</li>
        <li><b>Step-down transformer:</b> Decreases voltage.</li>
      </ul>

      <p>Transformers are used in power transmission to reduce energy loss.</p>
    `,

    "Deflection of Electron Beam": `
      <h2>Chapter 10: Electromagnetism</h2>
      <h3>Deflection of Electron Beam</h3>

      <p>An electron beam is a stream of fast-moving electrons. Since electrons are negatively charged particles, they can be deflected by electric and magnetic fields.</p>

      <h3>Electric Field Deflection</h3>
      <p>In an electric field, electrons are attracted toward the positive plate and repelled from the negative plate. This changes the path of the beam.</p>

      <h3>Magnetic Field Deflection</h3>
      <p>In a magnetic field, moving electrons experience a force perpendicular to their motion and the magnetic field. This also bends the beam.</p>

      <h3>Uses</h3>
      <ul>
        <li>Cathode ray oscilloscope</li>
        <li>Old television picture tubes</li>
        <li>Electron beam devices</li>
        <li>Scientific instruments</li>
      </ul>
    `,

    "Cathode Ray Oscilloscope": `
      <h2>Chapter 10: Electromagnetism</h2>
      <h3>Cathode Ray Oscilloscope</h3>

      <p>A cathode ray oscilloscope, or CRO, is an instrument used to display and study electrical signals. It shows the signal as a waveform on a screen.</p>

      <h3>Main Parts</h3>
      <ul>
        <li>Electron gun</li>
        <li>Deflecting plates</li>
        <li>Fluorescent screen</li>
        <li>Control knobs</li>
      </ul>

      <h3>Working</h3>
      <p>The electron gun produces a narrow beam of electrons. The beam is deflected by electric fields and strikes the fluorescent screen, producing a bright spot. When the signal changes, the spot moves and forms a waveform.</p>

      <h3>Uses</h3>
      <ul>
        <li>Studying waveforms</li>
        <li>Measuring voltage</li>
        <li>Measuring time period</li>
        <li>Measuring frequency</li>
      </ul>
    `
  };

  const PHYSICS_CH11_CONTENT = {
    "Electromagnetic Spectrum": `
      <h2>Chapter 11: Electromagnetic Waves</h2>
      <h3>Electromagnetic Spectrum</h3>

      <p>Electromagnetic waves are waves made of changing electric and magnetic fields. They do not need a material medium and can travel through vacuum.</p>

      <p>The complete range of electromagnetic waves arranged according to wavelength or frequency is called the electromagnetic spectrum.</p>

      <h3>Order of Electromagnetic Spectrum</h3>
      <ul>
        <li>Radio waves</li>
        <li>Microwaves</li>
        <li>Infrared radiation</li>
        <li>Visible light</li>
        <li>Ultraviolet rays</li>
        <li>X-rays</li>
        <li>Gamma rays</li>
      </ul>

      <p>Radio waves have the longest wavelength and lowest frequency. Gamma rays have the shortest wavelength and highest frequency.</p>

      <div class="formula-box">c = fλ</div>

      <p>All electromagnetic waves travel at the speed of light in vacuum.</p>
    `,

    "Applications of Electromagnetic Waves": `
      <h2>Chapter 11: Electromagnetic Waves</h2>
      <h3>Applications of Electromagnetic Waves</h3>

      <p>Different parts of the electromagnetic spectrum have different uses because they have different wavelengths, frequencies, and energies.</p>

      <h3>Uses</h3>
      <ul>
        <li><b>Radio waves:</b> Radio, television, and communication.</li>
        <li><b>Microwaves:</b> Microwave ovens, radar, satellite communication, and mobile phones.</li>
        <li><b>Infrared:</b> Remote controls, thermal imaging, and heaters.</li>
        <li><b>Visible light:</b> Vision, photography, and optical instruments.</li>
        <li><b>Ultraviolet:</b> Sterilization and detection of forged documents.</li>
        <li><b>X-rays:</b> Medical imaging and security scanning.</li>
        <li><b>Gamma rays:</b> Cancer treatment and sterilization of medical equipment.</li>
      </ul>

      <p>Electromagnetic waves are very important in medicine, communication, industry, astronomy, and daily life.</p>
    `,

    "Risks Associated with Electromagnetic Waves": `
      <h2>Chapter 11: Electromagnetic Waves</h2>
      <h3>Risks Associated with Electromagnetic Waves</h3>

      <p>Electromagnetic waves are useful, but some of them can be harmful if exposure is too high. Higher frequency waves have more energy and can damage living tissues.</p>

      <h3>Possible Risks</h3>
      <ul>
        <li><b>Ultraviolet rays:</b> Can cause skin burns, eye damage, and skin cancer.</li>
        <li><b>X-rays:</b> Can damage cells and DNA if exposure is high.</li>
        <li><b>Gamma rays:</b> Highly penetrating and can cause serious biological damage.</li>
        <li><b>Microwaves:</b> Can heat body tissues if exposure is intense.</li>
      </ul>

      <h3>Safety Measures</h3>
      <ul>
        <li>Use lead shields during X-ray exposure.</li>
        <li>Avoid unnecessary exposure to UV radiation.</li>
        <li>Use protective equipment in radiation areas.</li>
        <li>Follow safety rules in hospitals and laboratories.</li>
      </ul>

      <p>Controlled use of electromagnetic waves is safe and useful, but careless exposure can be dangerous.</p>
    `,

    "Scattering of Light": `
      <h2>Chapter 11: Electromagnetic Waves</h2>
      <h3>Scattering of Light</h3>

      <p>Scattering is the spreading of light in different directions when it interacts with small particles or molecules in the atmosphere.</p>

      <p>Sunlight contains different colours. Shorter wavelengths, such as blue and violet, scatter more strongly than longer wavelengths, such as red.</p>

      <h3>Why the Sky is Blue</h3>
      <p>Blue light is scattered more by air molecules. This scattered blue light reaches our eyes from all directions, so the sky appears blue.</p>

      <h3>Why Sunset is Red</h3>
      <p>During sunrise and sunset, sunlight travels a longer path through the atmosphere. Most blue light is scattered away, and red/orange light reaches our eyes. This makes the Sun and sky near it appear reddish.</p>

      <p>Scattering of light explains many natural colours in the sky.</p>
    `,

    "Nature of Light": `
      <h2>Chapter 11: Electromagnetic Waves</h2>
      <h3>Nature of Light</h3>

      <p>Light has a dual nature. It behaves both as a wave and as a stream of particles called photons.</p>

      <h3>Wave Nature</h3>
      <p>Light shows wave behaviour such as reflection, refraction, diffraction, and interference. These phenomena can be explained by treating light as a wave.</p>

      <h3>Particle Nature</h3>
      <p>Light also behaves like particles called photons. Each photon carries energy.</p>

      <div class="formula-box">E = hf</div>

      <p>Here, <b>E</b> is energy of a photon, <b>h</b> is Planck's constant, and <b>f</b> is frequency.</p>

      <h3>Important Idea</h3>
      <p>The wave-particle dual nature of light is one of the important ideas of modern physics. It helps explain many experiments and technologies.</p>
    `
  };

  function renderPhysicsFlowChapter1011(chapter, contentMap, chapterNumber){
    const topic = state.selectedTopic || Object.keys(contentMap)[0];
    const html = contentMap[topic];

    if(!html) return null;

    return `
      <div class="digital-book-area physics-ch1011-flow-area">
        <div class="digital-book-head">
          <strong>Physics Digital Book</strong>
          <span>Chapter ${chapterNumber}</span>
        </div>
        <article class="digital-book-text physics-ch1011-flow-text">
          ${html}
        </article>
      </div>
    `;
  }

  const oldPhysicsRenderCh1011Flow = renderDigitalBookContent;

  renderDigitalBookContent = function(chapter){
    if(state.selectedSubject === "physics" && chapter && chapter.title === "Chapter 10: Electromagnetism"){
      const rendered = renderPhysicsFlowChapter1011(chapter, PHYSICS_CH10_CONTENT, 10);
      if(rendered) return rendered;
    }

    if(state.selectedSubject === "physics" && chapter && chapter.title === "Chapter 11: Electromagnetic Waves"){
      const rendered = renderPhysicsFlowChapter1011(chapter, PHYSICS_CH11_CONTENT, 11);
      if(rendered) return rendered;
    }

    return oldPhysicsRenderCh1011Flow ? oldPhysicsRenderCh1011Flow(chapter) : "";
  };

  window.PHYSICS_CH10_CONTENT = PHYSICS_CH10_CONTENT;
  window.PHYSICS_CH11_CONTENT = PHYSICS_CH11_CONTENT;
})();

// PHYSICS_CHAPTER_12_FLOW_CONTENT_V1
(function(){
  const PHYSICS_CH12_CONTENT = {
    "Discovery of Nucleus": `
      <h2>Chapter 12: Nuclear Physics</h2>
      <h3>Discovery of Nucleus</h3>

      <p>Nuclear physics begins with the discovery that an atom is not a solid indivisible sphere. Scientists found that an atom has a tiny central part called the <b>nucleus</b>.</p>

      <p>Rutherford performed the famous gold foil experiment. He directed alpha particles at a very thin gold foil. Most alpha particles passed straight through, some were slightly deflected, and a very few bounced back.</p>

      <h3>Conclusion of Rutherford Experiment</h3>
      <ul>
        <li>Most of the atom is empty space.</li>
        <li>The positive charge of an atom is concentrated in a small nucleus.</li>
        <li>The nucleus is very dense and contains most of the mass of the atom.</li>
        <li>Electrons revolve around the nucleus.</li>
      </ul>

      <p>This experiment changed the model of the atom and introduced the idea of a small, dense, positively charged nucleus.</p>
    `,

    "Nuclear Representations": `
      <h2>Chapter 12: Nuclear Physics</h2>
      <h3>Nuclear Representations</h3>

      <p>Nuclear representation is a way to describe the nucleus of an atom using atomic number and mass number.</p>

      <h3>Atomic Number</h3>
      <p>The atomic number is the number of protons in the nucleus. It is represented by <b>Z</b>. It identifies the element.</p>

      <h3>Mass Number</h3>
      <p>The mass number is the total number of protons and neutrons in the nucleus. It is represented by <b>A</b>.</p>

      <div class="formula-box">A = Z + N</div>

      <p>Here, <b>A</b> is mass number, <b>Z</b> is number of protons, and <b>N</b> is number of neutrons.</p>

      <h3>Example</h3>
      <p>If an atom has 6 protons and 6 neutrons, its atomic number is 6 and mass number is 12.</p>
    `,

    "Isotopes and Radioisotopes": `
      <h2>Chapter 12: Nuclear Physics</h2>
      <h3>Isotopes and Radioisotopes</h3>

      <p>Isotopes are atoms of the same element having the same atomic number but different mass numbers.</p>

      <p>This means isotopes have the same number of protons but different numbers of neutrons.</p>

      <h3>Example</h3>
      <p>Carbon-12, Carbon-13, and Carbon-14 are isotopes of carbon. They all have 6 protons but different numbers of neutrons.</p>

      <h3>Radioisotopes</h3>
      <p>Radioisotopes are unstable isotopes that emit radiation from their nuclei. They decay naturally and change into more stable nuclei.</p>

      <h3>Uses of Radioisotopes</h3>
      <ul>
        <li>Medical diagnosis and treatment</li>
        <li>Tracing chemical and biological processes</li>
        <li>Dating old objects and fossils</li>
        <li>Industrial testing</li>
        <li>Agricultural research</li>
      </ul>
    `,

    "Radioactivity": `
      <h2>Chapter 12: Nuclear Physics</h2>
      <h3>Radioactivity</h3>

      <p>Radioactivity is the spontaneous emission of radiations from unstable nuclei. This process does not need external force or heating. It occurs naturally in unstable atoms.</p>

      <p>Radioactive substances emit radiations to become more stable. The main types of radiations are alpha, beta, and gamma radiations.</p>

      <h3>Alpha Radiation</h3>
      <p>Alpha particles are heavy and positively charged. They have low penetrating power but strong ionizing ability.</p>

      <h3>Beta Radiation</h3>
      <p>Beta particles are fast-moving electrons or positrons. They have medium penetrating power and medium ionizing ability.</p>

      <h3>Gamma Radiation</h3>
      <p>Gamma rays are electromagnetic radiations with very high energy. They have high penetrating power but lower ionizing ability compared with alpha particles.</p>
    `,

    "Nuclear Decay": `
      <h2>Chapter 12: Nuclear Physics</h2>
      <h3>Nuclear Decay</h3>

      <p>Nuclear decay is the process in which an unstable nucleus changes into a more stable nucleus by emitting radiation.</p>

      <p>During nuclear decay, the nucleus may emit alpha particles, beta particles, or gamma rays. The type of radiation depends on the instability of the nucleus.</p>

      <h3>Alpha Decay</h3>
      <p>In alpha decay, the nucleus emits an alpha particle. The mass number decreases by 4 and atomic number decreases by 2.</p>

      <h3>Beta Decay</h3>
      <p>In beta decay, a neutron may change into a proton and an electron is emitted. The atomic number changes but mass number remains almost the same.</p>

      <h3>Gamma Decay</h3>
      <p>In gamma decay, the nucleus releases extra energy in the form of gamma rays. The atomic number and mass number do not change.</p>
    `,

    "Half-Life": `
      <h2>Chapter 12: Nuclear Physics</h2>
      <h3>Half-Life</h3>

      <p>Half-life is the time required for half of the radioactive nuclei in a sample to decay.</p>

      <p>Radioactive decay is random for individual atoms, but for a large sample the rate of decay follows a pattern. After every half-life, the amount of radioactive material becomes half of the previous amount.</p>

      <h3>Example</h3>
      <p>If a radioactive sample has 100 g and its half-life is 10 years, then after 10 years 50 g will remain. After another 10 years, 25 g will remain.</p>

      <div class="formula-box">N = N₀ / 2ⁿ</div>

      <p>Here, <b>N₀</b> is original amount, <b>N</b> is remaining amount, and <b>n</b> is number of half-lives.</p>

      <h3>Uses of Half-Life</h3>
      <ul>
        <li>Dating fossils and rocks</li>
        <li>Medical radioactive treatment planning</li>
        <li>Measuring radioactive safety</li>
        <li>Nuclear research</li>
      </ul>
    `,

    "Ionizing Nuclear Radiations": `
      <h2>Chapter 12: Nuclear Physics</h2>
      <h3>Ionizing Nuclear Radiations</h3>

      <p>Ionizing radiation is radiation that has enough energy to remove electrons from atoms or molecules. When electrons are removed, ions are formed.</p>

      <p>Alpha, beta, gamma rays, and X-rays can ionize matter. Ionization can be useful in controlled applications but dangerous for living tissues if exposure is high.</p>

      <h3>Effects on Living Cells</h3>
      <ul>
        <li>Can damage cells and tissues</li>
        <li>Can damage DNA</li>
        <li>Can cause burns or sickness at high exposure</li>
        <li>Can increase risk of cancer</li>
      </ul>

      <h3>Protection</h3>
      <ul>
        <li>Reduce exposure time</li>
        <li>Keep safe distance from source</li>
        <li>Use shielding such as lead or concrete</li>
        <li>Wear radiation monitoring badges</li>
      </ul>
    `,

    "Applications of Radiation": `
      <h2>Chapter 12: Nuclear Physics</h2>
      <h3>Applications of Radiation</h3>

      <p>Radiation can be harmful if uncontrolled, but controlled radiation has many useful applications in medicine, industry, agriculture, and research.</p>

      <h3>Medical Uses</h3>
      <ul>
        <li>Radiotherapy for cancer treatment</li>
        <li>Medical imaging</li>
        <li>Radioactive tracers to study organs</li>
        <li>Sterilization of medical equipment</li>
      </ul>

      <h3>Industrial Uses</h3>
      <ul>
        <li>Checking thickness of sheets</li>
        <li>Detecting cracks in metal parts</li>
        <li>Testing welding joints</li>
        <li>Detecting leaks in pipelines</li>
      </ul>

      <h3>Agricultural Uses</h3>
      <ul>
        <li>Improving crop varieties</li>
        <li>Killing pests</li>
        <li>Preserving food</li>
      </ul>

      <p>Radiation must always be used carefully with proper safety measures.</p>
    `,

    "Background Radiation": `
      <h2>Chapter 12: Nuclear Physics</h2>
      <h3>Background Radiation</h3>

      <p>Background radiation is the low level of radiation that is always present around us. It comes from natural and artificial sources.</p>

      <h3>Natural Sources</h3>
      <ul>
        <li>Cosmic rays from space</li>
        <li>Radioactive rocks and soil</li>
        <li>Radon gas</li>
        <li>Food and water</li>
        <li>Radioactive materials inside the human body</li>
      </ul>

      <h3>Artificial Sources</h3>
      <ul>
        <li>Medical X-rays</li>
        <li>Nuclear power stations</li>
        <li>Industrial radiation sources</li>
        <li>Fallout from nuclear tests or accidents</li>
      </ul>

      <p>Background radiation is usually low, but high levels can be dangerous. Radiation monitoring is important for safety.</p>
    `,

    "Nuclear Fission": `
      <h2>Chapter 12: Nuclear Physics</h2>
      <h3>Nuclear Fission</h3>

      <p>Nuclear fission is the splitting of a heavy nucleus into two lighter nuclei with the release of a large amount of energy.</p>

      <p>When a neutron strikes a heavy nucleus such as uranium-235, the nucleus becomes unstable and splits. More neutrons are released, and these neutrons can cause further fission reactions.</p>

      <h3>Chain Reaction</h3>
      <p>A chain reaction occurs when neutrons produced in one fission reaction cause more fission reactions. If controlled, it is used in nuclear reactors. If uncontrolled, it can cause an explosion.</p>

      <h3>Uses</h3>
      <ul>
        <li>Nuclear power generation</li>
        <li>Nuclear research</li>
        <li>Production of radioisotopes</li>
      </ul>

      <p>Nuclear fission releases much more energy than ordinary chemical reactions.</p>
    `,

    "Nuclear Fusion": `
      <h2>Chapter 12: Nuclear Physics</h2>
      <h3>Nuclear Fusion</h3>

      <p>Nuclear fusion is the process in which two light nuclei combine to form a heavier nucleus with the release of a huge amount of energy.</p>

      <p>Fusion requires extremely high temperature and pressure because positively charged nuclei repel each other. At very high temperature, nuclei can come close enough to join.</p>

      <h3>Fusion in the Sun</h3>
      <p>The Sun and other stars produce energy mainly through nuclear fusion. Hydrogen nuclei combine to form helium and release energy.</p>

      <h3>Importance</h3>
      <ul>
        <li>Fusion is the source of energy of stars.</li>
        <li>It releases enormous energy.</li>
        <li>It produces less long-lived radioactive waste than fission.</li>
        <li>Scientists are trying to use fusion for future energy generation.</li>
      </ul>

      <p>Fusion is difficult to control on Earth, but it has great potential as a future energy source.</p>
    `,

    "Dark Matter": `
      <h2>Chapter 12: Nuclear Physics</h2>
      <h3>Dark Matter</h3>

      <p>Dark matter is a form of matter that does not emit, absorb, or reflect light. Because of this, it cannot be seen directly using ordinary telescopes.</p>

      <p>Scientists know dark matter exists because of its gravitational effects on galaxies and galaxy clusters.</p>

      <h3>Evidence</h3>
      <ul>
        <li>Galaxies rotate in a way that cannot be explained by visible matter alone.</li>
        <li>Gravitational lensing shows extra unseen mass.</li>
        <li>Motion of galaxies suggests the presence of invisible matter.</li>
      </ul>

      <p>Dark matter is still one of the major unsolved mysteries in physics. It shows that the universe contains much more than what we can see.</p>
    `,

    "Falsifiability": `
      <h2>Chapter 12: Nuclear Physics</h2>
      <h3>Falsifiability</h3>

      <p>Falsifiability is an important idea in science. A scientific statement or theory must be testable in such a way that it can potentially be proven wrong.</p>

      <p>If an idea cannot be tested or cannot be shown false by any observation, then it is not considered a strong scientific theory.</p>

      <h3>Why It Matters</h3>
      <ul>
        <li>It separates science from unsupported claims.</li>
        <li>It allows theories to be tested by experiments.</li>
        <li>It helps science improve over time.</li>
        <li>It makes scientific explanations reliable.</li>
      </ul>

      <h3>Example</h3>
      <p>A theory that predicts a measurable result can be tested. If the result does not match the prediction, the theory may need to be changed or rejected.</p>

      <p>Falsifiability is part of the scientific method and helps scientists build better explanations of nature.</p>
    `
  };

  function renderPhysicsChapter12Flow(chapter){
    const topic = state.selectedTopic || "Discovery of Nucleus";
    const html = PHYSICS_CH12_CONTENT[topic];

    if(!html) return null;

    return `
      <div class="digital-book-area physics-ch12-flow-area">
        <div class="digital-book-head">
          <strong>Physics Digital Book</strong>
          <span>Chapter 12</span>
        </div>
        <article class="digital-book-text physics-ch12-flow-text">
          ${html}
        </article>
      </div>
    `;
  }

  const oldPhysicsRenderCh12Flow = renderDigitalBookContent;

  renderDigitalBookContent = function(chapter){
    if(state.selectedSubject === "physics" && chapter && chapter.title === "Chapter 12: Nuclear Physics"){
      const rendered = renderPhysicsChapter12Flow(chapter);
      if(rendered) return rendered;
    }

    return oldPhysicsRenderCh12Flow ? oldPhysicsRenderCh12Flow(chapter) : "";
  };

  window.PHYSICS_CH12_CONTENT = PHYSICS_CH12_CONTENT;
})();

// PHYSICS_EXACT_TEXTBOOK_PDF_VIEW_V1
(function(){
  const PHYSICS_PDF_FILE = "physics-textbook.pdf";

  const PHYSICS_PDF_CHAPTERS = {
    "Chapter 1: Heat Capacity and Modes of Heat Transfer": { unit:"Unit 10", page:11, end:44, exercise:40 },
    "Chapter 2: Thermal Expansion and Change of State": { unit:"Unit 11", page:45, end:74, exercise:70 },
    "Chapter 3: Waves": { unit:"Unit 12", page:75, end:92, exercise:88 },
    "Chapter 4: Sound": { unit:"Unit 13", page:93, end:120, exercise:116 },
    "Chapter 5: Optics": { unit:"Unit 14", page:121, end:158, exercise:154 },
    "Chapter 6: Electrostatics": { unit:"Unit 15", page:159, end:184, exercise:180 },
    "Chapter 7: Current Electricity": { unit:"Unit 16", page:185, end:204, exercise:201 },
    "Chapter 8: Electric Circuits": { unit:"Unit 17", page:205, end:234, exercise:230 },
    "Chapter 9: Electronics": { unit:"Unit 18", page:235, end:258, exercise:255 },
    "Chapter 10: Electromagnetism": { unit:"Unit 19", page:259, end:280, exercise:276 },
    "Chapter 11: Electromagnetic Waves": { unit:"Unit 20", page:281, end:308, exercise:304 },
    "Chapter 12: Nuclear Physics": { unit:"Unit 21", page:309, end:364, exercise:345 }
  };

  function physicsPdfUrl(page){
    return PHYSICS_PDF_FILE + "#page=" + page + "&view=FitH";
  }

  function renderExactPhysicsPdf(chapter){
    const meta = PHYSICS_PDF_CHAPTERS[chapter.title];
    if(!meta) return null;

    return `
      <div class="digital-book-area physics-exact-pdf-area">
        <div class="digital-book-head physics-exact-pdf-head">
          <strong>Physics Exact Textbook View</strong>
          <span>${meta.unit} • Pages ${meta.page}-${meta.end}</span>
        </div>

        <div class="physics-exact-alert">
          <b>This is the actual textbook chapter.</b>
          It includes the original examples, exercise questions, tables, diagrams, side information boxes, summaries, and textbook layout.
          Scroll inside the PDF viewer.
        </div>

        <div class="physics-pdf-actions">
          <a href="${physicsPdfUrl(meta.page)}" target="_blank" rel="noopener">Open Chapter Start</a>
          <a href="${physicsPdfUrl(meta.exercise)}" target="_blank" rel="noopener">Open Exercise Section</a>
          <a href="${PHYSICS_PDF_FILE}" target="_blank" rel="noopener">Open Full PDF</a>
        </div>

        <iframe
          class="physics-exact-pdf-frame"
          src="${physicsPdfUrl(meta.page)}"
          title="${chapter.title} Exact Textbook PDF">
        </iframe>

        <div class="physics-exact-note">
          If the PDF does not appear here, upload <b>physics-textbook.pdf</b> with <b>app.js</b> and <b>style.css</b> to GitHub.
        </div>
      </div>
    `;
  }

  const oldPhysicsExactPdfRender = renderDigitalBookContent;

  renderDigitalBookContent = function(chapter){
    if(state.selectedSubject === "physics" && chapter && PHYSICS_PDF_CHAPTERS[chapter.title]){
      const exact = renderExactPhysicsPdf(chapter);
      if(exact) return exact;
    }
    return oldPhysicsExactPdfRender ? oldPhysicsExactPdfRender(chapter) : "";
  };

  window.PHYSICS_PDF_CHAPTERS = PHYSICS_PDF_CHAPTERS;
})();

// PHYSICS_FULL_EXACT_BOOK_RENDER_V1
(function(){
  const PHYSICS_PDF_FILE = "physics-textbook.pdf";

  const EXACT_PHYSICS_CHAPTERS = [
    {
      title:"Chapter 1: Heat Capacity and Modes of Heat Transfer",
      unit:"Unit 10",
      start:11,
      end:44,
      topics:["Full Exact Textbook Chapter","Specific Heat Capacity","Transfer of Heat","Applications of Heat Transfer","Greenhouse Effect and Global Warming","Flow of Heat in Geothermal Activities","Examples / Activities / Tables / Side Boxes","Summary","Exercise"]
    },
    {
      title:"Chapter 2: Thermal Expansion and Change of State",
      unit:"Unit 11",
      start:45,
      end:74,
      topics:["Full Exact Textbook Chapter","Kinetic Theory of Matter","Thermal Expansion","Evaporation","Latent Heat","Pressure Exerted by Gas Particles","Superconductivity","Examples / Activities / Tables / Side Boxes","Summary","Exercise"]
    },
    {
      title:"Chapter 3: Waves",
      unit:"Unit 12",
      start:75,
      end:92,
      topics:["Full Exact Textbook Chapter","Wave Motion","Wave Propagation","Characteristic Wave Parameters","Waves and their Types","Types of Waves On the Basis of Medium","Types of Waves On the Basis of Propagation","Wave Characteristics","Properties of Waves","Tsunamis","Examples / Activities / Tables / Side Boxes","Summary","Exercise"]
    },
    {
      title:"Chapter 4: Sound",
      unit:"Unit 13",
      start:93,
      end:120,
      topics:["Full Exact Textbook Chapter","Source of Sound","Nature of Sound Waves","Ultrasound","Infrasound","Characteristics of Sound Waves","Analysing Sound Waves","Speed of Sound","Noise","Reflection, Refraction and Diffraction of Sound Waves","Echo","Acoustics","Human Hearing System","Examples / Activities / Tables / Side Boxes","Summary","Exercise"]
    },
    {
      title:"Chapter 5: Optics",
      unit:"Unit 14",
      start:121,
      end:158,
      topics:["Full Exact Textbook Chapter","Reflection of Light","Refraction of Light","Total Internal Reflection","Thin Lenses","Application of Lenses","Visible Spectrum","Human Eye and Colour Perception","Gravitational Lensing","Acoustic Lenses","Examples / Activities / Tables / Side Boxes","Summary","Exercise"]
    },
    {
      title:"Chapter 6: Electrostatics",
      unit:"Unit 15",
      start:159,
      end:184,
      topics:["Full Exact Textbook Chapter","Static Charge","Conductors and Insulators","Charging and Discharging","Electroscope","Electric Field","Applications of Electrostatics","Electrical Breakdown","Examples / Activities / Tables / Side Boxes","Summary","Exercise"]
    },
    {
      title:"Chapter 7: Current Electricity",
      unit:"Unit 16",
      start:185,
      end:204,
      topics:["Full Exact Textbook Chapter","Electric Current","Alternating and Direct Current","Potential Difference","EMF","Ohm's Law","Resistance","Resistivity","Electrical Measuring Instruments","Experiment for Demonstration of Resistance","Examples / Activities / Tables / Side Boxes","Summary","Exercise"]
    },
    {
      title:"Chapter 8: Electric Circuits",
      unit:"Unit 17",
      start:205,
      end:234,
      topics:["Full Exact Textbook Chapter","Circuit Elements and Diagram","Resistors","Types of Resistors","Combination of Resistors","Combination of EMF Sources","Electricity and Its Uses","Electrical Energy","Electric Power","Household Circuits and Electric Safety","Examples / Activities / Tables / Side Boxes","Summary","Exercise"]
    },
    {
      title:"Chapter 9: Electronics",
      unit:"Unit 18",
      start:235,
      end:258,
      topics:["Full Exact Textbook Chapter","Semiconductors","N and P Type Semiconductors","PN Junction","Characteristics of Diode Under Biasing","Light Emitting Diode","Transistor","Relays and Switching Circuits","Transistor as a Switch","Digital Electronics","Fundamental Logic Gates","Universal Logic Gates","Uses of Logic Gates","Analogue and Digital Electronics","Quantum Computers","Examples / Activities / Tables / Side Boxes","Summary","Exercise"]
    },
    {
      title:"Chapter 10: Electromagnetism",
      unit:"Unit 19",
      start:259,
      end:280,
      topics:["Full Exact Textbook Chapter","Magnetic Field Due to Current Carrying Wire","Magnetic Field Due to Current Carrying Solenoid","Earth's Magnetic Field","Application of Magnetic Effect of Current","Force On a Current Carrying Conductor Place in a Magnetic Field","Current Carrying Coil in a Magnetic Field","Electric Motor","Electromagnetic Induction","Lenz's Law","Electric Generator","Transformer","Deflection of Electron Beam","Cathode Ray Oscilloscope","Examples / Activities / Tables / Side Boxes","Summary","Exercise"]
    },
    {
      title:"Chapter 11: Electromagnetic Waves",
      unit:"Unit 20",
      start:281,
      end:308,
      topics:["Full Exact Textbook Chapter","Electromagnetic Spectrum","Applications of Electromagnetic Waves","Risks Associated with Electromagnetic Waves","Scattering of Light","Nature of Light","Examples / Activities / Tables / Side Boxes","Summary","Exercise"]
    },
    {
      title:"Chapter 12: Nuclear Physics",
      unit:"Unit 21",
      start:309,
      end:364,
      topics:["Full Exact Textbook Chapter","Discovery of Nucleus","Nuclear Representations","Isotopes and Radioisotopes","Radioactivity","Nuclear Decay","Half-Life","Ionizing Nuclear Radiations","Applications of Radiation","Background Radiation","Nuclear Fission","Nuclear Fusion","Dark Matter","Falsifiability","Examples / Activities / Tables / Side Boxes","Summary","Exercise"]
    }
  ];

  function applyExactPhysicsChapters(){
    try{
      DATA.chapters.physics = EXACT_PHYSICS_CHAPTERS.map(ch => ({
        title: ch.title,
        topics: ch.topics
      }));

      if(!DATA.subjects.some(s => s.id === "physics")){
        DATA.subjects.push({ id:"physics", title:"Physics", icon:"⚡", active:true });
      }

      DATA.subjects = DATA.subjects.map(s => s.id === "physics"
        ? Object.assign({}, s, { title:"Physics", icon:"⚡", active:true })
        : s
      );
    }catch(e){}
  }

  function getExactPhysicsMeta(title){
    return EXACT_PHYSICS_CHAPTERS.find(ch => ch.title === title);
  }

  function loadScriptOnce(src){
    return new Promise((resolve,reject)=>{
      const existing=[...document.scripts].find(s => s.src === src);
      if(existing){
        resolve();
        return;
      }
      const s=document.createElement("script");
      s.src=src;
      s.onload=resolve;
      s.onerror=reject;
      document.head.appendChild(s);
    });
  }

  async function ensurePdfJs(){
    if(window.pdfjsLib) return window.pdfjsLib;
    await loadScriptOnce("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js");
    window.pdfjsLib.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    return window.pdfjsLib;
  }

  async function renderExactPhysicsPages(meta){
    const root=document.getElementById("physicsExactBookPages");
    const status=document.getElementById("physicsExactBookStatus");
    if(!root || !meta) return;

    root.innerHTML="";
    if(status) status.textContent="Loading exact textbook pages " + meta.start + " to " + meta.end + "...";

    try{
      const pdfjs=await ensurePdfJs();
      const pdf=await pdfjs.getDocument(PHYSICS_PDF_FILE).promise;

      const maxPage=Math.min(meta.end, pdf.numPages);
      const startPage=Math.max(1, meta.start);

      for(let pageNumber=startPage; pageNumber<=maxPage; pageNumber++){
        if(status) status.textContent="Rendering page " + pageNumber + " of " + maxPage + "...";

        const page=await pdf.getPage(pageNumber);
        const viewport=page.getViewport({ scale:1.25 });

        const card=document.createElement("div");
        card.className="physics-exact-page-card";
        card.id="physics-pdf-page-" + pageNumber;

        const label=document.createElement("div");
        label.className="physics-exact-page-label";
        label.textContent=meta.unit + " • PDF Page " + pageNumber;

        const canvas=document.createElement("canvas");
        const ctx=canvas.getContext("2d");
        canvas.width=viewport.width;
        canvas.height=viewport.height;
        canvas.className="physics-exact-page-canvas";

        card.appendChild(label);
        card.appendChild(canvas);
        root.appendChild(card);

        await page.render({ canvasContext:ctx, viewport }).promise;
      }

      if(status) status.textContent="Exact textbook chapter loaded. All original examples, exercises, tables, diagrams and boxes are shown below.";
    }catch(err){
      if(status) status.textContent="Could not load physics-textbook.pdf. Make sure physics-textbook.pdf is uploaded with app.js and style.css.";
      root.innerHTML='<div class="physics-exact-error">PDF loading failed. Upload <b>physics-textbook.pdf</b> to GitHub root with app.js and style.css.</div>';
      console.error(err);
    }
  }

  function renderExactPhysicsBook(chapter){
    const meta=getExactPhysicsMeta(chapter.title);
    if(!meta) return null;

    setTimeout(function(){
      renderExactPhysicsPages(meta);
    }, 50);

    return `
      <div class="digital-book-area physics-full-exact-area">
        <div class="digital-book-head physics-full-exact-head">
          <strong>Physics Exact Textbook Content</strong>
          <span>${meta.unit} • Pages ${meta.start}-${meta.end}</span>
        </div>

        <div class="physics-full-exact-warning">
          This view uses the original Physics textbook pages, so nothing is skipped:
          examples, exercises, MCQs, tables, diagrams, side boxes, summaries and activities are all included exactly from the PDF.
        </div>

        <div class="physics-full-exact-toolbar">
          <button type="button" onclick="document.getElementById('physics-pdf-page-${meta.start}')?.scrollIntoView({behavior:'smooth',block:'start'})">Chapter Start</button>
          <button type="button" onclick="document.getElementById('physics-pdf-page-${Math.max(meta.start, meta.end-4)}')?.scrollIntoView({behavior:'smooth',block:'start'})">Summary / Exercise Area</button>
          <a href="${PHYSICS_PDF_FILE}#page=${meta.start}" target="_blank" rel="noopener">Open Original PDF</a>
        </div>

        <div id="physicsExactBookStatus" class="physics-exact-status">Preparing exact textbook pages...</div>
        <div id="physicsExactBookPages" class="physics-exact-pages"></div>
      </div>
    `;
  }

  applyExactPhysicsChapters();

  const oldFullExactPhysicsRender = renderDigitalBookContent;

  renderDigitalBookContent = function(chapter){
    if(state.selectedSubject === "physics" && chapter && getExactPhysicsMeta(chapter.title)){
      const exact=renderExactPhysicsBook(chapter);
      if(exact) return exact;
    }
    return oldFullExactPhysicsRender ? oldFullExactPhysicsRender(chapter) : "";
  };

  setTimeout(function(){
    applyExactPhysicsChapters();
    try{
      if(state.selectedSubject === "physics" && typeof renderApp === "function"){
        renderApp();
      }
    }catch(e){}
  }, 200);

  window.EXACT_PHYSICS_CHAPTERS = EXACT_PHYSICS_CHAPTERS;
})();

// PHYSICS_SPLIT_EXACT_CHAPTER_RENDER_V1
(function(){
  const EXACT_PHYSICS_CHAPTERS_SPLIT = [
    { title:"Chapter 1: Heat Capacity and Modes of Heat Transfer", unit:"Unit 10", file:"physics-ch01.pdf", topics:["Full Exact Textbook Chapter","Specific Heat Capacity","Transfer of Heat","Applications of Heat Transfer","Greenhouse Effect and Global Warming","Flow of Heat in Geothermal Activities","Examples / Activities / Tables / Side Boxes","Summary","Exercise"] },
    { title:"Chapter 2: Thermal Expansion and Change of State", unit:"Unit 11", file:"physics-ch02.pdf", topics:["Full Exact Textbook Chapter","Kinetic Theory of Matter","Thermal Expansion","Evaporation","Latent Heat","Pressure Exerted by Gas Particles","Superconductivity","Examples / Activities / Tables / Side Boxes","Summary","Exercise"] },
    { title:"Chapter 3: Waves", unit:"Unit 12", file:"physics-ch03.pdf", topics:["Full Exact Textbook Chapter","Wave Motion","Wave Propagation","Characteristic Wave Parameters","Waves and their Types","Types of Waves On the Basis of Medium","Types of Waves On the Basis of Propagation","Wave Characteristics","Properties of Waves","Tsunamis","Examples / Activities / Tables / Side Boxes","Summary","Exercise"] },
    { title:"Chapter 4: Sound", unit:"Unit 13", file:"physics-ch04.pdf", topics:["Full Exact Textbook Chapter","Source of Sound","Nature of Sound Waves","Ultrasound","Infrasound","Characteristics of Sound Waves","Analysing Sound Waves","Speed of Sound","Noise","Reflection, Refraction and Diffraction of Sound Waves","Echo","Acoustics","Human Hearing System","Examples / Activities / Tables / Side Boxes","Summary","Exercise"] },
    { title:"Chapter 5: Optics", unit:"Unit 14", file:"physics-ch05.pdf", topics:["Full Exact Textbook Chapter","Reflection of Light","Refraction of Light","Total Internal Reflection","Thin Lenses","Application of Lenses","Visible Spectrum","Human Eye and Colour Perception","Gravitational Lensing","Acoustic Lenses","Examples / Activities / Tables / Side Boxes","Summary","Exercise"] },
    { title:"Chapter 6: Electrostatics", unit:"Unit 15", file:"physics-ch06.pdf", topics:["Full Exact Textbook Chapter","Static Charge","Conductors and Insulators","Charging and Discharging","Electroscope","Electric Field","Applications of Electrostatics","Electrical Breakdown","Examples / Activities / Tables / Side Boxes","Summary","Exercise"] },
    { title:"Chapter 7: Current Electricity", unit:"Unit 16", file:"physics-ch07.pdf", topics:["Full Exact Textbook Chapter","Electric Current","Alternating and Direct Current","Potential Difference","EMF","Ohm's Law","Resistance","Resistivity","Electrical Measuring Instruments","Experiment for Demonstration of Resistance","Examples / Activities / Tables / Side Boxes","Summary","Exercise"] },
    { title:"Chapter 8: Electric Circuits", unit:"Unit 17", file:"physics-ch08.pdf", topics:["Full Exact Textbook Chapter","Circuit Elements and Diagram","Resistors","Types of Resistors","Combination of Resistors","Combination of EMF Sources","Electricity and Its Uses","Electrical Energy","Electric Power","Household Circuits and Electric Safety","Examples / Activities / Tables / Side Boxes","Summary","Exercise"] },
    { title:"Chapter 9: Electronics", unit:"Unit 18", file:"physics-ch09.pdf", topics:["Full Exact Textbook Chapter","Semiconductors","N and P Type Semiconductors","PN Junction","Characteristics of Diode Under Biasing","Light Emitting Diode","Transistor","Relays and Switching Circuits","Transistor as a Switch","Digital Electronics","Fundamental Logic Gates","Universal Logic Gates","Uses of Logic Gates","Analogue and Digital Electronics","Quantum Computers","Examples / Activities / Tables / Side Boxes","Summary","Exercise"] },
    { title:"Chapter 10: Electromagnetism", unit:"Unit 19", file:"physics-ch10.pdf", topics:["Full Exact Textbook Chapter","Magnetic Field Due to Current Carrying Wire","Magnetic Field Due to Current Carrying Solenoid","Earth's Magnetic Field","Application of Magnetic Effect of Current","Force On a Current Carrying Conductor Place in a Magnetic Field","Current Carrying Coil in a Magnetic Field","Electric Motor","Electromagnetic Induction","Lenz's Law","Electric Generator","Transformer","Deflection of Electron Beam","Cathode Ray Oscilloscope","Examples / Activities / Tables / Side Boxes","Summary","Exercise"] },
    { title:"Chapter 11: Electromagnetic Waves", unit:"Unit 20", file:"physics-ch11.pdf", topics:["Full Exact Textbook Chapter","Electromagnetic Spectrum","Applications of Electromagnetic Waves","Risks Associated with Electromagnetic Waves","Scattering of Light","Nature of Light","Examples / Activities / Tables / Side Boxes","Summary","Exercise"] },
    { title:"Chapter 12: Nuclear Physics", unit:"Unit 21", file:"physics-ch12.pdf", topics:["Full Exact Textbook Chapter","Discovery of Nucleus","Nuclear Representations","Isotopes and Radioisotopes","Radioactivity","Nuclear Decay","Half-Life","Ionizing Nuclear Radiations","Applications of Radiation","Background Radiation","Nuclear Fission","Nuclear Fusion","Dark Matter","Falsifiability","Examples / Activities / Tables / Side Boxes","Summary","Exercise"] }
  ];

  function applySplitPhysics(){
    try{
      DATA.chapters.physics = EXACT_PHYSICS_CHAPTERS_SPLIT.map(c => ({ title:c.title, topics:c.topics }));
      if(!DATA.subjects.some(s => s.id === "physics")){
        DATA.subjects.push({ id:"physics", title:"Physics", icon:"⚡", active:true });
      }
    }catch(e){}
  }

  function getSplitMeta(title){
    return EXACT_PHYSICS_CHAPTERS_SPLIT.find(c => c.title === title);
  }

  function renderSplitExactPhysics(chapter){
    const meta = getSplitMeta(chapter.title);
    if(!meta) return null;

    return `
      <div class="digital-book-area physics-split-exact-area">
        <div class="digital-book-head physics-split-exact-head">
          <strong>Physics Exact Textbook</strong>
          <span>${meta.unit} • ${meta.file}</span>
        </div>

        <div class="physics-split-exact-alert">
          This is the exact chapter PDF split from the textbook, so examples, exercises, MCQs, tables, diagrams, side boxes, summaries and activities are included.
        </div>

        <div class="physics-split-actions">
          <a href="${meta.file}" target="_blank" rel="noopener">Open Chapter PDF</a>
        </div>

        <iframe class="physics-split-frame" src="${meta.file}#view=FitH" title="${chapter.title}"></iframe>
      </div>
    `;
  }

  applySplitPhysics();

  const oldSplitPhysicsRender = renderDigitalBookContent;
  renderDigitalBookContent = function(chapter){
    if(state.selectedSubject === "physics" && chapter && getSplitMeta(chapter.title)){
      const exact = renderSplitExactPhysics(chapter);
      if(exact) return exact;
    }
    return oldSplitPhysicsRender ? oldSplitPhysicsRender(chapter) : "";
  };

  setTimeout(function(){
    applySplitPhysics();
    try{ if(state.selectedSubject === "physics" && typeof renderApp === "function") renderApp(); }catch(e){}
  }, 200);

  window.EXACT_PHYSICS_CHAPTERS_SPLIT = EXACT_PHYSICS_CHAPTERS_SPLIT;
})();

// PREP_AI_HIDE_CONFIG_ON_AUTH_V1
(function(){
  function isAuthScreen(){
    const bodyText = (document.body.innerText || "").toLowerCase();
    const hasPassword = !!document.querySelector('input[type="password"]');
    const hasLoginRegisterText =
      bodyText.includes("login") ||
      bodyText.includes("log in") ||
      bodyText.includes("register") ||
      bodyText.includes("sign up") ||
      bodyText.includes("create account");

    const hasAppWorkspace =
      bodyText.includes("dashboard") ||
      bodyText.includes("subjects") ||
      bodyText.includes("chapters") ||
      bodyText.includes("progress") ||
      bodyText.includes("digital book");

    return hasPassword && hasLoginRegisterText && !hasAppWorkspace;
  }

  function hideAiConfigOnAuth(){
    const auth = isAuthScreen();

    document.querySelectorAll("button,a,div,section,aside,article").forEach(function(el){
      const txt = (el.innerText || el.textContent || "").trim().toLowerCase();

      const isAiConfig =
        txt === "configure ai" ||
        txt.includes("configure ai") ||
        txt.includes("api key") ||
        txt.includes("openai key") ||
        txt.includes("ai settings");

      if(!isAiConfig) return;

      const target =
        el.closest(".card") ||
        el.closest(".panel") ||
        el.closest(".settings") ||
        el.closest(".ai-config") ||
        el.closest("section") ||
        el;

      if(auth){
        target.setAttribute("data-prep-ai-auth-hidden", "true");
        target.style.display = "none";
      }else{
        if(target.getAttribute("data-prep-ai-auth-hidden") === "true"){
          target.style.display = "";
          target.removeAttribute("data-prep-ai-auth-hidden");
        }
      }
    });
  }

  function protectConfigureAiClick(){
    document.addEventListener("click", function(e){
      const btn = e.target.closest("button,a");
      if(!btn) return;

      const txt = (btn.innerText || btn.textContent || "").trim().toLowerCase();

      if(txt.includes("configure ai") || txt.includes("api key") || txt.includes("ai settings")){
        if(isAuthScreen()){
          e.preventDefault();
          e.stopPropagation();
          alert("Please login or register first. AI configuration is available after login.");
          return false;
        }
      }
    }, true);
  }

  function runFix(){
    hideAiConfigOnAuth();
    setTimeout(hideAiConfigOnAuth, 100);
    setTimeout(hideAiConfigOnAuth, 500);
    setTimeout(hideAiConfigOnAuth, 1000);
  }

  protectConfigureAiClick();

  const observer = new MutationObserver(runFix);
  observer.observe(document.documentElement, {
    childList:true,
    subtree:true,
    characterData:true
  });

  window.addEventListener("load", runFix);
  window.addEventListener("hashchange", runFix);
  window.addEventListener("storage", runFix);

  runFix();
})();
