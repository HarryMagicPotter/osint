import { ToolDatabase } from './types';
import { toolDatabasePart1 } from './tools-part1';
import { toolDatabasePart2 } from './tools-part2';
import { toolDatabasePart3 } from './tools-part3';
import { toolDatabasePart4 } from './tools-part4';
import { toolDatabasePart5 } from './tools-part5';
import { toolDatabasePart6 } from './tools-part6';
import { toolDatabasePart7 } from './tools-part7';
import { toolDatabasePart8 } from './tools-part8';
import { toolDatabasePart9 } from './tools-part9';
import { toolDatabasePart10 } from './tools-part10';
import { toolDatabasePart11 } from './tools-part11';
import { toolDatabasePart12 } from './tools-part12';
import { toolDatabasePart13 } from './tools-part13';
import { toolDatabasePart14 } from './tools-part14';
import { toolDatabasePart15 } from './tools-part15';
import { toolDatabasePart16 } from './tools-part16';

const parts = [
  toolDatabasePart1,
  toolDatabasePart2,
  toolDatabasePart3,
  toolDatabasePart4,
  toolDatabasePart5,
  toolDatabasePart6,
  toolDatabasePart7,
  toolDatabasePart8,
  toolDatabasePart9,
  toolDatabasePart10,
  toolDatabasePart11,
  toolDatabasePart12,
  toolDatabasePart13,
  toolDatabasePart14,
  toolDatabasePart15,
  toolDatabasePart16
];

const merged: ToolDatabase = {};

parts.forEach(part => {
  Object.entries(part).forEach(([category, tools]) => {
    if (!merged[category]) {
      merged[category] = [];
    }
    tools.forEach(tool => {
      // Avoid duplicates within the same category
      if (!merged[category].some(t => t.url === tool.url)) {
        merged[category].push(tool);
      }
    });
  });
});

export const toolDatabase = merged;
