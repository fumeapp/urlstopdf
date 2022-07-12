/* eslint-disable no-await-in-loop */
import {Command, CliUx} from '@oclif/core'
import puppeteer = require('puppeteer')
import fs = require('fs')
import PDFDocument = require('pdfkit')

export default class Gen extends Command {
  static description = 'Generate a PDF'

  static examples = [
    '$ urlstopdf gen https://google.com/ 16',
  ]

  static args = [
    {
      name: 'url',
      description: 'URL to screenshot',
      required: true,
    },
    {
      name: 'count',
      description: 'Amount of images to generate',
      required: true,
    },
  ]

  async run(): Promise<void> {
    const {args} = await this.parse(Gen)
    const browser = await puppeteer.launch()
    const pdf = new PDFDocument({autoFirstPage: false})

    CliUx.ux.action.start(`Generating 1/${args.count} versions of ${args.url}`)

    pdf.pipe(fs.createWriteStream(`envelopes-${args.count}.pdf`))

    for (let i = 0; i < args.count; i++) {
      const page = await browser.newPage()
      page.setViewport({width: 816, height: 432, deviceScaleFactor: 2})
      await page.goto(args.url, {waitUntil: 'networkidle0'})
      await page.screenshot({path: `envelope${i}.png`})
      pdf.addPage({size: [816, 432], margin: 0}).image(`envelope${i}.png`, {width: 816, height: 432})
      fs.unlink(`envelope${i}.png`, () => ({}))
      CliUx.ux.action.start(`Generating ${i + 1}/${args.count} versions of ${args.url}`)
    }

    await browser.close()
    pdf.end()
    CliUx.ux.action.stop()
  }
}
