import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import update from './update-0.0.2';

describe('update-0.0.2 migration', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace({ layout: 'apps-libs' });
    tree.write(
      'project.json',
      JSON.stringify({ name: 'test-project' }, null, 2)
    );
  });

  it('should update the project name in project.json', async () => {
    await update(tree);

    const updatedProject = JSON.parse(tree.read('project.json', 'utf-8'));
    expect(updatedProject.name).toBe('test-project-v0.0.2');
  });
});
