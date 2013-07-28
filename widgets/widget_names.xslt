<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="4.0" encoding="iso-8859-1" indent="yes"/>

<xsl:template match="/">
  <table>
    <xsl:apply-templates select="widgetlist/widget"/>
 </table>
</xsl:template>

<xsl:template match="widget">
  <tr id="@id">
    <td>
      <img class="sidebar-logos" src="{logo/@source}"/>
    </td>
    <td>
      <xsl:value-of select="@displayname"/>
    </td>
  </tr>
</xsl:template>

</xsl:stylesheet>
