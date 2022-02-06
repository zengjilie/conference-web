import React from 'react';
import '../stylesheets/introducation.css'

function Introductions() {
  return (
    <div className='intro-box'>
      <div className='intro-wrapper'>
        <p className='intro-title'>Introduction</p>
        <p className='intro-text'>
          Explainable AI in health is in its early stages and can be more complex given the highly heterogeneous real-world clinical setting with inbuilt uncertainty. In healthcare, AI comes in the form of human-centered approach which facilitates doctors during the decision process of diagnosis and treatment through clinical decision support systems (CDSS) which are often based on existing knowledge bases and predefined inference rules. With the unprecedented success of deep neural networks which outperform existing machine learning models implemented in clinical settings, explainable AI should meet not only the criteria of human comprehension, but also the ethical and legal expectations to avoid infringement on patient's rights and automation. SHAP (SHapley Additive explanations) has been calculated in clinical practice to understand patient risk prediction. This framework can generate counterfactual outcomes to explain the predictions of a machine learning model. But for deep learning models, more advanced post-hoc explanation methods are needed. For example, DeepSHAP has been developed by modifying the DeepLift algorithm to estimate the relative importance (i.e., Shapley score) of input features through comparing the activations caused by a reference input. The application of existing post-hoc explanation models requires significant readjustment to the specific clinical settings. In healthcare, shared semantics including biomedical ontologies and controlled vocabularies (e.g., SNOMED CT, ICD-10, LOINC, RxNorm) have been widely implemented in the clinical decision-making systems. With the benefits of formal data semantics and rich knowledge encoded in the biomedical ontologies, knowledge graphs can be formed to better facilitate explainability of AI. For instance, the interconnections and interdependency of input features can be identified and explained through knowledge graphs. This workshop aims to explore this timely topic with domain experts, researchers, and practitioners to have a deep discussion about these critical issues.
        </p>
      </div>
    </div>
  )
}

export default Introductions;
