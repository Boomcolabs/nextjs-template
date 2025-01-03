import React from 'react';
import i18n from '@/lib/i18n';

// convert date to how many days ago
export function dateToDaysAgo(date: string) {
  const now = new Date();
  const created = new Date(date);
  const diff = now.getTime() - created.getTime();
  const days = diff / (1000 * 60 * 60 * 24);
  return Math.floor(days) < 0 ? 0 : Math.floor(days);
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getPx(size: number) {
  // TODO: do this
  const designWidth = 1920;
  const ratio = size / designWidth;
  return `${ratio * 100}vw`;
}

export function formatDate(date: string) {
  if (!date) return '';
  const d = new Date(date);
  const month = d.toLocaleString('default', { month: 'short' });
  const day = d.getDate();
  const year = d.getFullYear();
  const hour = d.getHours();
  const minute = d.getMinutes();
  return `${day} ${month} ${year} at ${hour}:${minute} am`;
}

export function extractText(children: React.ReactNode): string {
  if (typeof children === 'string') {
    return children;
  }

  if (Array.isArray(children)) {
    return children.map(extractText).join('');
  }

  if (React.isValidElement(children)) {
    return extractText(children.props.children);
  }

  return '';
}

export function covertToSortMonthYearFormat(date: string) {
  if (!date) return '';
  const dmyFormat = /^\d{2}-\d{2}-\d{4}$/;
  let d;
  if (dmyFormat.test(date)) {
    const [day, month, year] = date.split('-');
    d = new Date(`${year}-${month}-${day}`);
  } else {
    d = new Date(date);
  }
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

export function getRegions(address_name: string) {
  const regions = address_name.split(' ');
  return {
    upperRegion: regions[0] || 'OTHER',
    middleRegion: regions[1] || 'OTHER',
    lowerRegion: regions[2] || 'OTHER',
  };
}

export const topicMapping = (value: string) => {
  switch (value) {
    case 'real-estate':
      return i18n.t('screens.forum.topic-list.real-estate');

    case 'career':
      return i18n.t('screens.forum.topic-list.career');

    default:
      return i18n.t('common.other');
  }
};

export const realEstateCategoryMapping = (value: string) => {
  switch (value) {
    case 'RENT':
      return i18n.t('screens.real-estate.topic-list.rent');

    case 'LEASE':
      return i18n.t('screens.real-estate.topic-list.lease');

    default:
      return i18n.t('common.other');
  }
};

export const notiBoardTypeMapping = (value: string) => {
  switch (value) {
    case 'NOTIFICATION':
      return i18n.t('common.notification');

    case 'EVENT':
      return i18n.t('common.event');

    case 'ANNOUNCEMENT':
      return i18n.t('common.annoucement');

    default:
      return i18n.t('common.other');
  }
};

export const formatSalary = (salary: string) => {
  if (!salary) return '';
  return salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
