<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
  <ul>
  <xsl:for-each select="widgetlist/widget">
    <li>
    <xsl:value-of select="title"/>
    </li>
  </xsl:for-each>
  </ul>
</xsl:template>
</xsl:stylesheet>
