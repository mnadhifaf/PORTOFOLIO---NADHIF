import {
  ExperienceItem,
  NEURO_TELEMETRY_PROFILES,
  NeuroTelemetryProfile,
  StackLayer,
} from '../data/portfolioData';

export function filterLayers(layers: StackLayer[], query: string): StackLayer[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return layers;
  }
  return layers.filter(
    (layer) =>
      layer.label.toLowerCase().includes(normalized) ||
      layer.badge.toLowerCase().includes(normalized) ||
      layer.scriptTag.toLowerCase().includes(normalized)
  );
}

export function toggleLayerVisibility(
  hiddenLayerIds: readonly StackLayer['id'][],
  layerId: StackLayer['id']
): StackLayer['id'][] {
  if (hiddenLayerIds.includes(layerId)) {
    return hiddenLayerIds.filter((id) => id !== layerId);
  }
  return [...hiddenLayerIds, layerId];
}

export function getNeuroTelemetryState(
  mode: NeuroTelemetryProfile['mode']
): NeuroTelemetryProfile {
  return NEURO_TELEMETRY_PROFILES[mode];
}

export function filterExperiences(
  items: ExperienceItem[],
  category: 'all' | ExperienceItem['category']
): ExperienceItem[] {
  if (category === 'all') {
    return items;
  }
  return items.filter((item) => item.category === category);
}

export interface CollabInquiryInput {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export interface CollabInquiryValidation {
  valid: boolean;
  errors: Partial<Record<keyof CollabInquiryInput, string>>;
}

export function validateCollabInquiry(input: CollabInquiryInput): CollabInquiryValidation {
  const errors: Partial<Record<keyof CollabInquiryInput, string>> = {};

  if (!input.name.trim() || input.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.email.trim() || !emailPattern.test(input.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!input.topic.trim()) {
    errors.topic = 'Please select a collaboration track.';
  }

  if (!input.message.trim() || input.message.trim().length < 10) {
    errors.message = 'Please include a short project note (at least 10 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
