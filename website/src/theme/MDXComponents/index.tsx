import React from 'react';
import MDXHead from '@theme/MDXComponents/Head';
import MDXCode from '@theme/MDXComponents/Code';
import MDXA from '@theme/MDXComponents/A';
import MDXPre from '@theme/MDXComponents/Pre';
import MDXDetails from '@theme/MDXComponents/Details';
import MDXHeading from '@theme/MDXComponents/Heading';
import MDXUl from '@theme/MDXComponents/Ul';
import MDXImg from '@theme/MDXComponents/Img';
import Admonition from '@theme/Admonition';
import Mermaid from '@theme/Mermaid';

import ImageSlider from '../../components/image-slider/image-slider';
import ImageBoxModal from '../../components/image-box-modal/image-box-modal';
import VideoBox from '../../components/video-box/video-box';
import GameInfo from '../../components/game-info/game-info';
import SkipMe from '../../components/skip-me/skip-me';
import OWTabs from '../../components/ow-tabs/ow-tabs';
import OWTabItem from '../../components/ow-tabs/ow-tab-item';
import ImageToggle from '../../components/image-toggle/image-toggle';
import OWTable from '../../components/ow-table/ow-table';
import OWTableRow from '../../components/ow-table/ow-table-row';
import OWexpandedRowGroup from '../../components/ow-table/ow-expanded-row-group';
import OWdataCell from '../../components/ow-table/ow-data-cell';
import Tagger from '../../components/tagging/Tagger';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SimpleTab from '../../components/simple-tab/simple-tab';
import DebugWrapper from '../../components/debug/debug-wrapper';
import EventsData from '../../components/game-events-status/EventsData';
import FancyLink from '../../components/fancy/fancy-link';
import MatchOnly from '../../components/content-tags/gep/match-only';
import DisplayJSON from '../../components/display-json/index';


import type {MDXComponentsObject} from '@theme/MDXComponents';

const devMode = process.env.NODE_ENV === "development";

const MDXComponents: MDXComponentsObject = {
  head: MDXHead,
  code: MDXCode,
  a: MDXA,
  pre: MDXPre,
  details: MDXDetails,
  ul: MDXUl,
  img: MDXImg,
  h1: (props) => <MDXHeading as="h1" {...props} />,
  h2: (props) => <MDXHeading as="h2" {...props} />,
  h3: (props) => <MDXHeading as="h3" {...props} />,
  h4: (props) => <MDXHeading as="h4" {...props} />,
  h5: (props) => <MDXHeading as="h5" {...props} />,
  h6: (props) => <MDXHeading as="h6" {...props} />,
  admonition: Admonition,
  mermaid: Mermaid,

  // Custom Components
  ...DisplayJSON,
  
  ...WrapAll({
    ImageSlider: ImageSlider,
    ImageBoxModal: ImageBoxModal,
    VideoBox: VideoBox,
    GameInfo: GameInfo,
    SkipMe: SkipMe,
    OWTabs: OWTabs,
    OWTabItem: OWTabItem,
    ImageHeading: ImageToggle,
    OWTable: OWTable,
    OWTableRow: OWTableRow,
    OWexpandedRowGroup: OWexpandedRowGroup,
    OWdataCell: OWdataCell,
    Tagger: Tagger,
    Tabs: Tabs,
    TabItem: TabItem,
    SimpleTab: SimpleTab,
    EventsData: EventsData,
    FancyLink: FancyLink,
    MatchOnly: MatchOnly,
    ImageToggle: ImageToggle,
  })
};

function WrapAll(elements: {[key: string]: React.FC<any>}) {
  if(!devMode) return elements;
  const result = {};
  Object.keys(elements).forEach((key) => {
    result[key] = DebugWrapper(elements[key]);
  });
  return result;
}


export default MDXComponents;