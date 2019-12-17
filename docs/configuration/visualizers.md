---
id: visualizers
title: Visualizers
sidebar_label: Visualizers
keywords:
  - OpenHIM
  - Visualizers
description: Manage OpenHIM visualizers
---

The visualizer displays a live view of how transactions are being routed through the OpenHIM. Multiple visualizers can be created and these are shared among OpenHIM admin users.

The following is an explanation of the fields that are used in the visualizations Management form:

- **Visualizer Name** - A unique name to identify the visualizer.
- **Components** - The components to be added to the visualizer.

  - Event Type - The nature of the event being triggered:
    - Primary Route - These routes are created during the creation of a channel.
    - Secondary Route - These routes are created during the creation of a channel and are not set as the primary route.
    - Orchestration - A mediator that processes a request and makes more subsequent request to perform a specific action.
    - Channel - Channels that are currently available in the OpenHIM console. See [OpenHim Channels](#openhim-channels) for more information regarding channels.
  - Event Name - The name of the event. These names are available as a dropdown for `Primary Route`, `Secondary Route` and Channel.
  - Display - An easily identifiable name to be displayed in the visualizers list of components being monitored.

    > **Note**: You may add one or more components by completing the fields above and clicking on the green `+` button. The red `X` button allows you to delete a component.

- **Channels** - A dropdown list of channels where you can select a channel to be monitored. You may select one or more channels by clicking on the Select Channel dropdown and choose a channel name. The red `X` button allows you to delete a channel.
- **Mediators** - The mediators to be added to the visualizer. Select a mediator from the dropdown list of mediator names. See [OpenHIM Mediators](#openhim-mediators) for more information regarding mediators.
- **Advanced Settings** - Allows you to customize your OpenHIM visualizer:
  - _Visualizer Color Management_ - Choose your desired color styles for events monitoring.
  - _Visualizer Size Management_ - Choose your desired size for the visualizer.
  - _Visualizer Time Management_ - Choose when and for how long to display an event.

## How to add a visualizer

> **Note**: All fields marked with a \* indicates a mandatory field.

1. Log in to your OpenHIM console.
1. Click on `Visualizers` found in the left navigation menu.
1. Click on the green `+ Visualizer` button.
1. Supply all the required fields and click the blue `Create Visualizer` button when completed. See the above section which may assist with this process.

## How to remove a visualizer

1. Log in to your OpenHIM console.
1. Click on `Visualizers` found in the left navigation menu.
1. Locate the visualizer to be deleted.
1. Click on the red `X` button.
1. You will be prompted to confirm your action to delete the chosen visualizer.

## How to edit a visualizer

1. Log in to your OpenHIM console.
1. Click on `Visualizers` found in the left navigation menu.
1. Locate the visualizer to be edited.
1. Click on the amber button that looks like a pencil.
1. Update the visualizer information as required.
1. Click on the `Save Changes` button to update the visualizer.

## How to copy a visualizer's config

1. Log in to your OpenHIM console.
1. Click on `Visualizers` found in the left navigation menu.
1. Locate the visualizer to be copied.
1. Click on the blue button that looks like an A4 paper icon on the left.
1. Give your visualizer a unique name.
1. Click on the `Create Visualizer` button to create the new visualizer using the same config as the visualizer being copied.
