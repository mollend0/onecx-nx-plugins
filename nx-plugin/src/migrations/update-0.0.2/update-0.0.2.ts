/* eslint-disable @typescript-eslint/no-unused-vars */
import { Tree } from '@nx/devkit';

export default function update(tree) {
  const filePath = 'project.json';
  if (tree.exists(filePath)) {
    const content = tree.read(filePath, 'utf-8');
    const json = JSON.parse(content);

    if (json.name) {
      json.name = 'test-project-v0.0.2';
    }

    tree.write(filePath, JSON.stringify(json, null, 2));
  }
}
